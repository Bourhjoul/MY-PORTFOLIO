import React from "react"

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents"
import Button from "../../styles/GlobalComponents/Button"
import { LeftSection } from "./HeroStyles"

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello, <br />
        My Name is Bourhjoul Abdessamad.
      </SectionTitle>
      <SectionText>
        I'm a passionate Web developer who loves to make things that{" "}
        <h3>make difference.</h3>
      </SectionText>
      <Button>
        <a href="#Contact" style={{ color: "white" }}>
          Get in touch
        </a>
      </Button>
    </LeftSection>
  </Section>
)

export default Hero
