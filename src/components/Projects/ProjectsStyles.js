import styled from "styled-components"

export const Img = styled.img`
  width: 100%;
  transition: 0.7s ease;

  ehgiht: 100%;
  object-fit: cover;
  overflow: hidden;
  &:hover {
    transform: scale(1.1);
  }
`

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(2, 176, 211, 0.1);
  text-align: center;
  width: 400px;
  overflow: hidden;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
`

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #fff;
  padding: 0.5rem 0;
  font-size: ${(props) => (props.title ? "3rem" : "2rem")};
`

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #02b0d3;
`

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: "Droid Serif", serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.3rem;
  }
`

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`

export const ExternalLinks = styled.a`
  color: #fff;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  background: rgb(9, 192, 229);
  border-radius: 15px;
  transition: 0.5s;
  &:hover {
    background: #019fbf;
  }
`

export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
`
export const Badge = styled.li`
  color: rgba(85, 201, 224, 0.8);
  font-size: 1.5rem;
`
