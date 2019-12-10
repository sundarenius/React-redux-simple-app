import React from 'react'

function Footer () {
  return (
    <div className="footer">
      { `${ new Date().getFullYear() }` }
    </div>
  )
}

export default Footer
