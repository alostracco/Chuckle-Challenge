import { mode } from '@chakra-ui/theme-tools';
import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true,
  disableTransitionOnChange: false,
};

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
      transitionProperty: 'all',
      transitionDuration: 'normal',
    },
  }),
};

const components = {
  // Style components here but idk why it doesn't work for me
};

const theme = extendTheme({
  config,
  styles,
});

export default theme;