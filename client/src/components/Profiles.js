import React from 'react';
// Import icons from FontAwesome or other libraries
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './../styles/Profiles.css';

const Profiles = () => {
  const profiles = [
    {
      name: 'GitHub',
      url: 'https://github.com/ppathi3/',
      icon: <FaGithub />,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/pathipooja',
      icon: <FaLinkedin />,
    },
  ];

  return (
    <section className="profiles">
      <h2>Connect With Me</h2>
      <div className="profile-links">
        {profiles.map((profile, index) => (
          <a
            key={index}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            className="profile-link"
          >
            {profile.icon}
            <span>{profile.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Profiles;
