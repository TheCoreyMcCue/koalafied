import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const About = () => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>Protecting koalas around the globe is our mission</h2>
            <p>Chartreuse butcher echo park kinfolk. Organic wayfarers tumblr, drinking vinegar humblebrag direct trade taxidermy cray blue bottle vegan.</p>
            <p>Roof party street art church-key pug. DIY hot chicken narwhal man bun, kogi whatever umami VHS snackwave butcher meh taiyaki. Blog messenger bag ethical everyday carry, kombucha copper mug pok pok squid adaptogen.</p>
            <Link to="/donate" className="btn">donate today</Link>
          </article>
          <StaticImage
            src="../assets/images/koala2.jpeg"
            alt="koala sleeping on tree"
            className="about-img"
            placeholder="tracedSVG"/>
        </section>
      </main>
    </Layout>


    
  )
}

export default About
