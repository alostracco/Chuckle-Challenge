import { Center, Flex, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, chakra, useColorModeValue } from "@chakra-ui/react";
import Hover from "@/animations/Hover";
import TheGame from "./TheGame";
import TheDevelopers from "./TheDevelopers";

const About: React.FC = () => {

    const CustomBg = useColorModeValue('orange.200', 'blue.200');
    const CustomColor = useColorModeValue('blackAlpha.800', 'gray.800');

    const CustomTab = chakra(Tab, {
        baseStyle: {
            _selected: {
                color: CustomColor,
                bg: CustomBg,
            },
            _hover: {
                color: CustomColor,
                bg: CustomBg,
            },
        },
    });

    return (
        <Center flexDirection='column' gap={20}>
            <Heading as='h1' size='2xl' fontWeight='extrabold'>
                About
            </Heading>

            <Tabs variant='soft-rounded'>
                <Center>
                    <TabList gap={5}>
                        <Hover>
                            <CustomTab fontWeight='bold'>
                                The Game
                            </CustomTab>
                        </Hover>
                        <Hover>
                            <CustomTab fontWeight='bold'>
                                The Developers
                            </CustomTab>
                        </Hover>
                    </TabList>
                </Center>

                <TabPanels mt='3rem'>
                    <TabPanel>
                        <TheGame />
                    </TabPanel>
                    <TabPanel>
                        <TheDevelopers />
                    </TabPanel>
                </TabPanels>

            </Tabs>
        </Center>
    );
};

export default About;