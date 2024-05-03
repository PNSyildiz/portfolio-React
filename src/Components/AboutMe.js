import React, { useEffect } from 'react';
import '../CSS/AboutMe.css'; // Import your Tailwind CSS styles

const AboutMe = () => {
  useEffect(() => {
    const jqueryScript = document.createElement('script');
    jqueryScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js';
    jqueryScript.async = true;
    document.body.appendChild(jqueryScript);

    const ripplesScript = document.createElement('script');
    ripplesScript.src = 'https://cdn.jsdelivr.net/npm/jquery.ripples@0.6.3/dist/jquery.ripples.min.js';
    ripplesScript.async = true;
    document.body.appendChild(ripplesScript);

    const customScript = document.createElement('script');
    customScript.src = 'script.js';
    customScript.async = true;
    document.body.appendChild(customScript);

    return () => {
      document.body.removeChild(jqueryScript);
      document.body.removeChild(ripplesScript);
      document.body.removeChild(customScript);
    };
  }, []);

  return (
    <div id="aboutme">
      <div className="About__Section"></div>
      <div className="Aboutme__container mx-auto  py-8">
        <h1>ALL ABOUT ME</h1>
        <div className="designme h-px bg-gray-300 mb-4" />
        <p className="text-lg leading-relaxed">
          I am a passionate software developer who enjoys tackling challenging
          tasks. I take honor in learning new skills and advancing myself and
          solving problems. I am an open-minded individual who is always willing
          to learn and partake in activities that give me the opportunity to
          advance my skills.
        </p> 
      </div>
    </div>
  );
};

export default AboutMe;
