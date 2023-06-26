import FadeInUp from '@/animations/FadeInUp';
import { ButtonGroup, Container, IconButton, Stack, Text, Image, Flex, Spacer, Link } from '@chakra-ui/react'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer: React.FC = () => {
    return (
        <Container as="footer" role="contentinfo" py={{ base: '12', md: '16' }} maxWidth='container.md'>
            <Stack spacing={{ base: '4', md: '5' }}>
                <Stack justify="space-between" direction="row" align="center">
                    <FadeInUp index={0}>
                        <Image
                            src="../Chuckle Challenge v2 Logo.png"
                            height="30"
                        />
                    </FadeInUp>
                    <FadeInUp index={1}>
                        <Flex alignItems='center' gap={3}>
                            <Text fontSize="sm" color="fg.subtle" fontWeight='medium'>
                                Share it on
                            </Text>
                            <ButtonGroup variant="tertiary">
                                <IconButton
                                    as="a"
                                    href="#"
                                    target="_blank"
                                    aria-label='Facebook'
                                    icon={<FaFacebook fontSize="1.25rem" />}
                                />
                                <IconButton
                                    as="a"
                                    href="https://twitter.com/intent/tweet?text=Chuckle Challenge: The AI tracking Try Not To Laugh Challenge!"
                                    target="_blank"
                                    aria-label="Twitter"
                                    icon={<FaTwitter fontSize="1.25rem" />}
                                />
                                <IconButton
                                    as="a"
                                    href="https://www.linkedin.com/sharing/share-offsite/?url=google.com
                                    "
                                    target="_blank"
                                    aria-label="LinkedIn"
                                    icon={<FaLinkedin fontSize="1.25rem" />}
                                />
                            </ButtonGroup>
                        </Flex>
                    </FadeInUp>
                </Stack>
                <Flex alignItems='end'>
                    <FadeInUp index={2}>
                        <Text fontSize="sm" color="fg.subtle">
                            &copy; {new Date().getFullYear()} — Bruce Liu & Aidan LoStracco
                        </Text>
                    </FadeInUp>
                    <Spacer />
                    <FadeInUp index={3}>
                        <Flex textAlign='right' gap={7}>
                            <Text fontSize="sm" color="fg.subtle" fontWeight="semibold">
                                Made with ❤️ in Canada
                            </Text>
                            <Link
                                as='a'
                                fontSize='sm'
                                color='fg.subtle'
                                fontWeight='semibold'
                                target='_blank'
                                aria-label='Buy Me A Coffee Link'
                                href="https://www.buymeacoffee.com/BruceLiu"
                            >
                                Buy us a coffee!☕
                            </Link>
                        </Flex>
                    </FadeInUp>
                </Flex>
            </Stack>
        </Container>
    )
}

export default Footer;