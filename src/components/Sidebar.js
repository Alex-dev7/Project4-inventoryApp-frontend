import { Link } from "react-router-dom"
import './dashboard.scss';
import { useState } from "react";

function Sidebar({getWordFunc}){

    const [toggle, setToggle] = useState(false)
   
   

    function handleClick(e) {
        getWordFunc(e.target.innerText)
        setToggle(false)
    }

    function handleToggle() {
        setToggle(!toggle)
    }


    const sidebarStyle = {
        transform: toggle ? "translateY(0%)" : "translateY(-110%)"
    }

    return (
        <>
            <section style={window.innerWidth < 800 ? sidebarStyle : null}  className="sidebar">
                <Link className="logo-container" to="/">
                    <p className='text-logo'>SupplySmart</p>
                </Link>
                
                
                <div className="department-links">
                    <p className='departments'>Departments</p>
                    <Link to="/"
                    onClick={handleClick} >
                        <p >All</p>
                    </Link>
                    <Link to="/" onClick={handleClick}>
                        <p >Electric</p>
                    </Link>
                    <Link to="/" onClick={handleClick}>
                        <p>Plumbing</p>
                    </Link>
                    <Link to="/" onClick={handleClick}>
                        <p>Networking</p>
                    </Link>
                    <Link to="/" onClick={handleClick}>
                        <p>Electronics</p>
                    </Link>
                    <Link to="/" onClick={handleClick}>
                        <p>Hardware</p>
                    </Link>
                    <Link to="/" onClick={handleClick}>
                        <p>Tools</p>
                    </Link>

                </div>
                    <Link id="about" to="/about" onClick={() => setToggle(false)}>
                        <p>About</p>
                    </Link>

            </section>
                <div className="mobile-header">
                      <button onClick={handleToggle}>{toggle ? "x" : <span>&#9868;</span> }</button>
                    <h1>SupplySmart</h1>
                </div>
       
        </>
    )
}

export default Sidebar


