import { IconButton, chakra, useColorMode, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { RiMoonFill, RiSunLine } from 'react-icons/ri';

const ThemeToggle: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const CustomBg = useColorModeValue('rgba(251,211,141,0.5)', 'whiteAlpha.200');
  const CustomHoverBg = useColorModeValue('rgba(251,211,141,0.8)', 'whiteAlpha.300');

  const CustomIconButton = chakra(IconButton, {
    baseStyle: {
      _hover: {
        bg: CustomHoverBg,
        bgOpacity: '0%',
      }
    }
  });

  return (
    <CustomIconButton
      aria-label="theme toggle"
      icon={colorMode === 'light' ? <RiMoonFill /> : <RiSunLine />}
      onClick={toggleColorMode}
      bg={CustomBg}
    />
  );
};

export default ThemeToggle;
