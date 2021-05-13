import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Koala from '../components/Koala'
import { StaticImage } from 'gatsby-plugin-image'


const Home = () => {
  return (
    <>
      <Layout>
        <Koala />
      </Layout>
    </>
  )
}

export default Home

