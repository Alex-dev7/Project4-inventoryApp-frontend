import './App.scss'
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Preview from './components/Preview';
import { useState } from 'react';

// console.log(Outlet)
let dept = ""

export function Props(){
  return dept
}

function App() {

  const [filterItems, setFilterItems] = useState("")
  dept = filterItems
  console.log(dept)

  function getWordFunc(word){
    setFilterItems(word)
  }

  return (
    <div className="App">
        <Sidebar getWordFunc={getWordFunc}/>
        <div className='content-wrapper'>
          <Preview />
          
          <Outlet/>
        </div>

    </div>
  );
}

export default App;
