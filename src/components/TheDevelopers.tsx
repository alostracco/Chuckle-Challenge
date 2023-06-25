import { Box, Card, CardBody, CardHeader, Center, Flex, Link, Stack, chakra, Image, Text, useColorModeValue } from "@chakra-ui/react"
import Hover from "@/animations/Hover";
import FadeInUp from "@/animations/FadeInUp";

const DURIAN_IMAGE_LINK = "https://www.google.com/search?q=durian&sxsrf=ALeKk03lX6LGG5MPefvOxxgUY-bAMZomsw:1628566732329&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjX48rsw6XyAhUHVN8KHUZsBn4Q_AUoAXoECAEQAw&cshid=1628566747467052&biw=2560&bih=1297&dpr=1.5";


const TheDevelopers: React.FC = () => {
    const CardText = useColorModeValue("gray.500", "gray.400");
    const HighlightText = useColorModeValue("blue.500", "blue.300");
    const CardBg = useColorModeValue("gray.100", "gray.700");

    return (
        <Box bg={CardBg} borderRadius="lg" p={8} position="relative">
            <Stack>
                <Text fontWeight="bold" pb={4} letterSpacing="0.1rem">
                    BRUCE LIU
                </Text>
                <Text color={CardText}>
                    Favorite fruit is{" "}
                    <Link color={HighlightText} isExternal href={DURIAN_IMAGE_LINK}>
                        durian
                    </Link>
                </Text>
                <Text color={CardText}>Tech and gadget enthusiast</Text>
                <Text color={CardText}>Love videography and photography</Text>
                <Text color={CardText}>
                    Pineapple on pizza is not bad{" "}
                    <chakra.span className="no-wrap">¯\_(ツ)_/¯</chakra.span>
                </Text>
                <Text color={CardText}>
                    Lowest grade was a 51 in high school computer science
                </Text>
                <Box position="absolute" top="0" right="0">
                    <Image
                        src="/static/memoji-smiling.png"
                        alt="Image of me"
                        width="12rem"
                        height="12rem"
                    />
                </Box>
            </Stack>
        </Box>
    );
};

export default TheDevelopers;