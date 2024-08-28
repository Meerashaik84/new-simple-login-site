//import React from 'react'

export default function Nitnav() {
  return (
    <div>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">NIT Home</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link active" href="/Home">Home</a>
      <a className="nav-item nav-link" href="/prd">Product</a>
      <a className="nav-item nav-link" href="/cont">Contact</a>
    </div>
  </div>
</nav>




    </div>
  )
}