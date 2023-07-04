import FadeInUp from '@/animations/FadeInUp';
import Hover from '@/animations/Hover';
import { Box, Button, Card, CardBody, Center, Flex, Spacer, Stack, Text, chakra, useColorMode, useColorModeValue, useToast } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import Timer from './Timer';

const WebcamFeed = () => {

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

  const handleStartButtonClick = () => {
    if (hasPermission) {
      success()
      setStartTimer(true);
    } else {
      error()
    }
  };

  const webcamRef = useRef(null);
  const containerRef = useRef(null);
  const [hasPermission, setHasPermission] = useState(null);

  const [containerDimensions, setContainerDimensions] = useState({
    width: '16rem',
    height: '16rem',
  });

  const videoConstraints = {
    width: containerDimensions.width,
    height: containerDimensions.height,
    facingMode: 'user',
  };

  const captureFrame = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      // Pass the `imageSrc` to machine learning model for processing

      // Make a POST request to the Flask API
      // Might need to change address to 'http://localhost:3000/api/emotion'
      fetch('/api/emotion', {
        method: 'POST',
        body: imageSrc,
      })
        .then((response) => response.json())
        .then((data) => {
          // Process the response data
          const predictedEmotion = data.emotion;
          // Update the UI or take further actions based on the predicted emotion
        })
        .catch((error) => {
          console.error('Error:', error);
        });
      }
    }
  };

  const handleUserMedia = (status) => {
    setHasPermission(status === 'granted');
  };

  useEffect(() => {
    navigator.permissions.query({ name: 'camera' }).then((result) => {
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
        setContainerDimensions({ width, height });
      }
    };

    window.addEventListener('resize', updateContainerDimensions);
    updateContainerDimensions();

    return () => {
      window.removeEventListener('resize', updateContainerDimensions);
    };
  }, []);

  {/*
  React.useEffect(() => {
    const interval = setInterval(captureFrame, 200);

    return () => {
      clearInterval(interval);
    };
  }, []);
  */}

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
