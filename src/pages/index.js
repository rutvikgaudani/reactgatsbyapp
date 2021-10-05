import * as React from "react"
import { graphql } from 'gatsby'
// import { StaticImage } from "gatsby-plugin-image"


import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import Infoblock from "../components/Reusable/Infoblock"
import DualInfoblock from "../components/Reusable/DualInfoblock"
import Coursecart from "../components/Cart/Coursecart"

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p> */}

    <HeroSection 
      img={data.img.childImageSharp.fluid}
      title="I am a Coder"
      subtitle="this website is made in react"
      heroclass="hero-background"
    />
    <Infoblock heading="About Us" />
    <Coursecart courses={data.courses}/>
    <DualInfoblock heading="Our Team" source="https://i.postimg.cc/BnFx7hKq/burger.jpg"/>
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: {eq: "heromain.png"}){
		childImageSharp{
			fluid{
				...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  courses: allContentfulCourses{
		edges{
			node{
				id
        title
        price
        category
        description{
					description
        }
        image{
					fixed(width:200, height:100){
						...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
}
`

export default IndexPage
