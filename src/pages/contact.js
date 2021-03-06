import * as React from "react"
import { graphql } from 'gatsby'
// import { StaticImage } from "gatsby-plugin-image"


import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import Infoblock from "../components/Reusable/Infoblock"
import Contact from "../components/Contact/contact"


const ContactPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
  

    <HeroSection 
      img={data.img.childImageSharp.fluid}
      title="Contact Us"
      subtitle=""
      heroclass="about-background"
    />
    <Infoblock heading="How can we help you?" />
    <Contact />
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: {eq: "contact.png"}){
		childImageSharp{
			fluid{
				...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

export default ContactPage
