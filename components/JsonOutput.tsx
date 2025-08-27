
import React, { useState, useEffect } => 'react';
import { ClipboardIcon } from './icons/ClipboardIcon';
import { CheckIcon } from './icons/CheckIcon';

interface JsonOutputProps {
  jsonData: string;
}

const JsonOutput: React.FC<JsonOutputProps> = ({ jsonData }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonData);
    setCopied(true);
  };

  return (
    <div className="relative bg-slate-900/70 rounded-lg h-full">
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-2 rounded-md bg-slate-700 text-slate-400 hover:bg-slate-600 hover:text-white transition-all text-sm flex items-center space-x-2"
      >
        {copied ? <CheckIcon /> : <ClipboardIcon />}
        <span>{copied ? 'Copied!' : 'Copy'}</span>
      </button>
      <pre className="p-4 pt-12 overflow-auto h-full text-cyan-300">
        <code className="font-mono text-sm whitespace-pre-wrap">{jsonData}</code>
      </pre>
    </div>
  );
};

export default JsonOutput;
