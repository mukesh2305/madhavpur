import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import tour2 from "../../public/image/tour2.webp";
import tour3 from "../../public/image/tour3.webp";
import tour4 from "../../public/image/tour4.webp";
import "./Home.css"
const Home = () => {
    return (
        <div className="container-fulid">
            <div>
                <Navbar style={{ position: "fixed" }} />
            </div>
            <div className="homeImg">n
                <div className=" text">
                    <p>Travel Blog</p>
                    <h1>Going Places</h1>
                    <p>I haven’t been everywhere, but it’s on my list </p>
                </div>
            </div>

            <div className="py-4 container-md middleSection">
                <div className="row">
                    <div className="text-center">
                        <p>
                            I'm a paragraph. Click here to add your own text and edit me. It’s easy. <br />
                            Just click “Edit Text” or double click me to add your own content and make changes to the font.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container-md ">
                <div className="row travel-img">
                    <div className="col-4 ml-5 image1">
                        <a href="/travel">Travel</a>
                    </div>
                    <div className="col-4 image2">
                        <a href="/travel">Eat</a>
                    </div>
                    <div className="col-4 image3" >
                        <a href="/travel">Relax</a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home
