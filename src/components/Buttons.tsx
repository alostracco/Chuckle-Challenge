import { Button, Flex, chakra, useColorModeValue } from "@chakra-ui/react";
import Hover from "@/animations/Hover";
import FadeInUp from "@/animations/FadeInUp";

const Buttons: React.FC = () => {
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
        <Flex gap={5} mt={-14}>
            <FadeInUp index={0}>
                <Hover>
                    <CustomButton>
                        Search Video
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
            <FadeInUp index={2}>
                <Hover>
                    <CustomButton>
                        Start Game
                    </CustomButton>
                </Hover>
            </FadeInUp>
        </Flex>
    );
};

export default Buttons;