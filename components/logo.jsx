import Link from "next/link";
import Image from "next/image";
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";
import sLogo from "../public/s-logo.png";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  & img {
    animation-name: out;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
  }

  &:hover img {
    animation-name: in;
    animation-duration: 0.5s;
    animation-iteration-count: 1;
  }
`;

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={sLogo} width={30} height={30} alt="Logo S" />
          <Text
            color={useColorModeValue("gray.800", "whiteAlpha.900")}
            fontWeight="bold"
            ml={3}
          >
            Simon L. Lange
          </Text>
        </LogoBox>
      </a>
    </Link>
  );
};

export default Logo;
