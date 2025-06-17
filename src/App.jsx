import './App.css';
import Header from "./Components/Header";
import Main from './Components/Main';

function App() {
  return (
    <div className="w-screen min-h-screen bg-[#0a0a0a] text-white font-sans">
      <Header />
      <div className="pt-20 px-4">
        <Main />
      </div>
    </div>
  );
}

export default App;
