import { Center, Flex, Heading, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

const About: React.FC = () => {
    return (
        <Center flexDirection='column' gap={20}>
            <Heading as='h1' size='2xl' fontWeight='extrabold'>
                About
            </Heading>

            <Tabs variant='soft-rounded'>
                <TabList>
                    <Tab>
                        The Game
                    </Tab>
                    <Tab>
                        The Developers
                    </Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <Flex flexDirection='row' justifyContent='center' gap={5}>
                            {/* put stuff here */}
                        </Flex>
                    </TabPanel>
                    <TabPanel>
                        <p>asdfwe</p>
                    </TabPanel>
                </TabPanels>

            </Tabs>
        </Center>
    );
};

export default About;