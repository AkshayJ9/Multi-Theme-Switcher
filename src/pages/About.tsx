import React from "react";

const About: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">About Us</h2>
      <p className="text-gray-600 dark:text-gray-300">
        This app demonstrates multi-theme support with Context API,
        localStorage, and API integration.
      </p>
    </div>
  );
};

export default About;
