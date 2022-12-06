import React from 'react';

export default function AboutMe() {
  return (
    <div>
      <h1>About Me</h1>
      <p>
        Hi there! I am <span className='hightlight-aboutme'>Jiong Wang</span>. I am a biology student now heading my way to software engineering.
        <br/> <br/>
        You may be wondering why I am changing my career? I never envisioned myself being a software engineer until entering graduate school. My fascination with software engineering stemmed from spending twelve hours a day in the lab manually processing hundreds of bacterial colony samples. Upon discovering that paid colony counting software was out of my budget and free alternatives couldn’t meet my needs, I decided to try to make my own program. Although the implementation was more difficult than I had anticipated, it opened the door to a thrilling new journey that eventually affirmed my decision to pursue further study in software engineering.
        <br/> <br/>
        Holding a bachelor's and a master's degree in biology, I spent thousands of hours in the lab. Frankly speaking, most of my time was spent on repetitive tasks such as colony counting. My deepest conviction was that only when the non-creative work is automated can all attention be assigned to the root of the problem. Helper programs exist, but it would be nearly impossible to properly adjust the parameters or the models to each experiment specifically without solid programming knowledge. Failing to recognize this veiled expectation creates an invisible gap between software engineers who try to help biologists but know no context, and the struggling biologists who lack any coding bases. I became compelled to automate workflow systems and free scientists from menial tasks so they could focus on more important tasks in making scientific discoveries. 
        <br/> <br/>
        So now, here I am! 
      </p>
    </div>
  );
}
