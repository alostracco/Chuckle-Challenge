import { Grid, GridItem, Box, useColorModeValue } from "@chakra-ui/react";
import { FaReact, FaPython } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiChakraui, SiTailwindcss, SiFramer, SiTensorflow, SiFlask } from "react-icons/si";
import Hover from "@/animations/Hover";
import TabFadeInUp from "@/animations/TabFadeInUp";

const IconGrid: React.FC = () => {
    const CustomBg = useColorModeValue('rgba(251,211,141,0.5)', 'whiteAlpha.200');

    return (
        <Grid templateColumns='repeat(3, 1fr)' gap={4}>
            <TabFadeInUp index={0}>
                <GridItem>
                    <Hover>
                        <Box
                            bg={CustomBg}
                            padding={2}
                            borderRadius='lg'
                        >
                            <FaReact size={50} />
                        </Box>
                    </Hover>
                </GridItem>
            </TabFadeInUp>
            <TabFadeInUp index={1}>
                <GridItem>
                    <Hover>
                        <Box
                            bg={CustomBg}
                            padding={2}
                            borderRadius='lg'
                        >
                            <SiNextdotjs size={50} />
                        </Box>
                    </Hover>
                </GridItem>
            </TabFadeInUp>
            <TabFadeInUp index={2}>
                <GridItem>
                    <Hover>
                        <Box
                            bg={CustomBg}
                            padding={2}
                            borderRadius='lg'
                        >
                            <SiTypescript size={50} />
                        </Box>
                    </Hover>
                </GridItem>
            </TabFadeInUp>
            <TabFadeInUp index={1}>
                <GridItem>
                    <Hover>
                        <Box
                            bg={CustomBg}
                            padding={2}
                            borderRadius='lg'
                        >
                            <FaPython size={50} />
                        </Box>
                    </Hover>
                </GridItem>
            </TabFadeInUp>
            <TabFadeInUp index={2}>
                <GridItem>
                    <Hover>
                        <Box
                            bg={CustomBg}
                            padding={2}
                            borderRadius='lg'
                        >
                            <SiTensorflow size={50} />
                        </Box>
                    </Hover>
                </GridItem>
            </TabFadeInUp>
            <TabFadeInUp index={3}>
                <GridItem>
                    <Hover>
                        <Box
                            bg={CustomBg}
                            padding={2}
                            borderRadius='lg'
                        >
                            <SiFlask size={50} />
                        </Box>
                    </Hover>
                </GridItem>
            </TabFadeInUp>
            <TabFadeInUp index={2}>
                <GridItem>
                    <Hover>
                        <Box
                            bg={CustomBg}
                            padding={2}
                            borderRadius='lg'
                        >
                            <SiChakraui size={50} />
                        </Box>
                    </Hover>
                </GridItem>
            </TabFadeInUp>
            <TabFadeInUp index={3}>
                <GridItem>
                    <Hover>
                        <Box
                            bg={CustomBg}
                            padding={2}
                            borderRadius='lg'
                        >
                            <SiTailwindcss size={50} />
                        </Box>
                    </Hover>
                </GridItem>
            </TabFadeInUp>
            <TabFadeInUp index={4}>
                <GridItem>
                    <Hover>
                        <Box
                            bg={CustomBg}
                            padding={2}
                            borderRadius='lg'
                        >
                            <SiFramer size={50} />
                        </Box>
                    </Hover>
                </GridItem>
            </TabFadeInUp>
        </Grid>
    )
}

export default IconGrid;