import { Inter } from 'next/font/google'
import { Box, ChakraProvider, Container, Heading, useColorModeValue, Text, Stack, } from '@chakra-ui/react'
import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import YoutubeEmbed from '@/components/YoutubeEmbed'
import theme from '@/styles/theme'
import HowTo from '@/components/HowTo'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const blueGradient = useColorModeValue("blue.100", "blue.800");
  const purpleGradient = useColorModeValue("purple.200", "purple.800");

  return (
    <ChakraProvider theme={theme}>
      {/* Title and Favicon */}
      <Head>
        <title>Chuckle Challenge</title>
        <link rel='icon' href='/Chuckle Challenge Favicon.ico' />
      </Head>

      {/* Header */}
      <Header />

      {/* Main Body */}
      <Container maxWidth='container.lg' centerContent pt={150}>
        <Stack spacing={20}>
          <Hero />
          <YoutubeEmbed embedId="rokGy0huYEA"/>
          <HowTo />
        </Stack>

      </Container>

      {/* Footer */}
      <Footer />
    </ChakraProvider>
  )
}
