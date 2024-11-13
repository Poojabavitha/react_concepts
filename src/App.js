import React from 'react';
import 'bulma/css/bulma.css'
import './App.css';
import ProfileCard from './components/ProfileCard';
import alexaimage from './images/alexa.png';
import cortanaimage from './images/cortana.png';
import siriimage from './images/siri.png';


function App() {

  
// const date = new Date();
// const time = date.toLocaleTimeString();
  return (
    
    <div>
      <section class="hero is-primary">
  <div class="hero-body">
    <p class="title">Personal Digital Assitants</p>
    
  </div>
</section>
      
      <div className='container'>
        <section className='section'>
          <div className='columns'>
            <div className='column is-3'>
            <ProfileCard title="Alexa"
             handle="@alexa99" 
             image={alexaimage}
             description="Alexa was created by Amazon used to buy things."/>
            </div>
            <div className='column is-3'>
            <ProfileCard title="Cortana" 
            handle="@cortana32"
             image={cortanaimage}
             description="Cortana was created by Microsoft ."/>
            </div>
            <div className='column is-3'>
            <ProfileCard title="Siri"
             handle="@siri01" 
             image={siriimage}
             description="Siri was created by Apple is phased out"/>
            </div>
          </div>
        </section>
      </div>
      
      
      
    </div>
   
  );
}

export default App;
