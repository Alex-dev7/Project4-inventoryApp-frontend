import { Link } from "react-router-dom"
import './dashboard.scss';


function Sidebar({getWordFunc}){

    function handleClick(e) {
        getWordFunc(e.target.innerText)
        console.log(e.target.innerText)
    }

    return (
        <>
            <section className="sidebar">
                <p className='text-logo'>SupplySmart</p>
                
                <div className="department-links">
                    <p className='departments'>Departments</p>
                    <Link onClick={handleClick}>
                        <p>All</p>
                    </Link>
                    <Link onClick={handleClick}>
                        <p>Electric</p>
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
                    <Link id="about" to="/about">
                        <p>About</p>
                    </Link>

            </section>
       
        </>
    )
}

export default Sidebar