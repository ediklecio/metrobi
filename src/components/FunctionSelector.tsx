import type { FC } from 'react';

interface FunctionSelectorItem {
  id: number;
  label: string;
}

interface FunctionSelectorProps {
  items: FunctionSelectorItem[];
  selectedId: number;
  onSelect: (id: number) => void;
}

const FunctionSelector: FC<FunctionSelectorProps> = ({ items, selectedId, onSelect }) => {
  return (
    <div>
      <h2 className="text-purple-600 font-bold text-center mb-4">Select a function</h2>
      <ul className="flex flex-col space-y-2">
        {items.map((item) => (
          <li
            key={item.id}
            onClick={() => onSelect(item.id)}
            className={`flex items-center gap-4 px-4 py-2 rounded-md cursor-pointer transition-colors ${
              item.id === selectedId
                ? 'bg-gray-600 text-white'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          >
            <div className={`w-8 h-8 rounded-full text-sm flex items-center justify-center font-semibold ${
              item.id === selectedId ? 'bg-white text-gray-800' : 'bg-gray-400 text-white'
            }`}>
              {item.id}
            </div>
            <span className="text-sm font-medium">{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FunctionSelector;