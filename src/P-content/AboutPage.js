import React from 'react';
import '../css/style.css';

class AboutMe extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      text: [
        {
          paragraf: "something something something"
        }
      ]
    }
  }
}

function AboutPage() {
  return (
    <div className='right-page'>
      <div className='info-section'>
        <p></p>
      </div>
    </div>
  );
}

export default AboutPage;