import { Text, useColorModeValue } from "@chakra-ui/react";

function Footer() {
  return (
    <Text color={useColorModeValue("gray.400", "gray.200")} align="center">
      © 2021 Simon L. Lange. All Rights Reserved.
    </Text>
  );
}

export default Footer;
