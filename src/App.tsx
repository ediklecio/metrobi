import './App.css'
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import Header from './components/Header'
import Footer from './components/Footer'
import ToolsAndTechs from './components/ToolsAndTechs';
import type { Tool } from './components/ToolsAndTechs';

const projectTools: Tool[] = [
  { name: 'Figma', url: 'https://www.figma.com', description: 'A collaborative interface design tool.' },
  { name: 'React', url: 'https://react.dev', description: 'The library for web and native user interfaces.' },
  { name: 'VsCode', url: 'https://code.visualstudio.com/', description: 'A powerful, lightweight code editor.' },
];

function App() {

  return (
    <>
      <Header />

      <div className='container m-auto p-8'>
        <div className="flex gap-4">
          <div className="w-[30%]">
            <div className="bg-gray-200 p-4 text-gray-500 rounded-md">
              <p>This is a Metrobi technical challenge made with React and a lot of TypeScript by Ediklecio.</p>
              <a
                href="https://github.com/ediklecio/metrobi"
                className="block mt-4 text-blue-600 hover:underline hover:text-blue-800 transition-colors"
              >
                github.com/ediklecio/metrobi
                <HiOutlineArrowTopRightOnSquare className="inline ml-1" />
              </a> 
            </div>
            <div className="bg-gray-200 p-4 mt-4">
              Menu
            </div>
          </div>
          <div className="w-[70%]">
            <div className="bg-gray-200 p-4">
              Content
            </div>
            <div className="bg-gray-200 p-4 mt-4">
              About
            </div>
          </div>
        </div>

        <div className="w-full flex gap-4">
          <div className="w-[60%] bg-gray-200 p-4 mt-4">
            Images
          </div>
          <div className="w-[40%] bg-gray-200 p-4 mt-4">
            <ToolsAndTechs title="Tools and Techs used" tools={projectTools} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default App
