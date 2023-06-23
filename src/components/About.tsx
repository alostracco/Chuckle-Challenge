import { Center, Flex, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, chakra, useColorModeValue } from "@chakra-ui/react";
import IconGrid from "./IconGrid";
import Hover from "@/animations/Hover";

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

                <TabPanels mt='5rem'>
                    <TabPanel>
                        <Flex flexDirection='row' justifyContent='center' gap={5}>
                            <IconGrid />
                        </Flex>
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