import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const NightModeToggle = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Toggle Nightmode"
      colorScheme={useColorModeValue("purple", "orange")}
      icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
      onClick={toggleColorMode}
    />
  );
};

export default NightModeToggle;
