import './App.css'

function App() {

  return (
    <>
      <div className='header bg-gray-100 text-gray-500'>
        <div className="container flex">
          <h1 className='logo'> <img
            src="./src/assets/logo.webp"
            alt="Imagem Responsiva"
            className="w-full h-auto"
          /></h1>
          <span>|</span>
          <span>Tech Challenger</span>
        </div>
      </div>

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

      <div className='footer bg-primary text-center text-white'>
        &copy; 2025 - Ediklecio
      </div>
    </>
  )
}

export default App
