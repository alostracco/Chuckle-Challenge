import { Flex, Link, Container, Spacer, Box, Center, Text } from "@chakra-ui/layout";
import { ButtonGroup, IconButton, Image } from "@chakra-ui/react";
import ThemeToggle from "./ThemeToggle";
import { FaGithub } from "react-icons/fa";

const Header = () => {
return (
    <Box
    position="fixed"
    top="0"
    zIndex="999999999"
    w="full"
    >
    <Container maxWidth="container.lg" pl={4} pr={4} pt={2} pb={2}>
        <Flex alignItems="center" h="3.5rem">
            <Center as={Link} href="#top">
                <Image 
                    src="../Chuckle Challenge v2 Logo.png"
                    height="30"
                />
            </Center>
            <Spacer />
            <Flex gap='3'>
            <ThemeToggle />
            <ButtonGroup variant="tertiary">
                <IconButton as="a" href="https://github.com/alostracco/Try-Not-To-Smile-Challenge" target="_blank" aria-label="GitHub" icon={<FaGithub fontSize="1.25rem" />} />
            </ButtonGroup>
            </Flex>
        </Flex>
    </Container>
    </Box>
);
};

export default Header;