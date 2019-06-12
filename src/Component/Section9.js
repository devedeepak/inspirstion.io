import React from 'react'
import defiimg from '../images/defi.png'
import rebrandimg from '../images/rebrand.png'
import communityimg from '../images/community.jpeg'

class Section9 extends React.Component{
    render(){
      return( 
     <section className="section9 align-padd sec-marg" >
<div className="columns">
  <div className="column">
   <div className="text-bottom"><h1 className="title is-1 text">Check our latest news</h1></div>
   
    <div className="columns">
      <div className="column ">
             <div className="columns "><img className="img-webkit" src={defiimg } alt="recipes"/></div>
            <div className="columns title is-3  text">Welcome Defi Tracker</div>
            <div className="columns text">Watch-mode all your DeFi portfolio in a single page!</div>

      </div>
      <div className="column">
            <div className="columns"><img className="img-webkit" src={rebrandimg} alt="recipes" /></div>
            <div className="columns title is-3   text">Rebrandingn Dexwallet</div>
            <div className="columns text">A short update about our Dewallet rebranding and 2 new websites!</div>
      </div>
      <div className="column">
            <div className="columns"><img className="img-webkit" src={communityimg} alt="recipes" /></div>
            <div className="columns title is-3   text">Dexpay Community Update April</div>
            <div className="columns text">Item management, invoice creation and a full new dashboard</div>
        </div>
</div>
  </div>
  </div>

     </section>
      )
    }
  }
  
  
  export default Section9;