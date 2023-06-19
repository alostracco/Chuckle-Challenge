import { SimpleGrid, Card, CardHeader, Heading, CardBody, CardFooter, Button, Text, Center } from "@chakra-ui/react";

const HowTo: React.FC = () => {
    return (
        <>
        <Heading as='h1' size='2xl' fontWeight='extrabold' textAlign='center'>
            How To Play
        </Heading>
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
            <Card>
                <CardHeader>
                    <Heading size='md'>Enable Camera</Heading>
                </CardHeader>
                <CardBody>
                    <Text>Lorem ipsum dolor inet I don't know what I'm typing here but it's filling the space.</Text>
                </CardBody>
                <CardFooter>
                    <Button>Allow Access</Button>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <Heading size='md'>Choose a Video</Heading>
                </CardHeader>
                <CardBody>
                    <Text>This was so hard to code out but I'm actually a genius I don't know maybe I should join NASA.</Text>
                </CardBody>
                <CardFooter>
                    <Button>Choose Video</Button>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <Heading size='md'>Let's Play!</Heading>
                </CardHeader>
                <CardBody>
                    <Text>I want to go home now... It's been like a few days since I've seen my family. Just let me go please.</Text>
                </CardBody>
                <CardFooter>
                    <Button>Start</Button>
                </CardFooter>
            </Card>
        </SimpleGrid>
        </>
    );
};

export default HowTo;