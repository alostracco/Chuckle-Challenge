import { Center, Flex, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, chakra, useColorModeValue } from "@chakra-ui/react";
import Hover from "@/animations/Hover";
import TheGame from "./TheGame";

const About: React.FC = () => {

    const CustomBg = useColorModeValue('orange.200', 'gray.700');
    const CustomColor = useColorModeValue('blackAlpha.800', 'whiteAlpha.900');

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
                        <p>HELPPPP MEEEEEEEE PLEAAASSSEEE ITT HURRTTSSSSS AGHHHHHHHH</p>
                    </TabPanel>
                </TabPanels>

            </Tabs>
        </Center>
    );
};

export default About;