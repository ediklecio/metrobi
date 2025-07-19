import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import Header from './components/Header'
import Footer from './components/Footer'
import ToolsAndTechs from './components/ToolsAndTechs';
import ImageSlider, { type ImageSliderProps } from './components/ImageSlider'
import CandidateCard from './components/CandidateCard';
import FunctionList from './components/FunctionList';

const FindDuplicatedItems = lazy(() => import('./pages/findDuplicatedItems'));
const ArrayItemsWithDelay = lazy(() => import('./pages/arrayItemsWithDelay'));


const projectImages: ImageSliderProps[] = [
  {
    url: '/carousel-main/image-01.jpg',
    description: 'A beautiful view of the mountains.',
  },
  {
    url: '/carousel-main/image-02.jpg',
    description: 'A serene lake surrounded by trees.',
  },
];

function App() {
  return (
    <BrowserRouter>
      <Header />

      <div className='max-w-5xl m-auto p-8'>
        <div className="flex gap-4">
          <div className="w-[30%]">
            <div className="bg-gray-200 p-4 text-gray-500 rounded-md">
              <p>This is a Metrobi technical challenge made with React and a lot of TypeScript by Ediklecio.</p>
              <a
                href="https://github.com/ediklecio/metrobi"
                className="block mt-4 text-blue-600 hover:underline hover:text-blue-800 transition-colors break-all"
              >
                github.com/ediklecio/metrobi
                <HiOutlineArrowTopRightOnSquare className="inline ml-1" />
              </a>
            </div>
            <div className="bg-gray-200 p-4 mt-4 rounded-md">
              <FunctionList />
            </div>
          </div>
          <div className="w-[70%] flex flex-col gap-4">
            <div className="bg-gray-200 p-4 rounded-md">
              <Suspense fallback={<div className="text-center p-4">Carregando...</div>}>
                <Routes>
                  <Route path="/" element={<Navigate to="/find-duplicated-items" replace />} />
                  <Route path="/find-duplicated-items" element={<FindDuplicatedItems />} />
                  <Route path="/array-items-with-delay" element={<ArrayItemsWithDelay />} />
                </Routes>
              </Suspense>
            </div>
            <div className="mt-4">
              <CandidateCard />
            </div>
          </div>
        </div>

        <div className="w-full flex gap-4">
          <div className="w-[60%] bg-gray-200 p-4 mt-4">
            <ImageSlider images={projectImages} />
          </div>
          <div className="w-[40%] bg-gray-200 p-4 mt-4">
            <ToolsAndTechs />
          </div>
        </div>
      </div>

      <Footer />
    </BrowserRouter>
  )
}

export default App
