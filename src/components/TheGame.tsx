import { Flex, Heading, Stack, Text, chakra, useColorModeValue } from "@chakra-ui/react";
import IconGrid from "./IconGrid"
import TabFadeInUp from "@/animations/TabFadeInUp";

const TheGame: React.FC = () => {
    const highlight = useColorModeValue('orange.300', 'blue.300');
    const textColor = useColorModeValue('gray.600', 'gray.400');

    return (
        <Flex flexDirection='row' justifyContent='center' alignItems='center' gap={20}>
            <IconGrid />
            <Stack spacing={4} maxWidth='40%'>
                <TabFadeInUp index={0}>
                <Heading
                    as='h1'
                    size='lg'
                    fontWeight='bold'
                    lineHeight='8'
                    maxWidth='80%'
                >
                    Built with modern languages to provide a <chakra.span color={highlight}>modern experience</chakra.span>
                </Heading>
                </TabFadeInUp>
                <TabFadeInUp index={1}>
                <Text color={textColor}>
                    Employing the FER-2013 dataset from Kaggle, Python and TensorFlow are used to configure a convolutional 
                    neural network (CNN) model for facial emotion recognition. Using data augmentation techniques during preprocessing, 
                    the CNN model achieves an 84% testing accuracy.
                </Text>
                </TabFadeInUp>
                <TabFadeInUp index={2}>
                <Text color={textColor}>
                    Deployed on AWS EC2, the backend relies on a Flask and Nginx reverse proxy server hosting the CNN model, 
                    and for cross-communication between the front-end deployed on Vercel, respectively.
                </Text>
                </TabFadeInUp>
                <TabFadeInUp index={3}>
                <Text color={textColor}>
                    Built on Next.js, the front-end utilizes modern languages & libraries such as React.js, TypeScript, Chakra UI, 
                    Tailwind CSS, and Framer Motion to leverage static rendering.
                </Text>
                </TabFadeInUp>
                <TabFadeInUp index={4}>
                <Text color={highlight} fontWeight='medium'>
                    Inspired by the recent surge of AI, this project was created to capitalize on these emerging technologies.
                </Text>
                </TabFadeInUp>
            </Stack>
        </Flex>
    )
}

export default TheGame;
