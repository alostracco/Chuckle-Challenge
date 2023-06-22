import FadeInUp from '@/animations/FadeInUp';
import { Box, Button, Card, CardBody, Text, useColorModeValue } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';

const WebcamFeed = () => {

  const CardBg = useColorModeValue('#fff7e6', 'gray.700');
  const ButtonBg = useColorModeValue('orange.100', 'gray.600');

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
            <Button
              bg={ButtonBg}
              onClick={askForPermission}
              mt="40%"
              mx="auto"
              display="block"
            >
              Enable Webcam
            </Button>
            <CardBody>
              <Text textAlign="center" fontWeight="medium">
                to start the AI!
              </Text>
            </CardBody>
          </Card>
        )}
      </div>
    </Box>
    </FadeInUp>
  );
};

export default WebcamFeed;
