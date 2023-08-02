import FadeInUp from '@/animations/FadeInUp';
import Hover from '@/animations/Hover';
import { Box, Button, Card, CardBody, Center, Flex, Stack, Text, chakra, useColorModeValue, useToast } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import Timer from './Timer';

const WebcamFeed: React.FC = () => {

  const ButtonBg = useColorModeValue('orange.100', 'blue.200');
  const ButtonHoverBg = useColorModeValue('orange.200', 'blue.300');
  const CardBg = useColorModeValue('#fff7e6', 'gray.700');

  const CustomButton = chakra(Button, {
    baseStyle: {
      bg: ButtonBg,
      color: 'gray.800',
      _hover: {
        bg: ButtonHoverBg,
      },
    },
  });

  const [startTimer, setStartTimer] = useState(false);

  const toast = useToast({
    position: 'top',
    isClosable: true,
    variant: useColorModeValue('subtle', 'solid'),
    colorScheme: useColorModeValue('orange', 'blue'),
  });

  const success = () => {
    const loadingToastId = toast({
      title: 'Starting AI...',
      status: 'loading',
      duration: 2000,
      isClosable: false,
      position: 'top',
    });

    setTimeout(() => {
      toast.update(loadingToastId, {
        title: 'Activated AI!',
        status: 'success',
        duration: 3000,
        isClosable: false,
      });
      setStartTimer(true);
    }, 1800);
  };

  const error = () => {
    toast({
      title: 'Unable to Activate',
      description: 'Enable webcam permissions to begin',
      status: 'error',
      duration: 3000,
    })
  }

  let activated = false;

  const handleStartButtonClick = () => {
    if (activated === false) {
      if (hasPermission) {
        activated = true;
        success()
      } else {
        error()
      }
    }
  };

  const webcamRef = useRef<Webcam>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasPermission, setHasPermission] = useState(false);

  const [containerDimensions, setContainerDimensions] = useState({
    width: '16rem',
    height: '16rem',
  });

  const videoConstraints = {
    width: parseInt(containerDimensions.width),
    height: parseInt(containerDimensions.height),
    facingMode: 'user',
  };


  const captureFrame = () => {
    activated = true;
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();

      // Make an HTTP POST request to the Flask API backend
      fetch('https://chucklechallengebackend.link/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image: imageSrc }),
      })
        .then(response => response.json())
        .then(data => {
          // Handle the response data
          const facialExpression = data.facial_expression;
          console.log(facialExpression);
          if (facialExpression === 'Smiling') {
            setStartTimer(false);
            activated = false;
          }
        })
        .catch(error => {
          // Handle any errors
          console.error('Error:', error);
        });
    }
  };


  const handleUserMedia = (status: string) => {
    setHasPermission(status === 'granted');
  };

  useEffect(() => {
    navigator.permissions.query({ name: 'camera' as PermissionName }).then((result) => {
      handleUserMedia(result.state);
      result.onchange = () => {
        handleUserMedia(result.state);
      };
    });
  }, []);

  useEffect(() => {
    const updateContainerDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setContainerDimensions({ width: `${width}px`, height: `${height}px` });
      }
    };

    window.addEventListener('resize', updateContainerDimensions);
    updateContainerDimensions();

    return () => {
      window.removeEventListener('resize', updateContainerDimensions);
    };
  }, []);

  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined;

    if (startTimer) {
      interval = setInterval(captureFrame, 500);
    }
    return () => {
      clearInterval(interval);
    };
  }, [startTimer]);


  const askForPermission = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(() => handleUserMedia('granted'))
      .catch(() => handleUserMedia('denied'));
  };

  return (
    <Stack spacing={5}>
      <FadeInUp index={3}>
        <Box>
          <div
            ref={containerRef}
            className="rounded-lg overflow-hidden w-[16rem] h-[16rem] shadow-md border border-white"
          >
            {hasPermission ? (
              <Webcam
                audio={false}
                mirrored
                ref={webcamRef}
                videoConstraints={videoConstraints}
                className="rounded-lg w-full h-full"
              />
            ) : (
              <Card height="16rem" width="16rem" bg={CardBg}>
                <Center flexDirection='column' mt='40%'>
                  <Hover>
                    <CustomButton
                      onClick={askForPermission}
                    >
                      Enable Webcam
                    </CustomButton>
                  </Hover>
                  <CardBody>
                    <Text textAlign="center" fontWeight="medium">
                      to start the AI!
                    </Text>
                  </CardBody>
                </Center>
              </Card>
            )}
          </div>
        </Box>
      </FadeInUp>
      <FadeInUp index={4}>
        <Flex alignItems='center' justifyContent='space-evenly'>
          <Hover>
            <CustomButton
              onClick={handleStartButtonClick}
            >
              Start
            </CustomButton>
          </Hover>
          <Timer startTimer={startTimer} />
        </Flex>
      </FadeInUp>
    </Stack>
  );
};

export default WebcamFeed;
