import React from 'react'
import recipesimg from '../images/recipes.jpg'


class Section6 extends React.Component{
    render(){
      return( 
     <section className="section6 align-padd sec-marg">
         <div className="columns allsection1">
             <div className="column">
                    <img  src={recipesimg} alt="recipes" border="0"/>
             </div>

            <div className="column appim">
                    <div className="columns"><h1 className="title is-1 is-size-1">Smart Recipes for Passive Income</h1></div>
                    <div className="columns"><p className="subtitle is-4">Saving, Investing, Exchange, Lending and Insurance services for individuals and commerce</p></div>
                    
            </div>

           
    </div>
         
     </section>
      )
    }
  }
  
  export default Section6;