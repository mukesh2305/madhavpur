import React from 'react'
import beach1 from '../../public/image/beach1.webp';
import beach2 from '../../public/image/beach2.webp';
import beach3 from '../../public/image/beach3.webp';
import view1 from '../../public/image/view1.webp';
import view2 from '../../public/image/view2.webp';
import './imageSection.css'
const ImageSection = () => {
    return (
        <div className="container-fuild ">
            <div className="row row-cols-5 gx-0 image-adjust">
                <div className="col">
                    <img src={beach1} alt="" />
                </div>
                <div className="col">
                    <img src={beach2} alt="" />
                </div>
                <div className="col">
                    <img src={beach3} alt="" />

                </div>
                <div className="col">
                    <img src={view1} alt="" />

                </div>
                <div className="col">
                    <img src={view2} alt="" />

                </div>
            </div>
        </div>
    )
}

export default ImageSection
