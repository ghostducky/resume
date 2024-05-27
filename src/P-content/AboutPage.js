import React from 'react';
import '../css/style.css';

/*class aboutMe extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      text: [
        {

        }
      ]
    }
  }
}*/

function AboutPage() {
  return (
    <div>
      <div className='info-section'>
        <p>Vivamus molestie pulvinar pretium. Nam vel leo pulvinar, ornare sem ut, auctor libero. Aliquam sit amet pharetra ipsum. Sed vestibulum tortor purus, nec hendrerit nisl viverra sit amet. Duis pulvinar dolor eget mattis viverra. Sed bibendum ut nulla et molestie. Suspendisse mollis sollicitudin venenatis.</p>
      </div>
      <div className='selection-container'>
        <div className='about-container container'>
          <h4>ABOUT</h4>
        </div>
        <div className='projects-container container'>
          <h4>PROJECTS</h4>
        </div>
        <div className='experience-container container'>
          <h4>EXPERIENCE</h4>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;