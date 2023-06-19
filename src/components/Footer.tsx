import { ButtonGroup, Container, IconButton, Stack, Text, Image, Flex, Spacer } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer: React.FC = () => {
    return (
        <Container as="footer" role="contentinfo" py={{ base: '12', md: '16' }}>
            <Stack spacing={{ base: '4', md: '5' }}>
            <Stack justify="space-between" direction="row" align="center">
                <Image 
                    src="../Chuckle Challenge v2 Logo.png"
                    height="30"
                />
                <ButtonGroup variant="tertiary">
                    <IconButton
                        as="a"
                        href="https://www.linkedin.com/in/bruce-liu-651514202/"
                        target="_blank"
                        aria-label="LinkedIn"
                        icon={<FaLinkedin fontSize="1.25rem" />}
                    />
                    <IconButton as="a" href="https://github.com/alostracco/Try-Not-To-Smile-Challenge" target="_blank" aria-label="GitHub" icon={<FaGithub fontSize="1.25rem" />} />
                    <IconButton
                        as="a"
                        href="#"
                        target="_blank"
                        aria-label="Twitter"
                        icon={<FaTwitter fontSize="1.25rem" />}
                    />
                </ButtonGroup>
            </Stack>
            <Flex >
                <Text fontSize="sm" color="fg.subtle">
                    &copy; {new Date().getFullYear()} LiuStracco Inc. All rights reserved.
                </Text>
                <Spacer />
                <Text fontSize="sm" color="fg.subtle" fontWeight="semibold">
                    Made with ❤️ in Canada
                </Text>
            </Flex>
            </Stack>
        </Container>
    )
}

export default Footer;