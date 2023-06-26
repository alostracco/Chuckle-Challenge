import { Box, Card, CardBody, CardHeader, Center, Flex, Link, Stack, chakra, Image, Text, useColorModeValue, ButtonGroup, IconButton } from "@chakra-ui/react"
import Hover from "@/animations/Hover";
import TabFadeInUp from "@/animations/TabFadeInUp";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const DURIAN_IMAGE_LINK = "https://www.google.com/search?q=durian&sxsrf=ALeKk03lX6LGG5MPefvOxxgUY-bAMZomsw:1628566732329&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjX48rsw6XyAhUHVN8KHUZsBn4Q_AUoAXoECAEQAw&cshid=1628566747467052&biw=2560&bih=1297&dpr=1.5";
const FECES_LINK = "https://en.wikipedia.org/wiki/Feces"

const TheDevelopers: React.FC = () => {
    const CardText = useColorModeValue("gray.600", "gray.400");
    const HighlightText = useColorModeValue("orange.300", "blue.300");
    const CardBg = useColorModeValue("#fff7e6", "gray.700");

    return (
        <Flex gap={5}>
            <TabFadeInUp index={0}>
            <Hover>
                <Box bg={CardBg} borderRadius="lg" p={8} position="relative" shadow='lg' width='27rem'>
                    <Stack>
                        <Text fontWeight="bold" pb={4} letterSpacing="0.1rem">
                            BRUCE LIU
                        </Text>
                        <Text color={CardText}>
                            From Ontario, Canada 🍁
                        </Text>
                        <Text color={CardText}>Can type at 130 wpm</Text>
                        <Text color={CardText}>
                            Computer science and business student at Western University, Ivey Business School
                        </Text>
                        <ButtonGroup variant="tertiary" pt='1rem'>
                            <IconButton
                                as="a"
                                href="https://www.linkedin.com/in/bruce-liu-651514202/"
                                target="_blank"
                                aria-label="LinkedIn"
                                icon={<FaLinkedin fontSize="1.25rem" />}
                            />
                            <IconButton
                                as="a"
                                href="https://github.com/Bruce4PF"
                                target="_blank"
                                aria-label="GitHub"
                                icon={<FaGithub fontSize="1.25rem" />}
                            />
                        </ButtonGroup>
                        <Box position="absolute" top="0" right="0">
                            <Image
                                src="/Bruce's Memoji.png"
                                alt="Image of me"
                                width="7rem"
                                height="7rem"
                            />
                        </Box>
                    </Stack>
                </Box>
            </Hover>
            </TabFadeInUp>
            <TabFadeInUp index={1}>
            <Hover>
                <Box bg={CardBg} borderRadius="lg" p={8} position="relative" shadow='lg' width='27rem'>
                    <Stack>
                        <Text fontWeight="bold" pb={4} letterSpacing="0.1rem">
                            AIDAN LOSTRACCO
                        </Text>
                        <Text color={CardText}>
                            I'm a smelly idiot that likes {" "}
                            <Link color={HighlightText} isExternal href={FECES_LINK}>
                                feces
                            </Link>
                        </Text>
                        <Text color={CardText}>
                            I have three friends, me myself and I{" "}
                            <chakra.span className="no-wrap">¯\_(ツ)_/¯</chakra.span>
                        </Text>
                        <Text color={CardText}>
                            I have no hobbies and have no defining features I hate my life
                        </Text>
                        <ButtonGroup variant="tertiary" pt='1rem'>
                            <IconButton
                                as="a"
                                href="https://www.linkedin.com/in/aidan-lostracco-1b815a222/"
                                target="_blank"
                                aria-label="LinkedIn"
                                icon={<FaLinkedin fontSize="1.25rem" />}
                            />
                            <IconButton
                                as="a"
                                href="https://github.com/alostracco"
                                target="_blank"
                                aria-label="GitHub"
                                icon={<FaGithub fontSize="1.25rem" />}
                            />
                        </ButtonGroup>
                        <Box position="absolute" top="0" right="0">
                            <Image
                                src="/Bruce's Memoji.png"
                                alt="Image of me"
                                width="7rem"
                                height="7rem"
                            />
                        </Box>
                    </Stack>
                </Box>
            </Hover>
            </TabFadeInUp>
        </Flex>
    );
};

export default TheDevelopers;