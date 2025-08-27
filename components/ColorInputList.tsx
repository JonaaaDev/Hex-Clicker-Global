
import React from 'react';
import { PlusIcon } from './icons/PlusIcon';

interface ColorInputProps {
  color: string;
  onChange: (newColor: string) => void;
  onRemove: () => void;
}

const ColorInput: React.FC<ColorInputProps> = ({ color, onChange, onRemove }) => {
  return (
    <div className="flex items-center space-x-3 bg-slate-700/50 p-2 rounded-md border border-slate-600">
      <div className="relative w-10 h-10">
        <input
          type="color"
          value={color}
          onChange={(e) => onChange(e.target.value)}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        <div 
          className="w-10 h-10 rounded-md border-2 border-slate-500" 
          style={{ backgroundColor: color }}
        ></div>
      </div>
      <input
        type="text"
        value={color.toUpperCase()}
        onChange={(e) => onChange(e.target.value)}
        className="flex-grow bg-slate-800 border border-slate-600 rounded-md px-3 py-2 text-white font-mono focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none"
        placeholder="#RRGGBB"
      />
      <button
        onClick={onRemove}
        className="p-2 rounded-md bg-rose-500/20 text-rose-400 hover:bg-rose-500/40 hover:text-rose-300 transition-colors"
        aria-label="Remove color"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
};


interface ColorInputListProps {
  colors: string[];
  onAddColor: () => void;
  onRemoveColor: (index: number) => void;
  onColorChange: (index: number, newColor: string) => void;
}

const ColorInputList: React.FC<ColorInputListProps> = ({ colors, onAddColor, onRemoveColor, onColorChange }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-300 mb-2">Colors</label>
      <div className="space-y-3">
        {colors.map((color, index) => (
          <ColorInput
            key={index}
            color={color}
            onChange={(newColor) => onColorChange(index, newColor)}
            onRemove={() => onRemoveColor(index)}
          />
        ))}
      </div>
      <button
        onClick={onAddColor}
        className="mt-4 w-full flex items-center justify-center space-x-2 px-4 py-2 border border-dashed border-slate-600 text-slate-400 rounded-md hover:border-cyan-500 hover:text-cyan-400 transition-colors"
      >
        <PlusIcon />
        <span>Add Color</span>
      </button>
    </div>
  );
};

export default ColorInputList;
