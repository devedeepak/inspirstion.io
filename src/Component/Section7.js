import React from 'react'
import dexpayimg from '../images/dexpay.jpg'


class Section7 extends React.Component{
    render(){
      return( 
     <section className="section7 align-padd sec-marg">
         <div className="columns allsection1">
            <div className="column sec-text appim">
                    <div className="columns"><h1 className="title is-1 is-size-1">Connecting people with merchants</h1></div>
                    <div className="columns"><h2 className="subtitle is-4">Whether it's going to be in person or online, merchants will be able to start using Dexpay straight away and accept dozen of tokens from all major Ethereum Wallets</h2></div>
                   
            </div>

            <div className="column">
             <img src={dexpayimg} alt="appstoreimg" className="dexpayimg"/>
            </div>
    </div>
         
     </section>
      )
    }
  }
  
  
  export default Section7;