import React from 'react'
import ImageSection from '../../components/imageSection/ImageSection';
import Navbar from '../../components/navbar/Navbar'
import SocialIcon from '../../components/SocialIcon/SocialIcon';
import Footer from '../../components/footer/Footer';
import girl from "../../public/image/girl1.webp";
import "./About.css";
const About = () => {
    return (
        <>
            <div className="position-adujust">
                <Navbar />
            </div>
            <div className="container-fuild">
                {/* <div></div> */}
                <div style={{ padding: "59px" }}></div>
                <div className="container-md">
                    <div className="jumbotron">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="heading">About Me</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <p className="addPadding">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                                <p className="addPadding">This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide.</p>
                                <p className="addPadding">Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.</p>
                                <p className="addPadding">Contact Me:</p>
                                <a className="addPadding" href="Info@mysite.com">Info@mysite.com</a>
                            </div>
                            <div className="col-6 girl-image">
                                <img src={girl} alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div>
                <SocialIcon />
                <ImageSection />
                <Footer />
            </div>
        </>

    )
}

export default About
