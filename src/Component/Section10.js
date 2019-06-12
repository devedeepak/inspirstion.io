import React from 'react'
import discordimg from '../images/discord.svg'
import twitterimg from '../images/twitter.svg'
import telegramimg from '../images/telegram.svg'
import mediumimg from '../images/medium.svg'
import githubimg from '../images/github.svg'


class Section10 extends React.Component{
    render(){
      return( 
     <section className="section10 align-padd sec-marg" >
<div className="columns">
  <div className="column">
   <div className="text-bottom"><h1 className="title is-3  ">Get our last updates</h1></div>
   
    <div className="columns is-mobile">
        <div className="column is-two-fifths"><input className="input " type="text" placeholder="Your@email.here"/></div>
        <div className="column"><a className="button is-black">Subscribe</a></div>
        <div className="column"><img  src={discordimg} alt="recipes"/></div>
        <div className="column"><img  src={twitterimg} alt="recipes"/></div>
        <div className="column"><img  src={telegramimg} alt="recipes"/></div>
        <div className="column"><img  src={mediumimg} alt="recipes"/></div>
        <div className="column"><img  src={githubimg} alt="recipes"/></div> 
    </div>
  </div>
  </div>

     </section>
      )
    }
  }
  
  
  export default Section10;