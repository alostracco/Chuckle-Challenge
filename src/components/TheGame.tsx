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
                    Blee blah bloh this section is going to talk about the game design itself and the system 
                    we made behind it yada yada and did some machine learning stuff to it
                </Text>
                </TabFadeInUp>
                <TabFadeInUp index={2}>
                <Text color={textColor}>
                    I still don't really know what we should fill this content with but I know that it looks cool 
                    like this so I'll still fill it up
                </Text>
                </TabFadeInUp>
                <TabFadeInUp index={3}>
                <Text color={textColor}>
                    Machine learning this, machine learning that. I don't know if the machine is learning at all. 
                    That was a cool tongue twister.
                </Text>
                </TabFadeInUp>
                <TabFadeInUp index={4}>
                <Text color={highlight} fontWeight='medium'>
                    I have no clue what I'm typing anymore, I ran out of things that I can think about. So I'm just 
                    going to type randomly until I can fill this space up.
                </Text>
                </TabFadeInUp>
            </Stack>
        </Flex>
    )
}

export default TheGame;