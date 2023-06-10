import React from 'react';
import Profile from '../assets/profile.JPG'

export default function About() {
  return (
    <div class="introduction">
    <h2>Developer Introduction</h2>
    <img id='profilepic' src={Profile} alt='profile'></img>
    <div class='about-text'>
        <p>
            Hello, my name is Daniel Edouard and I am a entry level full stack developer.I am a web developer who has extensive knowledge in both
            front end and back end languages. My goal is to use my skills and knowledge to make a contirbution in the tech industry.
        </p>
    </div>
</div>
  );
}