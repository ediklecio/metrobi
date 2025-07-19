import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";

export interface Tool {
  name: string;
  url: string;
  description: string;
}

const ToolsAndTechs = () => {
  const tools: Tool[] = [
    { name: 'Figma', url: 'https://www.figma.com', description: 'A collaborative interface design tool.' },
    { name: 'React', url: 'https://react.dev', description: 'The library for web and native user interfaces.' },
    { name: 'VsCode', url: 'https://code.visualstudio.com/', description: 'A powerful, lightweight code editor.' },
  ];

  const title = "Tools and Techs used";

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