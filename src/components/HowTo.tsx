import FadeInUp from "@/animations/FadeInUp";
import { SimpleGrid, Card, CardHeader, Heading, CardBody, CardFooter, Button, Text, Center, Stack, Flex, useColorModeValue } from "@chakra-ui/react";

const HowTo: React.FC = () => {

    const CardBg = useColorModeValue('#fff7e6', 'gray.700');
    const ButtonBg = useColorModeValue('orange.100', 'gray.600');

    const askForPermission = () => {
        navigator.mediaDevices.getUserMedia({ video: true });
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
                <Card shadow='md' width='15rem' bg={CardBg}>
                    <CardHeader>
                        <Heading size='md'>Enable Camera 📸</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text>Give webcam access to the AI to track your facial expressions.</Text>
                    </CardBody>
                    <CardFooter>
                        <Button onClick={askForPermission} bg={ButtonBg}>Allow Access</Button>
                    </CardFooter>
                </Card>
                </FadeInUp>
                <FadeInUp index={1}>
                <Card shadow='md' width='15rem' bg={CardBg}>
                    <CardHeader>
                        <Heading size='md'>Choose a Video 🎥</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text>Search for a funny video or let us pick one at random for you from YouTube.</Text>
                    </CardBody>
                    <CardFooter>
                        <Button bg={ButtonBg}>Choose Video</Button>
                    </CardFooter>
                </Card>
                </FadeInUp>
                <FadeInUp index={2}>
                <Card shadow='md' width='15rem' bg={CardBg}>
                    <CardHeader>
                        <Heading size='md'>Let's Play! ▶️</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text>Activate the AI and begin the timer with the 'Start' button and start playing!</Text>
                    </CardBody>
                    <CardFooter>
                        <Button bg={ButtonBg}>Start</Button>
                    </CardFooter>
                </Card>
                </FadeInUp>
            </Flex>
        </Center>
    );
};

export default HowTo;