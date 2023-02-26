import './App.scss'
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Preview from './components/Preview';
function App() {
  return (
    <div className="App">
        <Sidebar/>
        <div className='content-wrapper'>
          <Preview />
          <Outlet />
        </div>

    </div>
  );
}

export default App;
