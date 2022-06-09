import React from "react";
import { DiFirebase, DiReact } from "react-icons/di";
import { AiOutlinePlus } from "react-icons/ai";
import { FaServer } from "react-icons/fa";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="Tools">
    <br />
    <SectionTitle>Tools</SectionTitle>
    <SectionText>
      For me it doesn't matter which technology I know or love to work with, but
      which one is gonna help get the job in clean way and quickly.
    </SectionText>
    <ListContainer>
      <List>
        <ListItem>
          <DiReact size="3rem" />
          <ListTitle>Frontend</ListTitle>
          <ListParagraph>
            HTML & Css <br />
            TypeScript <br />
            React.js <br />
            Redux.js <br />
            Next.js <br />
          </ListParagraph>
        </ListItem>
        <ListItem>
          <FaServer size="2rem" />
          <ListTitle>Backend</ListTitle>
          <ListParagraph>
            Nodejs <br />
            Nestjs <br />
            Expressjs <br />
            PHP <br />
          </ListParagraph>
        </ListItem>
        <ListItem>
          <DiFirebase size="3rem" />
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            Mongodb <br />
            PostgreSql <br />
            Mysql <br />
          </ListParagraph>
        </ListItem>
        <ListItem>
          <AiOutlinePlus size="3rem" />
          <ListTitle>Other</ListTitle>
          <ListParagraph>
            Java <br />
            Database Design <br />
            progressive web app <br />
            Photoshop & Illustrator <br />
            Git & Github <br />
            Scrum <br />
          </ListParagraph>
        </ListItem>
      </List>
    </ListContainer>
  </Section>
);

export default Technologies;
