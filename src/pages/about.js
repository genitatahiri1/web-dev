import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"

// ...GatsbyImageSharpFluid
const About = () => {
  return <Layout>
 
    <section className="about-page">
              <h1>This is me!</h1>
        <p>
          Experienced Developer with a demonstrated history of working in the information technology and services industry. Skilled in PHP, WordPress, JavaScript, SASS, Databases. Strong education professional with a Bachelor's degree focused in Computer Science and Engineering from UBT - University for Business and Technology.
  Currently studying MSc Computing at Teesside University.
        </p>
    </section>

    </Layout>
}

export default About
