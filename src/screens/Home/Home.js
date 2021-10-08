import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import home from "../../public/image/tour1.webp";
import "./Home.css"
const Home = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className="homeImg">n
                <div className=" text">
                    <p>Travel Blog</p>
                    <h1>Going Places</h1>
                    <p>I haven’t been everywhere, but it’s on my list </p>
                </div>
            </div>
        </div>
    )
}

export default Home
