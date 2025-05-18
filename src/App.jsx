import './App.css'
import Header from "./Components/Header"
import Main from './Components/Main'
function App() {

  return (
    <>
      <div className='max-w-[100dvw] h-[100dvh] flex flex-col'>
        <Header className="fixed" />
        <Main />
        <Main />
      </div>
    </>
  )
}

export default App
