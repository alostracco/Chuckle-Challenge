import { Flex, Input, useColorModeValue } from "@chakra-ui/react";

interface SearchProps {
    show: boolean;
}

const Search: React.FC<SearchProps> = ({ show }) => {

    const SearchBg = useColorModeValue('orange.100', 'blue.200');
    const SearchColor = useColorModeValue('gray.600', 'gray.400');

    return (
        <Flex display={show ? "flex" : "none"}>
            <Input
                placeholder="Search"
                _placeholder={{ opacity: 1, color: SearchColor }}
                borderColor={SearchColor}
                size="md"
                type="search"
                width='30%'
                fontWeight='semibold'
            />
        </Flex>
    );
};

export default Search;