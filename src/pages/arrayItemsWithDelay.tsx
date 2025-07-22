import { useState } from 'react';
import { getArrayItemsWithDelay } from '../services/arrayItemsWithDelay/arrayItemsWithDelay';

const sampleArray = ['First item', 'Second item', 'Third item', 'Fourth item', 'Fifth item'];

const ArrayItemsWithDelay = () => {
  const [output, setOutput] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const handleStart = async () => {
    setIsRunning(true);
    setOutput([]); // Clear previous output

    await getArrayItemsWithDelay(sampleArray, (item) => {
      setOutput((prevOutput) => [...prevOutput, item]);
    });

    setIsRunning(false);
  };

  return (
    <div>
      <h3 className="text-2xl font-bold mb-2 text-gray-800">4 - Delayed Display</h3>
      <p className="text-sm mb-4">
        Write an efficient method that tells us whether or not an input string brackets 
        {`("{", "}", "(", ")", "[", "]") opened and closed properly. Example: “{[]}” => true, “{(])}” => false,“{([)]}” => false`}
      </p>
      <p className="text-sm mb-4">
        Click the button to display items from an array with an exponentially increasing delay (1s, 2s, 4s, ...).
      </p>
      <button
        onClick={handleStart}
        disabled={isRunning}
        className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 disabled:bg-gray-400 transition-colors"
      >
        {isRunning ? 'Running...' : 'Start Delay'}
      </button>
      <div className="mt-4 p-4 bg-gray-100 rounded-md min-h-[100px]">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">Result</h2>
        <ul className="list-disc list-inside mt-2 text-gray-800">
          {output.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default ArrayItemsWithDelay;