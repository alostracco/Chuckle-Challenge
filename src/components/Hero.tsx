import { Heading, Stack, Text } from "@chakra-ui/react";
import FadeInUp from "@/animations/FadeInUp";

const Hero: React.FC = () => {
    return (
        <Stack spacing={8}>
            <FadeInUp index={0}>
                <Heading as='h1' size='2xl' fontWeight='extrabold' textAlign='center'>
                    Can this AI see <br />if you laugh?
                </Heading>
            </FadeInUp>
            <FadeInUp index={1}>
                <Text fontWeight='medium' textAlign='center'>
                    The classic Try Not To Laugh Challenge with an AI to catch your laugh!
                </Text>
            </FadeInUp>
        </Stack>
    );
};

export default Hero;