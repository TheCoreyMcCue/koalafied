import React from 'react'

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        &copy; { new Date().getFullYear() } <span>Koalafied</span>.  
        Built with {""}
        <a href="https://www.gatsbyjs.com">Gatsby</a> by Corey McCue
      </p>
    </footer>
  )
}

export default Footer
