import Logo from "./logo";
import NextLink from "next/link";
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import NightModeToggle from "./nightmode";
import { IoLogoGithub } from "react-icons/io";

const LinkItem = ({ href, path, children, _target, ...props }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("black.900", "whiteAlpha.900");
  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        // eslint-disable-next-line react-hooks/rules-of-hooks
        bg={active ? [useColorModeValue("grayColor", "red.200")] : undefined}
        color={active ? "whiteAlpha.900" : inactiveColor}
        borderRadius={5}
        _hover={{
          backgroundColor: useColorModeValue("#d6bcfa", "red.200"),
          transition: "0.2s",
          textDecoration: "underline",
          color: "white",
        }}
        _target={_target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
};

const Navbar = (props) => {
  const { path } = props;

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      style={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/portfolio" path={path}>
            Portfolio
          </LinkItem>
          <LinkItem href="/gear" path={path}>
            Gear
          </LinkItem>
          <LinkItem href="/#toolsPage" path={path}>
            Redskaber
          </LinkItem>
          <LinkItem
            _target="_blank"
            href="https://github.com/simonllange/Portfolio"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            Source
          </LinkItem>
        </Stack>
        <Box flex={1} align="right">
          <NightModeToggle />
          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>Om mig</MenuItem>
                </NextLink>
                <NextLink href="/portfolio" passHref>
                  <MenuItem as={Link}>Portfolio</MenuItem>
                </NextLink>
                <NextLink href="/gear" passHref>
                  <MenuItem as={Link}>Gear</MenuItem>
                </NextLink>
                <NextLink href="/#toolsPage" passHref>
                  <MenuItem as={Link}>Redskaber</MenuItem>
                </NextLink>
                <NextLink
                  href="https://github.com/simonllange/Portfolio"
                  passHref
                >
                  <MenuItem as={Link}>Source</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
