import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import ColorInputList from './components/ColorInputList';
import TypeSelector from './components/TypeSelector';
import JsonOutput from './components/JsonOutput';
import { SCHEME_TYPES } from './constants';
import { GithubIcon } from './components/icons/GithubIcon';

const App: React.FC = () => {
  const [colors, setColors] = useState<string[]>(['#FF1493', '#00FF00', '#1E90FF']);
  const [schemeType, setSchemeType] = useState<string>(SCHEME_TYPES[0].value);

  const handleAddColor = () => {
    // Add a random color to make it more interesting
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    setColors([...colors, randomColor]);
  };

  const handleRemoveColor = (indexToRemove: number) => {
    setColors(colors.filter((_, index) => index !== indexToRemove));
  };

  const handleColorChange = (indexToChange: number, newColor: string) => {
    setColors(colors.map((color, index) => (index === indexToChange ? newColor : color)));
  };

  const generatedJson = useMemo(() => {
    const scheme = {
      colors: colors,
      type: schemeType,
    };
    return JSON.stringify(scheme, null, 2);
  }, [colors, schemeType]);

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Panel: Controls */}
          <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">Controls</h2>
            <div className="space-y-6">
              <TypeSelector 
                selectedType={schemeType} 
                onChange={setSchemeType} 
              />
              <ColorInputList 
                colors={colors}
                onAddColor={handleAddColor}
                onRemoveColor={handleRemoveColor}
                onColorChange={handleColorChange}
              />
            </div>
          </div>

          {/* Right Panel: Output */}
          <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">Generated JSON</h2>
            <JsonOutput jsonData={generatedJson} />
          </div>
        </div>
      </main>
      <footer className="text-center py-4 text-slate-500 text-sm">
        <div className="flex justify-center items-center space-x-2">
          <span>Created by JonaaaDev</span>
          <a 
            href="https://github.com/JonaaaDev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
            aria-label="JonaaaDev's GitHub Profile"
          >
            <GithubIcon />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
