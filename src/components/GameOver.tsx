import React, { useRef } from "react";
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, Button, useColorModeValue, chakra, Stack, ButtonGroup, Flex, IconButton, Spacer } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const GameOver: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    const bgColor = useColorModeValue('orange.50', 'gray.700');
    const ButtonBg = useColorModeValue('orange.100', 'blue.200');
    const ButtonHoverBg = useColorModeValue('orange.200', 'blue.300');

    const CustomButton = chakra(Button, {
        baseStyle: {
            bg: ButtonBg,
            color: 'gray.800',
            _hover: {
                bg: ButtonHoverBg,
            },
        },
    });

    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered size='xl'>
            <ModalOverlay
                bg='blackAlpha.300'
                backdropFilter='blur(8px) hue-rotate(20deg)'
            />
            <ModalContent bg={bgColor}>
                <ModalHeader fontSize='3xl' fontWeight='bold'>You Laughed! 😂</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Stack gap={5}>
                        <Text fontWeight='semibold'>
                            Game over! Looks like the AI caught you laughing, try to conceal your smile better next time!
                        </Text>
                        <Text fontWeight='bold'>
                            You lasted: 50 seconds {/* Place holder for now */}
                        </Text>
                    </Stack>
                </ModalBody>

                <ModalFooter mt={5} justifyContent='space-between'>
                    <Flex alignItems='center' gap={3}>
                        <Text color="fg.subtle" fontWeight='medium'>
                            Share it on
                        </Text>
                        <ButtonGroup variant="tertiary">
                            <IconButton
                                as="a"
                                href="#"
                                target="_blank"
                                aria-label="Facebook"
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
                                href="https://www.linkedin.com/sharing/share-offsite/?url=google.com"
                                target="_blank"
                                aria-label="LinkedIn"
                                icon={<FaLinkedin fontSize="1.25rem" />}
                            />
                        </ButtonGroup>
                    </Flex>
                    <CustomButton colorScheme='blue' mr={5} onClick={onClose}>
                        Close
                    </CustomButton>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default GameOver;