import FadeInUp from "@/animations/FadeInUp";
import { Card, CardHeader, Heading, CardBody, CardFooter, Button, Text, Center, Flex, useColorModeValue, chakra } from "@chakra-ui/react";
import Hover from "@/animations/Hover";

const HowTo: React.FC = () => {

    const CardBg = useColorModeValue('#fff7e6', 'gray.700');
    const CardText = useColorModeValue("gray.600", "gray.400");
    const ButtonBg = useColorModeValue('orange.100', 'blue.200');
    const ButtonHoverBg = useColorModeValue('orange.200', 'blue.300');

    const CustomButton = chakra(Button, {
        baseStyle: {
            _hover: {
                bg: ButtonHoverBg,
            },
        },
    });

    const askForPermission = () => {
        navigator.mediaDevices.getUserMedia({ video: true });
    };

    const handleButtonClick = () => {
        window.scrollTo({ top: 280, behavior: "smooth" });
    };

    return (
        <Center flexDirection='column' gap={20}>
            <FadeInUp index={0}>
                <Heading as='h1' size='2xl' fontWeight='extrabold'>
                    How To Play
                </Heading>
            </FadeInUp>
            <Flex flexDirection='row' gap={5}>
                <FadeInUp index={2}>
                    <Hover>
                        <Card shadow='md' width='15rem' bg={CardBg}>
                            <CardHeader>
                                <Heading size='md'>Enable Camera 📸</Heading>
                            </CardHeader>
                            <CardBody>
                                <Text color={CardText}>Give webcam access to the AI to track your facial expressions.</Text>
                            </CardBody>
                            <CardFooter>
                                <CustomButton onClick={askForPermission} bg={ButtonBg} color='gray.800'>Allow Access</CustomButton>
                            </CardFooter>
                        </Card>
                    </Hover>
                </FadeInUp>
                <FadeInUp index={1}>
                    <Hover>
                        <Card shadow='md' width='15rem' bg={CardBg}>
                            <CardHeader>
                                <Heading size='md'>Choose a Video 🎥</Heading>
                            </CardHeader>
                            <CardBody>
                                <Text color={CardText}>Search for a funny video or let us pick one at random for you from YouTube.</Text>
                            </CardBody>
                            <CardFooter>
                                <CustomButton bg={ButtonBg} color='gray.800' onClick={handleButtonClick}>Choose Video</CustomButton>
                            </CardFooter>
                        </Card>
                    </Hover>
                </FadeInUp>
                <FadeInUp index={2}>
                    <Hover>
                        <Card shadow='md' width='15rem' bg={CardBg}>
                            <CardHeader>
                                <Heading size='md'>Let's Play! ▶️</Heading>
                            </CardHeader>
                            <CardBody>
                                <Text color={CardText}>Activate the AI and begin the timer with the 'Start' button and try not to laugh!</Text>
                            </CardBody>
                            <CardFooter>
                                <CustomButton bg={ButtonBg} color='gray.800' onClick={handleButtonClick}>Start</CustomButton>
                            </CardFooter>
                        </Card>
                    </Hover>
                </FadeInUp>
            </Flex>
        </Center>
    );
};

export default HowTo;