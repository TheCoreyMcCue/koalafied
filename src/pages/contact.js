import React from 'react'
import Layout from '../components/Layout'

const contact = () => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want to drop us a line?</h3>
            <p>Coloring book lomo live-edge four dollar toast helvetica blog +1 authentic unicorn. Roof party street art church-key pug. DIY hot chicken narwhal man bun, kogi whatever umami VHS snackwave butcher meh taiyaki. </p>
            <p>Blog messenger bag ethical everyday carry, kombucha copper mug pok pok squid adaptogen. Forage tbh migas celiac microdosing mixtape. Tbh twee austin church-key street art chia.</p>
          </article>
          <article>
            <form className="form ontact-form">
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name"/>
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email"/>
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">submit</button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default contact
