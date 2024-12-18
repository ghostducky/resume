import React from 'react';
import '../css/style.css';

class aboutMe extends React.Component{
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
        <p>Vivamus molestie pulvinar pretium. Nam vel leo pulvinar, ornare sem ut, auctor libero. Aliquam sit amet pharetra ipsum. Sed vestibulum tortor purus, nec hendrerit nisl viverra sit amet. Duis pulvinar dolor eget mattis viverra. Sed bibendum ut nulla et molestie. Suspendisse mollis sollicitudin venenatis.</p>
      </div>
    </div>
  );
}

export default AboutPage;