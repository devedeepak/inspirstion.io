import React from 'react'
import logosimg from '../images/logos.png'


class Section5 extends React.Component{
    render(){
      return( 
     <section className="section5 align-padd sec-marg">
         <div className="columns allsection1 ">
            <div className="column appim">
                    <div className="columns"><img src={logosimg} alt="logosimg" className="logosimg"/></div>  
            </div>
          </div>
         
     </section>
      )
    }
  }
  
  
  export default Section5;