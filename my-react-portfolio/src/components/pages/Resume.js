import React from 'react';
import resume1 from '../../assets/resume1.PNG';

export default function Resume() {
  return (
    <div>
      <button>Download my Resume</button>
      <br/>
      <img src={resume1}></img>
    </div>
  );
}