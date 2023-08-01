import { ChakraProvider, Container, Stack, Flex, Spacer, Center } from '@chakra-ui/react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import YoutubeEmbed from '@/components/YoutubeEmbed';
import theme from '@/styles/theme';
import HowTo from '@/components/HowTo';
import WebcamFeed from '@/components/Webcam';
import About from '@/components/About';
import Buttons from '@/components/Buttons';
import { useState } from 'react';

export default function Home(): JSX.Element {
  const [videoID, setVideoID] = useState<string>("BNiTVsAlzlc");
  const handleVideoClick = (videoId: string) => {
    setVideoID(videoId);
  };

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Chuckle Challenge</title>
        <link rel='icon' href='/Chuckle Challenge Favicon.ico' />
        <meta name="description" content="The AI tracking Try Not To Laugh Challenge!" />
      </Head>

      <Header />

      <Container maxWidth='container.lg' centerContent pt={150}>
        <Stack spacing={20}>
          <Hero />
          <Flex gap={30}>
            <YoutubeEmbed embedId={videoID} />
            <Spacer />
            <Center>
              <WebcamFeed />
            </Center>
          </Flex>
          <Buttons onVideoClick={handleVideoClick} />
          <HowTo />
          <About />
        </Stack>
      </Container>

      {/* Footer */}
      <Footer />
    </ChakraProvider>
  );
}
