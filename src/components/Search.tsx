import { useState } from "react";
import { Box, Button, Card, CardBody, Collapse, Divider, Flex, Heading, Image, Input, Stack, Text, chakra, useColorModeValue } from "@chakra-ui/react";
import Hover from "@/animations/Hover";
import Youtube from "@/pages/api/Youtube";
import he from 'he';

interface SearchProps {
    isOpen: boolean;
    onVideoClick: (videoId: string) => void;
}

const Search: React.FC<SearchProps> = ({ isOpen, onVideoClick }) => {
    const SearchBg = useColorModeValue('orange.100', 'blue.200');
    const BoxBg = useColorModeValue('#fff7e6', 'gray.700');
    const ButtonHoverBg = useColorModeValue('orange.200', 'blue.300');
    const TextColor = useColorModeValue('blackAlpha.600', 'gray.400');
    const DividerColor = useColorModeValue('gray.500', 'gray.400');

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

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearchClick();
        }
    };

    const handleVideoClick = (videoId: string) => {
        onVideoClick(videoId);
    }

    return (
        <Collapse in={isOpen} animateOpacity style={{ overflow: "visible" }}>
            <Box
                bg={BoxBg}
                shadow='md'
                borderRadius='md'
                padding={5}
                width='48rem'
            >
                <Flex flexDirection='column' gap={5}>
                    <Flex flexDirection='row' gap={3}>
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
                            onKeyDown={handleKeyPress}
                        />
                        <Hover>
                            <CustomButton bg={SearchBg} onClick={handleSearchClick}>
                                Search
                            </CustomButton>
                        </Hover>
                    </Flex>

                    <Heading as='h2' size='md' fontWeight='bold' >
                        Search Results:
                    </Heading>

                    <Divider borderColor={DividerColor} />

                    <Flex flexDirection='row' overflowX='auto' gap={0} mt={5}>
                        {videos.map((video) => (
                            <Card key={video.id.videoId} bg='transparent' shadow='none' minWidth='19rem'>
                                <CardBody alignSelf='center'>
                                    <Flex flexDirection='column' gap={2}>
                                        <Image
                                            src={video.snippet.thumbnails.high.url}
                                            alt={video.snippet.title}
                                            borderRadius='md'
                                            onClick={() => handleVideoClick(video.id.videoId)}
                                            style={{ cursor: "pointer" }}
                                            width='16rem'
                                            height='9rem'
                                            objectFit='cover'
                                        />
                                        <Stack spacing={1} maxWidth='16rem'>
                                            <Text fontSize='md' fontWeight='semibold' lineHeight={5}>
                                                {he.decode(video.snippet.title)}
                                            </Text>
                                            <Flex>
                                                <Text fontSize='xs' fontWeight='semibold' color={TextColor}>
                                                    {he.decode(video.snippet.channelTitle)} •&nbsp;
                                                </Text>
                                                <Text fontSize='xs' fontWeight='semibold' color={TextColor}>
                                                    {video.snippet.publishedAt.substring(0, 10)}
                                                </Text>
                                            </Flex>
                                        </Stack>
                                    </Flex>
                                </CardBody>
                            </Card>
                        ))}
                    </Flex>
                </Flex>
            </Box>
        </Collapse>
    );
};

export default Search;
