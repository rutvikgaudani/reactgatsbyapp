import * as React from "react"
import { graphql } from 'gatsby'
// import { StaticImage } from "gatsby-plugin-image"


import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import Infoblock from "../components/Reusable/Infoblock"
import DualInfoblock from "../components/Reusable/DualInfoblock"
import Teamphotosection from "../components/About/Teamphotosection"

const AboutPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
  

    <HeroSection 
      img={data.img.childImageSharp.fluid}
      title="Computer Science student"
      subtitle=""
      heroclass="about-background"
    />
    <DualInfoblock heading="A message from a developer" source="https://i.postimg.cc/BnFx7hKq/burger.jpg"/>
    <Infoblock heading="About Vision" />
    <Teamphotosection />
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: {eq: "about.png"}){
		childImageSharp{
			fluid{
				...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

export default AboutPage
