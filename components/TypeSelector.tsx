
import React from 'react';
import { SCHEME_TYPES } from '../constants';

interface TypeSelectorProps {
  selectedType: string;
  onChange: (newType: string) => void;
}

const TypeSelector: React.FC<TypeSelectorProps> = ({ selectedType, onChange }) => {
  return (
    <div>
      <label htmlFor="scheme-type" className="block text-sm font-medium text-slate-300 mb-2">
        Scheme Type
      </label>
      <div className="relative">
        <select
          id="scheme-type"
          value={selectedType}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none bg-slate-800 border border-slate-600 rounded-md px-3 py-2 text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none"
        >
          {SCHEME_TYPES.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-400">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
  );
};

export default TypeSelector;
