import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavBar() {
    return (
        <div className='w-100 d-flex justify-content-center position-sticky'>
            <nav className='py-3 fw-bold w-75' style={{ backgroundColor: "transparent", position: "absolute" }}>
                <ul className='m-0 p-0 d-flex justify-content-evenly ' style={{ backgroundColor: "transparent" }}>
                    <li style={{ listStyle: "none" }}><a style={{ textDecoration: "none", color: "#073C44" }} href="/">Home</a></li>
                    <li style={{ listStyle: "none" }}><a style={{ textDecoration: "none", color: "#073C44" }} href="/">Push</a></li>
                    <li style={{ listStyle: "none" }}><a style={{ textDecoration: "none", color: "#073C44" }} href="/">Pull</a></li>
                    <li style={{ listStyle: "none" }}><a style={{ textDecoration: "none", color: "#073C44" }} href="/">Leg</a></li>
                </ul>
            </nav>
        </div>
    )
}
