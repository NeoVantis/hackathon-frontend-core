import React, { useState } from 'react';

interface OptionsGridProps {
  title: string;
  options: string[];
  onSelect: (selected: string[]) => void;
}

const OptionsGrid: React.FC<OptionsGridProps> = ({ title, options, onSelect }) => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleToggle = (option: string) => {
    const newSelected = selected.includes(option)
      ? selected.filter(s => s !== option)
      : [...selected, option];
    setSelected(newSelected);
    onSelect(newSelected);
  };

  return (
    <div className="space-y-6">
      <div className="inline-block rounded-full p-[2px] [background:linear-gradient(45deg,#CDCBCB_0%,#021222_30%,#4356A9_90%)]">
        <div className="bg-[#02060A] rounded-full px-4 py-2 text-white text-xl">
          {title}
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => handleToggle(option)}
            className={`rounded-full px-6 py-3 border border-white text-white transition-colors ${
              selected.includes(option) ? 'border-blue-700 bg-blue-700' : 'bg-[#040C13]'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default OptionsGrid;