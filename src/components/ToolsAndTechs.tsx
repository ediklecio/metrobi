import type { FC } from "react";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";

export interface Tool {
  name: string;
  url: string;
  description: string;
}

interface ToolsAndTechsProps {
  title: string;
  tools: Tool[];
}

const ToolsAndTechs: FC<ToolsAndTechsProps> = ({ title, tools }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4 text-gray-700">{title}</h2>
      <ul>
        {tools.map((tool) => (
          <li key={tool.name}>
            <a
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors py-1 block"
            >
              <span className="underline">{tool.name}</span>
              <span className="text-gray-600">, {tool.description}</span>
              <HiOutlineArrowTopRightOnSquare className="inline ml-1 mb-1 align-text-bottom" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToolsAndTechs;