import React from 'react';

export default function Resume() {
  const resumeLink = '../../assets/CV_JW.pdf'
  return (
    <div>
      <button>Download my Resume</button>
      <document file={resumeLink}>

      </document>
    </div>
  );
}