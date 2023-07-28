import { useState } from "react";
import { Box, Button, Flex, Input, chakra, useColorModeValue } from "@chakra-ui/react";
import Hover from "@/animations/Hover";
import Youtube from "@/pages/api/Youtube";

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
    const [videos, setVideos] = useState<any[]>([]);

    const handleSearchClick = async () => {
        try {
            const response = await Youtube.get('', {
                params: {
                    query: searchInput, // Pass the search input as the 'query' parameter for the API request
                },
            });

            setVideos(response.data.items);
        } catch (error) {
            console.error('Error fetching videos:', error);
        }
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
                <Hover>
                    <CustomButton bg={SearchBg} onClick={handleSearchClick}>
                        Search
                    </CustomButton>
                </Hover>

                <Flex direction="column" mt={4}>
                    {videos.map((video) => (
                        <Flex key={video.id.videoId} alignItems="center" mb={3}>
                            <a
                                href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ marginRight: "8px" }}
                                onClick={() => console.log(video.id.videoId)}
                            >
                                <img
                                    src={video.snippet.thumbnails.default.url}
                                    alt={video.snippet.title}
                                    width="120"
                                    height="90"
                                />
                            </a>
                            <span>{video.snippet.title}</span>
                        </Flex>
                    ))}
                </Flex>
            </Flex>
        </Box>
    );
};

export default Search;
