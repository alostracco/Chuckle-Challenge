import { Button, Flex, Spacer, chakra, useColorModeValue } from "@chakra-ui/react";
import Hover from "@/animations/Hover";
import FadeInUp from "@/animations/FadeInUp";
import Search from "./Search";
import { useState } from "react";

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

    const [showSearch, setShowSearch] = useState(false);

    const toggleSearch = () => {
        setShowSearch((prevShowSearch) => !prevShowSearch);
    };

    const handleVideoClick = (videoId: string) => {
        onVideoClick(videoId);
    }

    return (
        <Flex flexDirection='column' gap={5}>
            <Flex gap={5} mt={-14}>
                <FadeInUp index={0}>
                    <Hover>
                        <CustomButton onClick={toggleSearch}>
                            {showSearch ? "Close Search" : "Search Videos"}
                        </CustomButton>
                    </Hover>
                </FadeInUp>
                <FadeInUp index={1}>
                    <Hover>
                        <CustomButton>
                            Random Video
                        </CustomButton>
                    </Hover>
                </FadeInUp>
            </Flex>
            <Search show={showSearch} onVideoClick={handleVideoClick} />
        </Flex>
    );
};

export default Buttons;