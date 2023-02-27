import { Link } from "react-router-dom"
import './dashboard.scss';

function Sidebar(params){


    return (
        <>
            <section className="sidebar">
                <p className='text-logo'>SupplySmart</p>
                
                <div className="department-links">
                    <p className='departments'>Departments</p>
                    <Link to='/'>
                        <p>All</p>
                    </Link>
                    <Link>
                        <p>Electrical</p>
                    </Link>
                    <Link>
                        <p>Plumbing</p>
                    </Link>
                    <Link>
                        <p>Networking</p>
                    </Link>
                    <Link>
                        <p>Electronics</p>
                    </Link>
                    <Link>
                        <p>Hardware</p>
                    </Link>
                    <Link>
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