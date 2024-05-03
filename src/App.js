import './App.scss'
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import { useState } from 'react';



let dept = ""

export function Props(){
  return dept
}



function App() {

  const [getText, setText] = useState("")
  dept = getText
  
  function getWordFunc(word){
    setText(word)
  }

  // const items = useLoaderData()

  return (
    <div className="App">
        <Sidebar getWordFunc={getWordFunc}/>
        <div className='content-wrapper'>
          <Outlet/>
        </div>

    </div>
  );
}

export default App;
