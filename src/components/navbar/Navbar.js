import React from "react";
import "./Navbar.css";
import { AiOutlineSearch } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from '../../public/image/mainLogo.png'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const Navbar = () => {
  // var rightPart = document.querySelector('.rightPart');

  // var MaxWidth991 = window.matchMedia("(max-width: 991px)");

  // function match() {
  //     // MaxWidth991.matches ? classList.add('col-10') : classList.remove('full-page');
  //     if (MaxWidth991.matches) {
  //         rightPart.classList.remove('justify-content-end')
  //     }

  // }

  // MaxWidth991.addEventListener("resize", match);
  // match();
  return (
    <div className="nav">
      {/* nav class */}
      <div className="p-4 container-md">
        <div className="row" id="row">
          <div className="col-md-12 col-lg-3 d-flex leftPart">
            <div className="row flex-nowrap">
              <div>
                <img src={Logo} alt="Madhavpur Logo" style={{
                     width:'70px',
                    height:'auto',
                   
                }} />
              </div>
              {/* <div className="col-6" id="col-6">
                                <input type="text" className="search" placeholder="Search.." />
                            </div>
                            <div className="col-6" id="col-2">
                                <AiOutlineSearch />
                            </div> */}
            </div>
          </div>

          <div className="col-md-12 col-lg-6 middlePart">
            {/* <div className="nav__middlepart-linksdiv"> */}
            <ul className="row middlePart__row">
              <li className="col-2 list-unstyled">
                <Link className="text-decoration-none link" to="/home" exact>
                  Home
                </Link>
              </li>
              <li className="col-2 list-unstyled">
                <Link className="text-decoration-none link" to="/about" exact>
                  About
                </Link>
              </li>
              <li className="col-2 list-unstyled">
                <Link className="text-decoration-none link" to="/travel" exact>
                  Travel
                </Link>
              </li>
              <li className="col-2 list-unstyled">
                <Link className="text-decoration-none link" to="/eat" exact>
                  Eat
                </Link>
              </li>
              <li className="col-2 list-unstyled">
                <Link className="text-decoration-none link" to="/relax" exact>
                  Relax
                </Link>
              </li>
              <li className="col-2 list-unstyled">
                <Link className="text-decoration-none link" to="/videos" exact>
                  Videos
                </Link>
              </li>
            </ul>
            {/* </div> */}
          </div>

          <div className="col-md-12 col-lg-3 d-flex justify-content-end rightPart">
            <div className="row">
              <div className="col-md-10 start">
                <ul className="row flex-nowrap">
                  <li className="col-3 list-unstyled">
                    <a
                      className="text-decoration-none"
                      href="https://www.facebook.com"
                    >
                      <GrFacebookOption />
                    </a>
                  </li>
                  <li className="col-3 list-unstyled">
                    <a
                      className="text-decoration-none"
                      href="https://www.instagram.com/"
                    >
                      <AiOutlineInstagram />
                    </a>
                  </li>
                  <li className="col-3 list-unstyled">
                    <a
                      className="text-decoration-none"
                      href="https://www.pinterest.com/"
                    >
                      <FaPinterestP />
                    </a>
                  </li>
                  <li className="col-3 list-unstyled">
                    <a
                      className="text-decoration-none"
                      href="https://www.twitter.com"
                    >
                      <IoLogoTwitter />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-md-2 show-ham">
                <GiHamburgerMenu />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end of nav class */}
    </div>
  );
};

export default Navbar;
