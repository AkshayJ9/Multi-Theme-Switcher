import React from "react";

const MainContent: React.FC = () => {
  return (
    <section className="p-4">
      <h2 className="text-2xl font-semibold">
        Welcome to the Multi-Theme Switcher App
      </h2>
      <p className="mt-2 text-gray-600 dark:text-gray-300">
        This is a sample paragraph demonstrating the theme switcher
        functionality.
      </p>
      <button className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Click Me!
      </button>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="p-4 border rounded shadow hover:shadow-md">Item 1</div>
        <div className="p-4 border rounded shadow hover:shadow-md">Item 2</div>
        <div className="p-4 border rounded shadow hover:shadow-md">Item 3</div>
      </div>
    </section>
  );
};

export default MainContent;
