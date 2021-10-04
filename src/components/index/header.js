import PropTypes from "prop-types"
import React from "react"
import TopBar from "./top-bar"
import Menu from "../menu"

const Header = ({ location }) => (
    <div id="elementor-header" className="main-menu-wrapper">
        <div data-elementor-type="wp-post" data-elementor-id="2211" className="elementor elementor-2211"
             data-elementor-settings="[]">
            <div className="elementor-section-wrap">
                <section
                    className="elementor-section elementor-top-section elementor-element elementor-element-69e7328 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                    data-id="69e7328"
                    data-element_type="section"
                    data-settings='{"background_background":"classic","ashton_ext_is_background_parallax":"false","ashton_ext_is_background_on_scroll":"false"}'
                >
                    <div className="elementor-container elementor-column-gap-default">
                        <div
                            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-d13d156"
                            data-id="d13d156"
                            data-element_type="column"
                            data-settings='{"ashton_ext_link_sidemenu":"false","ashton_ext_link_fullmenu":"false","ashton_ext_is_sticky":"false","ashton_ext_is_scrollme":"false","ashton_ext_is_smoove":"false","ashton_ext_is_parallax_mouse":"false","ashton_ext_is_infinite":"false","ashton_ext_is_fadeout_animation":"false"}'
                        >
                            <div className="elementor-widget-wrap elementor-element-populated">
                                <div
                                    className="elementor-element elementor-element-f1cba29 elementor-icon-list--layout-inline elementor-widget__width-auto elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                                    data-id="f1cba29"
                                    data-element_type="widget"
                                    data-settings='{"ashton_ext_link_sidemenu":"false","ashton_ext_link_fullmenu":"false","ashton_ext_is_sticky":"false","ashton_ext_is_scrollme":"false","ashton_ext_is_smoove":"false","ashton_ext_is_parallax_mouse":"false","ashton_ext_is_infinite":"false","ashton_ext_is_fadeout_animation":"false"}'
                                    data-widget_type="icon-list.default"
                                >
                                    <div className="elementor-widget-container">
                                        <ul className="elementor-icon-list-items elementor-inline-items">
                                            <li className="elementor-icon-list-item elementor-inline-item">
                                                <a href="tel:1-885-245-45635">
                                                        <span className="elementor-icon-list-icon"> <i
                                                            aria-hidden="true"
                                                            className="fas fa-mobile-alt"></i> </span>
                                                    <span className="elementor-icon-list-text">1-885-245-45635</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div
                                    className="elementor-element elementor-element-32aec62 elementor-icon-list--layout-inline elementor-widget__width-auto elementor-hidden-phone elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                                    data-id="32aec62"
                                    data-element_type="widget"
                                    data-settings='{"ashton_ext_link_sidemenu":"false","ashton_ext_link_fullmenu":"false","ashton_ext_is_sticky":"false","ashton_ext_is_scrollme":"false","ashton_ext_is_smoove":"false","ashton_ext_is_parallax_mouse":"false","ashton_ext_is_infinite":"false","ashton_ext_is_fadeout_animation":"false"}'
                                    data-widget_type="icon-list.default"
                                >
                                    <div className="elementor-widget-container">
                                        <ul className="elementor-icon-list-items elementor-inline-items">
                                            <li className="elementor-icon-list-item elementor-inline-item">
                                                    <span className="elementor-icon-list-icon"> <i aria-hidden="true"
                                                                                                   className="far fa-clock"></i> </span>
                                                <span className="elementor-icon-list-text">Mon - Fri 09:00-17:00</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-69da275"
                            data-id="69da275"
                            data-element_type="column"
                            data-settings='{"ashton_ext_link_sidemenu":"false","ashton_ext_link_fullmenu":"false","ashton_ext_is_sticky":"false","ashton_ext_is_scrollme":"false","ashton_ext_is_smoove":"false","ashton_ext_is_parallax_mouse":"false","ashton_ext_is_infinite":"false","ashton_ext_is_fadeout_animation":"false"}'
                        >
                            <div className="elementor-widget-wrap elementor-element-populated">
                                <div
                                    className="elementor-element elementor-element-998fff8 elementor-icon-list--layout-inline elementor-widget__width-auto elementor-hidden-phone elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                                    data-id="998fff8"
                                    data-element_type="widget"
                                    data-settings='{"ashton_ext_link_sidemenu":"false","ashton_ext_link_fullmenu":"false","ashton_ext_is_sticky":"false","ashton_ext_is_scrollme":"false","ashton_ext_is_smoove":"false","ashton_ext_is_parallax_mouse":"false","ashton_ext_is_infinite":"false","ashton_ext_is_fadeout_animation":"false"}'
                                    data-widget_type="icon-list.default"
                                >
                                    <div className="elementor-widget-container">
                                        <ul className="elementor-icon-list-items elementor-inline-items">
                                            <li className="elementor-icon-list-item elementor-inline-item">
                                                <a href="mailto:contact@ashton.com">
                                                        <span className="elementor-icon-list-icon"> <i
                                                            aria-hidden="true"
                                                            className="far fa-envelope-open"></i> </span>
                                                    <span className="elementor-icon-list-text">contact@ashton.com</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div
                                    className="elementor-element elementor-element-6597792 elementor-icon-list--layout-inline elementor-align-right elementor-mobile-align-left elementor-widget__width-auto elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                                    data-id="6597792"
                                    data-element_type="widget"
                                    data-settings='{"ashton_ext_link_sidemenu":"false","ashton_ext_link_fullmenu":"false","ashton_ext_is_sticky":"false","ashton_ext_is_scrollme":"false","ashton_ext_is_smoove":"false","ashton_ext_is_parallax_mouse":"false","ashton_ext_is_infinite":"false","ashton_ext_is_fadeout_animation":"false"}'
                                    data-widget_type="icon-list.default"
                                >
                                    <div className="elementor-widget-container">
                                        <ul className="elementor-icon-list-items elementor-inline-items">
                                            <li className="elementor-icon-list-item elementor-inline-item">
                                                <a href="#"> <span className="elementor-icon-list-text">FR</span> </a>
                                            </li>
                                            <li className="elementor-icon-list-item elementor-inline-item">
                                                <a href="#"> <span className="elementor-icon-list-text">EN</span> </a>
                                            </li>
                                            <li className="elementor-icon-list-item elementor-inline-item">
                                                <a href="#"> <span className="elementor-icon-list-text">DE</span> </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    className="elementor-section elementor-top-section elementor-element elementor-element-aa4e655 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                    data-id="aa4e655"
                    data-element_type="section"
                    data-settings='{"background_background":"classic","ashton_ext_is_background_parallax":"false","ashton_ext_is_background_on_scroll":"false"}'
                >
                    <div className="elementor-container elementor-column-gap-default">
                        <div
                            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-eb01c2b"
                            data-id="eb01c2b"
                            data-element_type="column"
                            data-settings='{"ashton_ext_link_sidemenu":"false","ashton_ext_link_fullmenu":"false","ashton_ext_is_sticky":"false","ashton_ext_is_scrollme":"false","ashton_ext_is_smoove":"false","ashton_ext_is_parallax_mouse":"false","ashton_ext_is_infinite":"false","ashton_ext_is_fadeout_animation":"false"}'
                        >
                            <div className="elementor-widget-wrap elementor-element-populated">
                                <div
                                    className="elementor-element elementor-element-4445580 elementor-widget elementor-widget-image"
                                    data-id="4445580"
                                    data-element_type="widget"
                                    data-settings='{"ashton_image_is_animation":"false","ashton_ext_link_sidemenu":"false","ashton_ext_link_fullmenu":"false","ashton_ext_is_sticky":"false","ashton_ext_is_scrollme":"false","ashton_ext_is_smoove":"false","ashton_ext_is_parallax_mouse":"false","ashton_ext_is_infinite":"false","ashton_ext_is_fadeout_animation":"false"}'
                                    data-widget_type="image.default"
                                >
                                    <div className="elementor-widget-container">
                                        <a href="index.html">
                                            <img width="224" height="90" src="upload/logo@2x_white.png"
                                                 className="attachment-large size-large" alt="" loading="lazy"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-26a60d1"
                            data-id="26a60d1"
                            data-element_type="column"
                            data-settings='{"ashton_ext_link_sidemenu":"false","ashton_ext_link_fullmenu":"false","ashton_ext_is_sticky":"false","ashton_ext_is_scrollme":"false","ashton_ext_is_smoove":"false","ashton_ext_is_parallax_mouse":"false","ashton_ext_is_infinite":"false","ashton_ext_is_fadeout_animation":"false"}'
                        >
                            <div className="elementor-widget-wrap elementor-element-populated">
                                <div
                                    className="elementor-element elementor-element-083ee2d elementor-widget__width-auto elementor-hidden-tablet elementor-hidden-phone elementor-widget elementor-widget-ashton-navigation-menu"
                                    data-id="083ee2d"
                                    data-element_type="widget"
                                    data-settings='{"ashton_ext_link_sidemenu":"false","ashton_ext_link_fullmenu":"false","ashton_ext_is_sticky":"false","ashton_ext_is_scrollme":"false","ashton_ext_is_smoove":"false","ashton_ext_is_parallax_mouse":"false","ashton_ext_is_infinite":"false","ashton_ext_is_fadeout_animation":"false"}'
                                    data-widget_type="ashton-navigation-menu.default"
                                >
                                    <div className="elementor-widget-container">
                                        <div className="themegoods-navigation-wrapper menu_style2">
                                            <div className="menu-main-menu-container">
                                                <ul id="nav_menu15" className="nav">
                                                    <li className="menu-item menu-item-has-children arrow">
                                                        <a href="index.html">Home</a>
                                                        <ul className="sub-menu">
                                                            <li className="menu-item"><a href="index.html">Home 1</a>
                                                            </li>
                                                            <li className="menu-item"><a href="home-2.html">Home 2</a>
                                                            </li>
                                                            <li className="menu-item"><a href="home-3.html">Home 3</a>
                                                            </li>
                                                            <li className="menu-item"><a href="home-4.html">Home 4</a>
                                                            </li>
                                                            <li className="menu-item"><a href="home-5.html">Home 5</a>
                                                            </li>
                                                            <li className="menu-item"><a href="home-6.html">Home 6</a>
                                                            </li>
                                                            <li className="menu-item"><a href="home-7.html">Home 7</a>
                                                            </li>
                                                            <li className="menu-item"><a href="home-8.html">Home 8</a>
                                                            </li>
                                                            <li className="menu-item"><a href="home-9.html">Home 9</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item menu-item-has-children arrow">
                                                        <a href="#">Pages</a>
                                                        <ul className="sub-menu">
                                                            <li className="menu-item"><a href="about-us-1.html">About Us
                                                                1</a></li>
                                                            <li className="menu-item"><a href="about-us-2.html">About Us
                                                                2</a></li>
                                                            <li className="menu-item"><a href="about-us-3.html">About Us
                                                                3</a></li>
                                                            <li className="menu-item"><a href="contact-us-1.html">Contact
                                                                Us 1</a></li>
                                                            <li className="menu-item"><a href="contact-us-2.html">Contact
                                                                Us 2</a></li>
                                                            <li className="menu-item"><a href="contact-us-3.html">Contact
                                                                Us 3</a></li>
                                                            <li className="menu-item"><a href="gallery.html">Gallery</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item menu-item-has-children arrow">
                                                        <a href="#">Practice Areas</a>
                                                        <ul className="sub-menu">
                                                            <li className="menu-item"><a href="practice-areas-1.html">Practice
                                                                Areas 1</a></li>
                                                            <li className="menu-item"><a href="practice-areas-2.html">Practice
                                                                Areas 2</a></li>
                                                            <li className="menu-item"><a href="practice-areas-3.html">Practice
                                                                Areas 3</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item menu-item-has-children arrow">
                                                        <a href="#">Attorney</a>
                                                        <ul className="sub-menu">
                                                            <li className="menu-item"><a
                                                                href="attorney.html">Attorney</a></li>
                                                            <li className="menu-item"><a href="single-attorney.html">Single
                                                                Attorney</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item menu-item-has-children arrow">
                                                        <a href="#">Case Studies</a>
                                                        <ul className="sub-menu">
                                                            <li className="menu-item"><a href="portfolio-classic.html">Portfolio
                                                                Classic</a></li>
                                                            <li className="menu-item"><a href="portfolio-grid.html">Portfolio
                                                                Grid</a></li>
                                                            <li className="menu-item">
                                                                <a href="portfolio-grid-overlay.html">Portfolio Grid
                                                                    Overlay</a>
                                                            </li>
                                                            <li className="menu-item"><a
                                                                href="portfolio-3d-overlay.html">Portfolio 3D
                                                                Overlay</a></li>
                                                            <li className="menu-item"><a href="portfolio-contain.html">Portfolio
                                                                Contain</a></li>
                                                            <li className="menu-item"><a href="portfolio-carousel.html">Portfolio
                                                                Carousel</a></li>
                                                            <li className="menu-item menu-item-has-children arrow">
                                                                <a href="#">Columns</a>
                                                                <ul className="sub-menu">
                                                                    <li className="menu-item">
                                                                        <a href="portfolio-2-columns.html">Portfolio
                                                                            2 Columns</a>
                                                                    </li>
                                                                    <li className="menu-item"><a
                                                                        href="portfolio-grid.html">Portfolio 3
                                                                        Columns</a></li>
                                                                    <li className="menu-item">
                                                                        <a href="portfolio-4-columns.html">Portfolio
                                                                            4 Columns</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item menu-item-has-children arrow">
                                                        <a href="#">Blog</a>
                                                        <ul className="sub-menu">
                                                            <li className="menu-item"><a href="blog-grid.html">Blog
                                                                Grid</a></li>
                                                            <li className="menu-item"><a href="blog-grid-overlay.html">Blog
                                                                Grid Overlay</a></li>
                                                            <li className="menu-item"><a href="blog-metro.html">Blog
                                                                Metro</a></li>
                                                            <li className="menu-item"><a href="blog-metro-overlay.html">Blog
                                                                Metro Overlay</a></li>
                                                            <li className="menu-item"><a href="blog-classic.html">Blog
                                                                Classic</a></li>
                                                            <li className="menu-item"><a href="blog-list.html">Blog
                                                                List</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="elementor-element elementor-element-10c3c07 elementor-widget__width-auto elementor-hidden-phone elementor-widget elementor-widget-button"
                                    data-id="10c3c07"
                                    data-element_type="widget"
                                    data-settings='{"ashton_ext_link_sidemenu":"false","ashton_ext_link_fullmenu":"false","ashton_ext_is_sticky":"false","ashton_ext_is_scrollme":"false","ashton_ext_is_smoove":"false","ashton_ext_is_parallax_mouse":"false","ashton_ext_is_infinite":"false","ashton_ext_is_fadeout_animation":"false"}'
                                    data-widget_type="button.default"
                                >
                                    <div className="elementor-widget-container">
                                        <div className="elementor-button-wrapper">
                                            <a href="tel:1-245-45635"
                                               className="elementor-button-link elementor-button elementor-size-sm"
                                               role="button">
                                                        <span className="elementor-button-content-wrapper">
                                                            <span className="elementor-button-text">(1)245-45635</span>
                                                        </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="elementor-element elementor-element-23da5c7 elementor-widget__width-auto elementor-hidden-desktop elementor-view-default elementor-widget elementor-widget-icon"
                                    data-id="23da5c7"
                                    data-element_type="widget"
                                    data-settings='{"ashton_ext_link_sidemenu":"true","ashton_ext_link_fullmenu":"false","ashton_ext_is_sticky":"false","ashton_ext_is_scrollme":"false","ashton_ext_is_smoove":"false","ashton_ext_is_parallax_mouse":"false","ashton_ext_is_infinite":"false","ashton_ext_is_fadeout_animation":"false"}'
                                    data-widget_type="icon.default"
                                >
                                    <div className="elementor-widget-container">
                                        <div className="elementor-icon-wrapper">
                                            <a className="elementor-icon" href="#"> <i aria-hidden="true"
                                                                                       className="fas fa-bars"></i> </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>

)

Header.propTypes = {
    siteTitle: PropTypes.string
}

Header.defaultProps = {
    siteTitle: ``
}

export default Header
