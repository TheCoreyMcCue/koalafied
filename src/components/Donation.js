import React from 'react'
import koala3 from '../assets/images/koala3.jpeg'
import koala4 from '../assets/images/koala4.jpeg'

const Donation = () => {

  const oneTime = () => {
    alert('Thank you for your one time donation of $100')
  }
  const reoccuring = () => {
    alert('Thank you for your reoccuring donation of $50 a month')
  }

  return (
    <main className="container">
      <h2 className="text-center">Please select your donation preference</h2>
    <section className="row">
      <div className="col">
        <a href=""
          onClick={() => oneTime()}
        >
          <div className="card donate-card">
          <img src={ koala3 } className="card-img-top" alt="koala laying in a tree" />
            <div className="card-body">
                <h5 className="card-title text-center">One Time Donation</h5>
                <h6 class="card-subtitle mb-2 text-muted text-center">$100 (one time donation)</h6>
              <p className="card-text text-center">With help from people like you, we can make our mission of protecting every koala a reality.</p>
            </div>
          </div>
        </a>
      </div>
      <div className="col">
        <a href=""
          onClick={() => reoccuring()}
        >
        <div className="card donate-card">
        <img src={ koala4 } className="card-img-top" alt="koala mama holding its baby" />
          <div className="card-body">
                <h5 className="card-title text-center">Reoccuring Donation</h5>
                <h6 class="card-subtitle mb-2 text-muted text-center">$50/month (reoccuring)</h6>
            <p className="card-text text-center">Our koalafied members are the backbone of our mission. Please consider joining today.</p>
          </div>
        </div>
        </a>
      </div>
    </section>
  </main>
  )
}

export default Donation
