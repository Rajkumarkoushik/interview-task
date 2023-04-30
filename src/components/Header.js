import React, {useState} from 'react';
import { Link } from 'react-router-dom';


function Header() {

    const [showHam, setShowHam] = useState(false);

    return (
        <>
            <header className='header py-3'>
                {/* Navigation section starts. */}
                <nav className="container navigation d-flex align-items-center justify-content-between">
                    <div className="nav-logo">
                      <Link to="/"><img src=".\assets\fenix-insight-logo-white.png" alt="" /></Link>
                    </div>
                        <div className='navigation-tabs'>
                        <ul className="nav-links d-flex gap-25">
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="contact">Contact Us</Link></li>
                            <li><Link to="Pricing">Pricing Packages</Link></li>
                            <li><Link to="/Started">Get Started Now</Link></li>
                            <li><Link to="/Login">Login</Link></li>
                        </ul>
                    </div>
                    {showHam && <div className='nav-hamburger'>
                        <ul className="nav-links d-flex gap-25" style={{transform : showHam? "scale(1)" : "scale(0)"}}>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="contact">Contact Us</Link></li>
                            <li><Link to="Pricing">Pricing Packages</Link></li>
                            <li><Link to="/Started">Get Started Now</Link></li>
                            <li><Link to="/Login">Login</Link></li>
                        </ul>
                        </div>}
                    <div className='nav-hamburger' onClick={() => setShowHam(!showHam)}>
                        <i className="fa-solid fa-bars hamburger" ></i>
                    </div>
                </nav>
                {/* Navigation section ends. */}
                {/* head section starts. */}
                <section className="head-section py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <h1 className='text-white'>Artificial Intelligence. <br /> Real Insights.</h1>
                                <p className='text-white py-3'>Fenix Insight is an advanced insight engine purpose built for EOD operations, training and risk management. It incorporates an artificial intelligence system, scanning millions of online resources, giving an accurate global map of explosive ordnance risk.</p>
                                <button className='btn'>Get Started Now</button>
                                <button className='btn-login'>Login</button>
                            </div>
                            <div className="col-lg-6 head-image">
                                <img src=".\assets\fenix-insight-screen-section-a.png" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                {/* head section ends. */}
            </header>
            <section className="side-sticky border-rounded p-2">
                <h6 className='mb-0'><Link to="/">Free 7Day Trail <br /> Get Start Now</Link></h6>
            </section>
        </>
    );
};

export default Header