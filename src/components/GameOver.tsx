import React, { useRef } from "react";
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, Button, useColorModeValue, chakra } from "@chakra-ui/react";

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
        <Modal isOpen={isOpen} onClose={onClose} isCentered size='lg'>
            <ModalOverlay
                bg='blackAlpha.300'
                backdropFilter='blur(8px) hue-rotate(20deg)'
            />
            <ModalContent bg={bgColor}>
                <ModalHeader fontSize='3xl' fontWeight='bold'>You Smiled!</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Text>
                        This is some sample text that will be in place of the modal body for now.
                        Just need to populate the area with some text to see what it will look like, nothing too much.
                    </Text>
                </ModalBody>

                <ModalFooter>
                    <CustomButton colorScheme='blue' mr={3} onClick={onClose}>
                        Close
                    </CustomButton>
                    <Button variant='ghost'>Secondary Action</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default GameOver;