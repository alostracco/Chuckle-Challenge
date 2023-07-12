import { Inter } from 'next/font/google'
import { ChakraProvider, Container, useColorModeValue, Stack, Flex, Spacer, Center, } from '@chakra-ui/react'
import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import YoutubeEmbed from '@/components/YoutubeEmbed'
import theme from '@/styles/theme'
import HowTo from '@/components/HowTo'
import WebcamFeed from '@/components/Webcam'
import About from '@/components/About'
import Buttons from '@/components/Buttons'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {

  {/* If you delete this I will be so mad istg */ }
  console.log(`           What are you doing here?

                           /)
                  /\\___/\\ ((
                  \\\`@_@'/  ))
                  {_:Y:.}_//
        ----------{_}^-'{_}----------
  `
  );

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Chuckle Challenge</title>
        <link rel='icon' href='/Chuckle Challenge Favicon.ico' />
      </Head>

      <Header />

      <Container maxWidth='container.lg' centerContent pt={150}>
        <Stack spacing={20}>
          <Hero />
          <Flex gap={30}>
            <YoutubeEmbed embedId="rokGy0huYEA" />
            <Spacer />
            <Center>
              <WebcamFeed />
            </Center>
          </Flex>
          <Buttons />
          <HowTo />
          <About />
        </Stack>
      </Container>

      {/* Footer */}
      <Footer />
    </ChakraProvider>
  )
}
