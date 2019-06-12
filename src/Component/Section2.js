import React from 'react'
import savingAccountimg from '../images/savingAccount.jpg'


class Section2 extends React.Component{
    render(){
      return( 
     <section className="section2 align-padd sec-marg">
         <div className="columns allsection1">
             <div className="column">
                    <img  src={savingAccountimg} alt="Saving Account" border="0"/>
            </div>

            <div className="column sec-text appim">
                    <div className="columns"><h1 className="title is-1 is-size-1">As easy as a saving account, with up to 3x more gains</h1></div>
                    <div className="columns"><h2 className="subtitle is-4">Liquidity supply APR are usually from 2 to 5 times higher than what offered by your bank</h2></div>
                    
            </div>

           
    </div>
         
     </section>
      )
    }
  }
  
  export default Section2;