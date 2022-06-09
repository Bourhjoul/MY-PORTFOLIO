import Link from "next/link";
import React from "react";
import {
  AiFillBehanceSquare,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import {
  Container,
  LeftDiv,
  CenterDiv,
  RightDiv,
  Logo,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <LeftDiv>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "20px",
          }}
        >
          <DiCssdeck size="3rem" /> <Logo>Samides</Logo>
        </a>
      </Link>
    </LeftDiv>
    <CenterDiv>
      <li>
        <Link href="#Tools">
          <NavLink>Tools</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#About">
          <NavLink>About me</NavLink>
        </Link>
      </li>
    </CenterDiv>
    <RightDiv>
      <SocialIcons target="_blank" href="https://github.com/Bourhjoul/">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/abdessamad-bourhjoul-35288a203/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons
        target="_blank"
        href="https://www.behance.net/abdessamadbourhjoul"
      >
        <AiFillBehanceSquare size="3rem" />
      </SocialIcons>
    </RightDiv>
  </Container>
);

export default Header;
