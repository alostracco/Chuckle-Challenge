import { Button, Flex, chakra, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import Hover from "@/animations/Hover";
import FadeInUp from "@/animations/FadeInUp";
import Search from "./Search";
import { useState } from "react";
import Random from "@/pages/api/Random";

interface ButtonsProps {
    onVideoClick: (videoId: string) => void;
}

const Buttons: React.FC<ButtonsProps> = ({ onVideoClick }) => {
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

    const { isOpen, onToggle } = useDisclosure();

    const toggleSearch = () => {
        onToggle();
    };

    const handleVideoClick = (videoId: string) => {
        onVideoClick(videoId);
    }

    const handleRandomVideoClick = async () => {
        try {
            const response = await Random.get('');
            const randomVideoId = response.data.videoId;
            if (randomVideoId) {
                onVideoClick(randomVideoId);
            }
        } catch (error) {
            console.error('Error fetching random video:', error);
        }
    };

    return (
        <Flex flexDirection='column' gap={5}>
            <Flex gap={5} mt={-14}>
                <FadeInUp index={0}>
                    <Hover>
                        <CustomButton onClick={toggleSearch}>
                            {isOpen ? "Close Search" : "Search Videos"}
                        </CustomButton>
                    </Hover>
                </FadeInUp>
                <FadeInUp index={1}>
                    <Hover>
                        <CustomButton onClick={handleRandomVideoClick}>
                            Random Video
                        </CustomButton>
                    </Hover>
                </FadeInUp>
            </Flex>
            <Search isOpen={isOpen} onVideoClick={handleVideoClick} />
        </Flex>
    );
};

export default Buttons;