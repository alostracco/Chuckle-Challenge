import { Box, Center, Fade, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const IntroductionScreen = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Fade in={show}>
      <Box
        position="fixed"
        top={0}
        left={0}
        width="100vw"
        height="100vh"
        bg="black"
        zIndex={99999999999}
        pointerEvents={show ? "auto" : "none"}
        opacity={show ? 1 : 0}
        transition="opacity 0.5s ease-out"
      >
        <Center height='100%'>
          <Image src="/Chuckle Challenge v2 logo.png" alt="Logo" width='60vw'/>
        </Center>
      </Box>
    </Fade>
  );
};

export default IntroductionScreen;
