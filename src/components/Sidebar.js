import { Link } from "react-router-dom"
import './dashboard.scss';
import { useState, useRef } from "react";

function Sidebar({getWordFunc}){

    const [toggle, setToggle] = useState(false)
    const myRef = useRef(null)
   

    function handleClick(e) {
        getWordFunc(e.target.innerText)
        console.log(e.target.innerText)

        
    }

    function handleToggle() {
            if(toggle ){
                myRef.current.style = "transform: translateY(0%)"
            } else {
                myRef.current.style = "transform: translateY(-110%)"
            }
            setToggle(!toggle)

    }


    return (
        <>
            <section ref={myRef} className="sidebar">
                <Link className="logo-container" to="/">
                    <p className='text-logo'>SupplySmart</p>
                </Link>
                
                
                <div className="department-links">
                    <p className='departments'>Departments</p>
                    <Link to="/"
                    onClick={handleClick} >
                        <p >All</p>
                    </Link>
                    <Link onClick={handleClick}>
                        <p >Electric</p>
                    </Link>
                    <Link onClick={handleClick}>
                        <p>Plumbing</p>
                    </Link>
                    <Link onClick={handleClick}>
                        <p>Networking</p>
                    </Link>
                    <Link onClick={handleClick}>
                        <p>Electronics</p>
                    </Link>
                    <Link onClick={handleClick}>
                        <p>Hardware</p>
                    </Link>
                    <Link onClick={handleClick}>
                        <p>Tools</p>
                    </Link>

                </div>
                    <Link id="about" to="/about" >
                        <p>About</p>
                    </Link>

            </section>
                <div className="mobile-header">
                      <button onClick={handleToggle}>{toggle ? <span>&#9868;</span> : "x"}</button>
                    <h1>SupplySmart</h1>
                </div>
       
        </>
    )
}

export default Sidebar