import React from 'react'
import logo from '../images/DexlabLogo.png'

class Header extends React.Component{
    render(){
      return( 
      
      <section className="header ">
      <nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href="https://bulma.io">
      <img src={logo} width="60" height="60"/>
    </a>

    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-end">
      <a className="navbar-item">
      Inspiration.on
      </a>

      <a className="navbar-item">
      Defitracker.io
      </a>

      
        <a className="navbar-item">
        Dexoay.me
        </a>

        <a className="navbar-item">
        Term &#38; Vision
        </a>

        <a className="navbar-item">
        Blog
        </a>

        <a className="navbar-item">
        Whitelabel
        </a>

        <a className="navbar-item">
        Contacts
        </a>

     
     
    </div>

    
  </div>
</nav>
      </section>
      )
    }
  }
  
  
  export default Header;
