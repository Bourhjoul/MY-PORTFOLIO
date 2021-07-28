import React from "react"

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Badge,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles"
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents"
import { projects } from "../../constants/constants"

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main> My Porojects</SectionTitle>
    <GridContainer>
      {projects.map(
        ({ image, id, title, tags, source, visit, description }) => (
          <BlogCard key={id}>
            <Img src={image} />
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <div>
              <TagList>
                {tags.map((badge, i) => (
                  <Badge key={i}>{badge}</Badge>
                ))}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks target="_blank" href={source}>
                CodeBase
              </ExternalLinks>
              <ExternalLinks target="_blank" href={visit}>
                Demo
              </ExternalLinks>
            </UtilityList>
          </BlogCard>
        )
      )}
    </GridContainer>
  </Section>
)

export default Projects
