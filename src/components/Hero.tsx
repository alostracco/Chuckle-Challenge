import { Heading, Stack, Text } from "@chakra-ui/react";

const Hero: React.FC = () => {
    return (
        <Stack spacing={8}>
            <Heading as='h1' size='2xl' fontWeight='extrabold' textAlign='center'>
                Can this AI see <br />if you laugh?
            </Heading>
            <Text fontWeight='medium' textAlign='center'>
                The classic Try Not To Laugh Challenge with an AI to see if you laugh!
            </Text>
        </Stack>
    );
};

export default Hero;