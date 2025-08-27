import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-slate-900 border-b border-slate-800">
      <div className="container mx-auto px-4 py-5 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Color Your Name in {' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-500">
            Clicker Global
          </span>
        </h1>
        <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
          Create custom JSON color configurations for your name. Simply copy the generated code and paste it into the game's settings.
        </p>
        <div className="mt-6">
          <a
            href="https://web-clicker-global.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 shadow-lg shadow-cyan-500/20"
          >
            Play Clicker Global
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
