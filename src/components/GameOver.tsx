import React from "react";
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, Button, useColorModeValue, chakra, Stack, ButtonGroup, Flex, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const GameOver: React.FC<{ isOpen: boolean; onClose: () => void, timeElapsed: number }> = ({ isOpen, onClose, timeElapsed }) => {
    const bgColor = useColorModeValue('orange.50', 'gray.700');
    const ButtonBg = useColorModeValue('orange.100', 'blue.200');
    const ButtonHoverBg = useColorModeValue('orange.200', 'blue.300');

    const websiteUrl = 'https://www.chucklechallenge.com';
    const shareText = 'Chuckle Challenge: The AI tracking Try Not To Laugh Challenge!';

    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(websiteUrl)}`;
    const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(websiteUrl)}`;
    const linkedInShareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(websiteUrl)}&title=${encodeURIComponent(shareText)}`;


    const CustomButton = chakra(Button, {
        baseStyle: {
            bg: ButtonBg,
            color: 'gray.800',
            _hover: {
                bg: ButtonHoverBg,
            },
        },
    });

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;

        if (time === 1) {
            return `${seconds} second`;
        }

        if (minutes === 1 && seconds === 1) {
            return `${minutes} minute and ${seconds} second`;
        }

        if (minutes === 1) {
            return `${minutes} minute and ${seconds} seconds`;
        }

        if (minutes > 1 && seconds === 1) {
            return `${minutes} minutes and ${seconds} second`;
        }

        if (minutes > 0) {
            return `${minutes} minutes and ${seconds} seconds`;
        }

        return `${seconds} seconds`;
    };

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
                            You lasted: {formatTime(timeElapsed)}
                        </Text>
                    </Stack>
                </ModalBody>

                <ModalFooter mt={5} justifyContent='space-between'>
                    <Flex alignItems='center' gap={3}>
                        <Text color="fg.subtle" fontWeight='medium'>
                            Share it on:
                        </Text>
                        <ButtonGroup variant="tertiary">
                            <IconButton
                                as="a"
                                href={facebookShareUrl}
                                target="_blank"
                                aria-label="Facebook"
                                icon={<FaFacebook fontSize="1.25rem" />}
                            />
                            <IconButton
                                as="a"
                                href={twitterShareUrl}
                                target="_blank"
                                aria-label="Twitter"
                                icon={<FaTwitter fontSize="1.25rem" />}
                            />
                            <IconButton
                                as="a"
                                href={linkedInShareUrl}
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