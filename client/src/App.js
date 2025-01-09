// //App.js
// import React, { useEffect } from 'react';
// // import axios from 'axios';
// import './styles/App.css';
// import Header from './components/Header';
// import AboutMe from './components/AboutMe';
// import Projects from './components/Projects';
// import Resume from './components/Resume';
// import Contact from './components/Contact';

// //data will be the string we send from our server
// // const apiCall = () => {
// //   axios.get('http://localhost:3000').then((data) => {
// //     //this console.log will be in our frontend console
// //     console.log(data)
// //   })
// // }

// const App = () => {
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('visible');
//             entry.target.classList.remove('hidden');
//           } else {
//             entry.target.classList.add('hidden');
//             entry.target.classList.remove('visible');
//           }
//         });
//       },
//       { threshold: 0.3 } // Trigger when 30% of the section is visible
//     );

//     const sections = document.querySelectorAll('section, header');
//     sections.forEach((section) => observer.observe(section));

//     return () => observer.disconnect(); // Cleanup observer
//   }, []);
//   return (
//     <div className="app">
//       <Header />
//       <AboutMe />
//       <Projects />
//       <Resume />
//       <Contact />
//     </div>
//   );
// };

// export default App;
import React, { useEffect, useState } from 'react';
import './styles/App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import VideoBackground from './components/VideoBackground';

const App = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    // Intersection Observer for section visibility
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.classList.remove('hidden');
          } else {
            entry.target.classList.add('hidden');
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('section, header');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Show or hide scroll-to-top button
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">
       
      <nav className="navbar">
        <button onClick={() => handleScrollToSection('about-me')}>About Me</button>
        <button onClick={() => handleScrollToSection('projects')}>Projects</button>
        <button onClick={() => handleScrollToSection('resume')}>Resume</button>
        <button onClick={() => handleScrollToSection('contact')}>Contact</button>
      </nav>
      {/* <VideoBackground> */}
      <Header id="header" />
      <AboutMe id="about-me" />
      <Projects id="projects" />
      <Resume id="resume" />
      <Contact id="contact" />
      {showScrollButton && (
        <button className="scroll-to-top" onClick={handleScrollToTop}>
          ↑
        </button>
      )}
      {/* </VideoBackground> */}
    </div>
  );
};

export default App;
