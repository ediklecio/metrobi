import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header />

      <div className='container m-auto py-8'>
        <div className="flex gap-4">
          <div className="w-[30%]">
            <div className="bg-gray-200 p-4">
              About
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
          <div className="w-[70%] bg-gray-200 p-4 mt-4">
            Images
          </div>
          <div className="w-[30%] bg-gray-200 p-4 mt-4">
            About
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default App
