import React from 'react'
import appstoreimg from '../images/appStore.svg'
import appstorevideo from '../videos/videoBg.mp4'

class Section1 extends React.Component{
    render(){
      return( 
     <section className="section1 align-padd sec-marg">
         <div className="columns allsection1">
            <div className="column sec-text appim">
                    <div className="columns"><h1 className="title is-1 is-size-1">The Open Financial System of the Future. Today.</h1></div>
                    <div className="columns"><h2 className="subtitle is-4">Saving, Investing, Exchange, Lending and Insurance services for individuals and commerce</h2></div>
                    <div className="columns"><img src={appstoreimg} alt="appstoreimg" className="appstoreimg"/></div>  
            </div>

            <div className="column">
                    <video  src={appstorevideo} />
            </div>
    </div>
         
     </section>
      )
    }
  }
  
  
  export default Section1;