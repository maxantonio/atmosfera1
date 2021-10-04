import PropTypes from "prop-types"
import React, {useContext, useState} from "react"
// import {Link} from "gatsby"
// import CustomLink from "./link"
import LangContext from "../context/LangContext"

const Mobile_Menu = (props) => {
    const {switchLang, lang} = useContext(LangContext)
    const [data, setData] = useState({})
    if (lang === "es") {
        import ("../messages/es")
            .then((msg) => {
                setData(msg.default)
            })
    } else {
        import ("../messages/en")
            .then((msg) => {
                setData(msg.default)
            })
    }
    return (
        <>
            <a id="btn-close-mobile-menu" href="#"/>

            <div className="mobile-menu-wrapper">
                <div className="mobile-menu-content">
                    <div className="menu-main-menu-container">
                        <ul id="mobile_main_menu" className="mobile-main-nav">
                            <li className="menu-item current-menu-item current_page_item menu-item-home menu-item-has-children">
                                <a href="" aria-current="page">Home</a>
                                <ul className="sub-menu">
                                    <li className="menu-item"><a href="index.html">Home 1</a></li>
                                    <li className="menu-item"><a href="home-2.html">Home 2</a></li>
                                    <li className="menu-item"><a href="home-3.html">Home 3</a></li>
                                    <li className="menu-item"><a href="home-4.html">Home 4</a></li>
                                    <li className="menu-item"><a href="home-5.html">Home 5</a></li>
                                    <li className="menu-item"><a href="home-6.html">Home 6</a></li>
                                    <li className="menu-item"><a href="home-7.html">Home 7</a></li>
                                    <li className="menu-item"><a href="home-8.html">Home 8</a></li>
                                    <li className="menu-item"><a href="home-9.html">Home 9</a></li>
                                </ul>
                            </li>
                            <li className="menu-item menu-item-has-children menu-item-41">
                                <a href="#">Pages</a>
                                <ul className="sub-menu">
                                    <li className="menu-item"><a href="about-us-1.html">About Us 1</a></li>
                                    <li className="menu-item"><a href="about-us-2.html">About Us 2</a></li>
                                    <li className="menu-item"><a href="about-us-3.html">About Us 3</a></li>
                                    <li className="menu-item"><a href="contact-us-1.html">Contact Us 1</a></li>
                                    <li className="menu-item"><a href="contact-us-2.html">Contact Us 2</a></li>
                                    <li className="menu-item"><a href="contact-us-3.html">Contact Us 3</a></li>
                                    <li className="menu-item"><a href="gallery.html">Gallery</a></li>
                                </ul>
                            </li>
                            <li className="menu-item menu-item-has-children menu-item-42">
                                <a href="#">Practice Areas</a>
                                <ul className="sub-menu">
                                    <li className="menu-item"><a href="practice-areas-1.html">Practice Areas
                                        1</a></li>
                                    <li className="menu-item"><a href="practice-areas-2.html">Practice Areas
                                        2</a></li>
                                    <li className="menu-item"><a href="practice-areas-3.html">Practice Areas
                                        3</a></li>
                                </ul>
                            </li>
                            <li className="menu-item menu-item-has-children menu-item-43">
                                <a href="#">Attorney</a>
                                <ul className="sub-menu">
                                    <li className="menu-item"><a href="attorney.html">Attorney</a></li>
                                    <li className="menu-item"><a href="single-attorney.html">Single Attorney</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item menu-item-has-children menu-item-44">
                                <a href="#">Case Studies</a>
                                <ul className="sub-menu">
                                    <li className="menu-item"><a href="portfolio-classic.html">Portfolio
                                        Classic</a></li>
                                    <li className="menu-item"><a href="portfolio-grid.html">Portfolio Grid</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="portfolio-grid-overlay.html">Portfolio Grid Overlay</a>
                                    </li>
                                    <li className="menu-item"><a href="portfolio-3d-overlay.html">Portfolio 3D
                                        Overlay</a></li>
                                    <li className="menu-item"><a href="portfolio-contain.html">Portfolio
                                        Contain</a></li>
                                    <li className="menu-item"><a href="portfolio-carousel.html">Portfolio
                                        Carousel</a></li>
                                    <li className="menu-item menu-item-has-children">
                                        <a href="#">Columns</a>
                                        <ul className="sub-menu">
                                            <li className="menu-item">
                                                <a href="portfolio-2-columns.html">Portfolio 2 Columns</a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="portfolio-grid.html">Portfolio 3 Columns</a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="portfolio-4-columns.html">Portfolio 4 Columns</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item menu-item-has-children menu-item-45">
                                <a href="#">Blog</a>
                                <ul className="sub-menu">
                                    <li className="menu-item"><a href="blog-grid.html">Blog Grid</a></li>
                                    <li className="menu-item"><a href="blog-grid-overlay.html">Blog Grid
                                        Overlay</a></li>
                                    <li className="menu-item"><a href="blog-metro.html">Blog Metro</a></li>
                                    <li className="menu-item"><a href="blog-metro-overlay.html">Blog Metro
                                        Overlay</a></li>
                                    <li className="menu-item"><a href="blog-classic.html">Blog Classic</a></li>
                                    <li className="menu-item menu-item-6137"><a href="blog-list.html">Blog
                                        List</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

Mobile_Menu.propTypes = {
    siteTitle: PropTypes.string
}

Mobile_Menu.defaultProps = {
    siteTitle: ``
}

export default Mobile_Menu
