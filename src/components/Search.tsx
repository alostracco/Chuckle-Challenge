import { useState } from "react";
import { Box, Button, Flex, Input, chakra, useColorModeValue } from "@chakra-ui/react";
import Hover from "@/animations/Hover";

interface SearchProps {
    show: boolean;
}

const Search: React.FC<SearchProps> = ({ show }) => {
    const SearchBg = useColorModeValue('orange.100', 'blue.200');
    const BoxBg = useColorModeValue('#fff7e6', 'gray.700');
    const ButtonHoverBg = useColorModeValue('orange.200', 'blue.300');

    const CustomButton = chakra(Button, {
        baseStyle: {
            bg: SearchBg,
            color: 'gray.800',
            _hover: {
                bg: ButtonHoverBg,
            },
        },
    });

    const [searchInput, setSearchInput] = useState("");

    const handleSearchClick = () => {
        // Temporary until YouTube Data API v3 is connected
        console.log(searchInput);
    };

    return (
        <Box
            display={show ? "initial" : "none"}
            bg={BoxBg}
            shadow='md'
            borderRadius='md'
            padding={5}
            width='48rem'
        >
            <Flex gap={3}>
                <Hover>
                    <Input
                        placeholder="Search Youtube..."
                        _placeholder={{ opacity: 0.7, color: 'gray.800' }}
                        focusBorderColor='transparent'
                        borderColor="transparent"
                        isInvalid
                        errorBorderColor="transparent"
                        bg={SearchBg}
                        size="md"
                        width='17rem'
                        color='gray.800'
                        fontWeight='semibold'
                        onChange={(e) => setSearchInput(e.target.value)}
                    />
                </Hover>
                <Hover>
                    <CustomButton bg={SearchBg} onClick={handleSearchClick}>
                        Search
                    </CustomButton>
                </Hover>
            </Flex>
        </Box>
    );
};

export default Search;
