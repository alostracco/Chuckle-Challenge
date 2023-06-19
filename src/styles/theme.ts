import { StyleFunctionProps, mode } from '@chakra-ui/theme-tools';
import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true,
  disableTransitionOnChange: false,
}

const styles = {
  global: (props: Record<string, any>) => ({
    body: {
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('orange.50', 'gray.800')(props),
      backgroundImage: `radial-gradient(${mode('gray.400', 'gray.600')(props)} 1px, transparent 1px), radial-gradient(${mode('#A0AEC0', '#4A5568')(props)} 1px, transparent 1px)`,
      backgroundPosition: `0 0, 25px 25px`,
      backgroundAttachment: `fixed`,
      backgroundSize: `50px 50px`,
      overflowX: 'hidden',
      transitionProperty: "all",
      transitionDuration: "normal",
    },
  }),
};

const components = {
  Drawer: {
    // setup light/dark mode component defaults
    baseStyle: (props: StyleFunctionProps | Record<string, any>) => ({
      dialog: {
        bg: mode('white', '#141214')(props),
      },
    }),
  },
};

const theme = extendTheme({
  config,
  components,
  styles,
});

export default theme;