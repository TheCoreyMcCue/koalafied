import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { AiOutlineArrowLeft, AiOutlineArrowRight  } from 'react-icons/Ai'
import leftUrl from '../assets/images/koala1.jpeg'
import rightUrl from '../assets/images/koala1r.jpg'



const Koala = () => {
  const [lightMode, setLightMode] = useState(true)
  const [show, setShow] = useState(false)
  const [showRight, setShowRight] = useState(false)
  const [clickRight, setClickRight] = useState(false)
  const [clickLeft, setClickLeft] = useState(false)

  const rightSideClick = () => {
    setClickLeft(false)
    setClickRight(true)
  }
  const leftSideClick = () => {
    setClickLeft(true)
    setClickRight(false)
  }

  return (
    <main className="page">
      <header className="hero">
        <img 
          src={ lightMode ? leftUrl : rightUrl }
          className="hero-img blur"
          alt="koala looking at buttons" />
        <div className="hero-container">
          <div className="arrow-left hidden"
            onMouseOver={() => setShow(true)}
            onMouseOut={() => setShow(false)}
            onClick={() => leftSideClick()}>
            <p>hidden message</p>
          </div>
          {show && (
            <AiOutlineArrowLeft
              className="arrow-left"
              />
          )}       
          <div className="hero-text">
            <h1 className="hero-text">Koalafied</h1>
            <h4>Where koalas are our business</h4>
          </div>
          <div className="arrow-right hidden"
            onMouseOver={() => setShowRight(true)}
            onMouseOut={() => setShowRight(false)}
            onClick={() => rightSideClick()}
          >
            <p>hidden message</p>
          </div>
          {showRight && (
            <AiOutlineArrowRight
              className="arrow-right"
            />
          )} 
        </div>
      </header>
      <div className="hero-links">
        <Link href="/donate"
          onMouseOver={() => setLightMode(true)}>
          <div className={clickLeft ? "card mx-2 click-right" : "card mx-2"}>
            <div className="card-body">
              <h5 className="card-title text-center">One Time Donation</h5>
              <h6 className="card-subtitle mb-2 text-muted text-center">$100 (one time donation)</h6>
              <p className="card-text text-center">Help us feed one Koala for a month with a one time donation to our foundation.</p>
            </div>
          </div>
        </Link>
        <Link href="/donate"
          onMouseOver={() => setLightMode(false)}>
          <div className={clickRight ? "card mx-2 click-right" : "card mx-2"}>
            <div className="card-body">
              <h5 className="card-title text-center">Become a member</h5>
              <h6 className="card-subtitle mb-2 text-muted text-center">$50/month (reoccuring)</h6>
              <p className="card-text text-center">Become a memeber of the Koalafied family with your continued monthy support.</p>
            </div>
          </div>
        </Link>
      </div>
  </main>
  )
}

export default Koala
