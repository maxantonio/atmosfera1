import React, {useContext, useState} from "react"
import {Link} from "gatsby";
import CustomLink from "./link"
import LangContext from "../context/LangContext";
import logo_blanco from "../../static/upload/logo@2x_white.png"
const Footer = () => {
    const {lang} = useContext(LangContext)
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
        <div id="footer-wrapper">
            <div data-elementor-type="wp-post" data-elementor-id="728" className="elementor elementor-728"
                 data-elementor-settings="[]">
                <div className="elementor-section-wrap">
                    <section
                        className="elementor-section elementor-top-section elementor-element elementor-element-8bb3d45 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                        data-id="8bb3d45"
                        data-element_type="section"
                        data-settings='{"background_background":"classic","ashton_ext_is_background_parallax":"false","ashton_ext_is_background_on_scroll":"false"}'
                    >
                        <div className="elementor-container elementor-column-gap-default">
                            <div
                                className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-83026bc"
                                data-id="83026bc"
                                data-element_type="column"
                                data-settings='{"ashton_ext_link_sidemenu":"false","ashton_ext_link_fullmenu":"false","ashton_ext_is_sticky":"false","ashton_ext_is_scrollme":"false","ashton_ext_is_smoove":"false","ashton_ext_is_parallax_mouse":"false","ashton_ext_is_infinite":"false","ashton_ext_is_fadeout_animation":"false"}'
                            >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                    <div
                                        className="elementor-element elementor-element-0825354 elementor-widget elementor-widget-image"
                                        data-id="0825354"
                                        data-element_type="widget"
                                        data-settings='{"ashton_image_is_animation":"false","ashton_ext_link_sidemenu":"false","ashton_ext_link_fullmenu":"false","ashton_ext_is_sticky":"false","ashton_ext_is_scrollme":"false","ashton_ext_is_smoove":"false","ashton_ext_is_parallax_mouse":"false","ashton_ext_is_infinite":"false","ashton_ext_is_fadeout_animation":"false"}'
                                        data-widget_type="image.default"
                                    >
                                        <div className="elementor-widget-container">
                                            <a href="index.html">
                                                <img width="224" height="90" src={logo_blanco}
                                                     className="attachment-large size-large" alt="" loading="lazy"/>
                                            </a>
                                        </div>
                                    </div>
                                    <div
                                        className="elementor-element elementor-element-b483959 elementor-widget elementor-widget-text-editor"
                                        data-id="b483959"
                                        data-element_type="widget"
                                        data-settings='{"ashton_ext_link_sidemenu":"false","ashton_ext_link_fullmenu":"false","ashton_ext_is_sticky":"false","ashton_ext_is_scrollme":"false","ashton_ext_is_smoove":"false","ashton_ext_is_parallax_mouse":"false","ashton_ext_is_infinite":"false","ashton_ext_is_fadeout_animation":"false"}'
                                        data-widget_type="text-editor.default"
                                    >
                                        <div className="elementor-widget-container">
                                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has
                                                roots in a piece of classical Latin literature from 45 BC, making it
                                                over 2000 years old.</p>
                                        </div>
                                    </div>
                                    <div
                                        className="elementor-element elementor-element-cfee521 elementor-widget__width-auto elementor-widget elementor-widget-button"
                                        data-id="cfee521"
                                        data-element_type="widget"
                                        data-settings='{"ashton_ext_link_sidemenu":"false","ashton_ext_link_fullmenu":"false","ashton_ext_is_sticky":"false","ashton_ext_is_scrollme":"false","ashton_ext_is_parallax_mouse":"false","ashton_ext_is_infinite":"false","ashton_ext_is_fadeout_animation":"false"}'
                                        data-widget_type="button.default"
                                    >
                                        <div className="elementor-widget-container">
                                            <div className="elementor-button-wrapper">
                                                <a href="about-us-1.html"
                                                   className="elementor-button-link elementor-button elementor-size-sm elementor-animation-float"
                                                   role="button">
                                                    <span className="elementor-button-content-wrapper">
                                                        <span className="elementor-button-text">About Us</span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-ed13e1c"
                                data-id="ed13e1c"
                                data-element_type="column"
                                data-settings='{"ashton_ext_link_sidemenu":"false","ashton_ext_link_fullmenu":"false","ashton_ext_is_sticky":"false","ashton_ext_is_scrollme":"false","ashton_ext_is_smoove":"false","ashton_ext_is_parallax_mouse":"false","ashton_ext_is_infinite":"false","ashton_ext_is_fadeout_animation":"false"}'
                            >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                    <section
                                        className="elementor-section elementor-inner-section elementor-element elementor-element-b83ab63 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                        data-id="b83ab63"
                                        data-element_type="section"
                                        data-settings='{"ashton_ext_is_background_parallax":"false","ashton_ext_is_background_on_scroll":"false"}'
                                    >
                                        <div className="elementor-container elementor-column-gap-default">
                                            <div
                                                className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-4350662"
                                                data-id="4350662"
                                                data-element_type="column"
                                                data-settings='{"ashton_ext_link_sidemenu":"false","ashton_ext_link_fullmenu":"false","ashton_ext_is_sticky":"false","ashton_ext_is_scrollme":"false","ashton_ext_is_smoove":"false","ashton_ext_is_parallax_mouse":"false","ashton_ext_is_infinite":"false","ashton_ext_is_fadeout_animation":"false"}'
                                            >
                                                <div className="elementor-widget-wrap elementor-element-populated">
                                                    <div
                                                        className="elementor-element elementor-element-3af7d70 elementor-icon-list--layout-inline elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                                                        data-id="3af7d70"
                                                        data-element_type="widget"
                                                        data-settings='{"ashton_ext_link_sidemenu":"false","ashton_ext_link_fullmenu":"false","ashton_ext_is_sticky":"false","ashton_ext_is_scrollme":"false","ashton_ext_is_smoove":"false","ashton_ext_is_parallax_mouse":"false","ashton_ext_is_infinite":"false","ashton_ext_is_fadeout_animation":"false"}'
                                                        data-widget_type="icon-list.default"
                                                    >
                                                        <div className="elementor-widget-container">
                                                            <ul className="elementor-icon-list-items elementor-inline-items">
                                                                <li className="elementor-icon-list-item elementor-inline-item">
                                                                    <a href="practice-areas-1.html"> <span
                                                                        className="elementor-icon-list-text">Practice Areas</span>
                                                                    </a>
                                                                </li>
                                                                <li className="elementor-icon-list-item elementor-inline-item">
                                                                    <a href="single-attorney.html"> <span
                                                                        className="elementor-icon-list-text">Attorney</span>
                                                                    </a>
                                                                </li>
                                                                <li className="elementor-icon-list-item elementor-inline-item">
                                                                    <a href="portfolio-classic.html"> <span
                                                                        className="elementor-icon-list-text">Case Studies</span>
                                                                    </a>
                                                                </li>
                                                                <li className="elementor-icon-list-item elementor-inline-item">
                                                                    <a href="blog-grid.html"> <span
                                                                        className="elementor-icon-list-text">Blog</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <section
                                        className="elementor-section elementor-inner-section elementor-element elementor-element-6fa82e7 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                        data-id="6fa82e7"
                                        data-element_type="section"
                                        data-settings='{"ashton_ext_is_background_parallax":"false","ashton_ext_is_background_on_scroll":"false"}'
                                    >
                                        <div className="elementor-container elementor-column-gap-default">
                                            <div
                                                className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-1daf55d"
                                                data-id="1daf55d"
                                                data-element_type="column"
                                                data-settings='{"ashton_ext_link_sidemenu":"false","ashton_ext_link_fullmenu":"false","ashton_ext_is_sticky":"false","ashton_ext_is_scrollme":"false","ashton_ext_is_smoove":"false","ashton_ext_is_parallax_mouse":"false","ashton_ext_is_infinite":"false","ashton_ext_is_fadeout_animation":"false"}'
                                            >
                                                <div className="elementor-widget-wrap elementor-element-populated">
                                                    <div
                                                        className="elementor-element elementor-element-b37768f elementor-widget elementor-widget-heading"
                                                        data-id="b37768f"
                                                        data-element_type="widget"
                                                        data-settings='{"ashton_ext_link_sidemenu":"false","ashton_ext_link_fullmenu":"false","ashton_ext_is_sticky":"false","ashton_ext_is_scrollme":"false","ashton_ext_is_smoove":"false","ashton_ext_is_parallax_mouse":"false","ashton_ext_is_infinite":"false","ashton_ext_is_fadeout_animation":"false"}'
                                                        data-widget_type="heading.default"
                                                    >
                                                        <div className="elementor-widget-container">
                                                            <h2 className="elementor-heading-title elementor-size-default">Resources</h2>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="elementor-element elementor-element-6c8a300 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                                                        data-id="6c8a300"
                                                        data-element_type="widget"
                                                        data-settings='{"ashton_ext_link_sidemenu":"false","ashton_ext_link_fullmenu":"false","ashton_ext_is_sticky":"false","ashton_ext_is_scrollme":"false","ashton_ext_is_smoove":"false","ashton_ext_is_parallax_mouse":"false","ashton_ext_is_infinite":"false","ashton_ext_is_fadeout_animation":"false"}'
                                                        data-widget_type="icon-list.default"
                                                    >
                                                        <div className="elementor-widget-container">
                                                            <ul className="elementor-icon-list-items">
                                                                <li className="elementor-icon-list-item">
                                                                    <a href="practice-areas-3.html"> <span
                                                                        className="elementor-icon-list-text">Mergers & Acquisitions</span>
                                                                    </a>
                                                                </li>
                                                                <li className="elementor-icon-list-item">
                                                                    <a href="practice-areas-3.html"> <span
                                                                        className="elementor-icon-list-text">Dispute Resolution</span>
                                                                    </a>
                                                                </li>
                                                                <li className="elementor-icon-list-item">
                                                                    <a href="practice-areas-3.html"> <span
                                                                        className="elementor-icon-list-text">Pensions & Benefits</span>
                                                                    </a>
                                                                </li>
                                                                <li className="elementor-icon-list-item">
                                                                    <a href="practice-areas-3.html"> <span
                                                                        className="elementor-icon-list-text">National Security Law</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-a1f45da"
                                                data-id="a1f45da"
                                                data-element_type="column"
                                                data-settings='{"ashton_ext_link_sidemenu":"false","ashton_ext_link_fullmenu":"false","ashton_ext_is_sticky":"false","ashton_ext_is_scrollme":"false","ashton_ext_is_smoove":"false","ashton_ext_is_parallax_mouse":"false","ashton_ext_is_infinite":"false","ashton_ext_is_fadeout_animation":"false"}'
                                            >
                                                <div className="elementor-widget-wrap elementor-element-populated">
                                                    <div
                                                        className="elementor-element elementor-element-1f1bacf elementor-widget elementor-widget-heading"
                                                        data-id="1f1bacf"
                                                        data-element_type="widget"
                                                        data-settings='{"ashton_ext_link_sidemenu":"false","ashton_ext_link_fullmenu":"false","ashton_ext_is_sticky":"false","ashton_ext_is_scrollme":"false","ashton_ext_is_smoove":"false","ashton_ext_is_parallax_mouse":"false","ashton_ext_is_infinite":"false","ashton_ext_is_fadeout_animation":"false"}'
                                                        data-widget_type="heading.default"
                                                    >
                                                        <div className="elementor-widget-container">
                                                            <h2 className="elementor-heading-title elementor-size-default">Other
                                                                Links</h2>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="elementor-element elementor-element-53310ac elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                                                        data-id="53310ac"
                                                        data-element_type="widget"
                                                        data-settings='{"ashton_ext_link_sidemenu":"false","ashton_ext_link_fullmenu":"false","ashton_ext_is_sticky":"false","ashton_ext_is_scrollme":"false","ashton_ext_is_smoove":"false","ashton_ext_is_parallax_mouse":"false","ashton_ext_is_infinite":"false","ashton_ext_is_fadeout_animation":"false"}'
                                                        data-widget_type="icon-list.default"
                                                    >
                                                        <div className="elementor-widget-container">
                                                            <ul className="elementor-icon-list-items">
                                                                <li className="elementor-icon-list-item">
                                                                    <a href="practice-areas-2.html"> <span
                                                                        className="elementor-icon-list-text">Legal</span>
                                                                    </a>
                                                                </li>
                                                                <li className="elementor-icon-list-item">
                                                                    <a href="attorney.html"> <span
                                                                        className="elementor-icon-list-text">Our Team</span>
                                                                    </a>
                                                                </li>
                                                                <li className="elementor-icon-list-item">
                                                                    <a href="contact-us-3.html"> <span
                                                                        className="elementor-icon-list-text">Contact Us</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section
                        className="elementor-section elementor-top-section elementor-element elementor-element-3c42d3b elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                        data-id="3c42d3b"
                        data-element_type="section"
                        data-settings='{"background_background":"classic","ashton_ext_is_background_parallax":"false","ashton_ext_is_background_on_scroll":"false"}'
                    >
                        <div className="elementor-container elementor-column-gap-default">
                            <div
                                className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-15a0633"
                                data-id="15a0633"
                                data-element_type="column"
                                data-settings='{"ashton_ext_link_sidemenu":"false","ashton_ext_link_fullmenu":"false","ashton_ext_is_sticky":"false","ashton_ext_is_scrollme":"false","ashton_ext_is_smoove":"false","ashton_ext_is_parallax_mouse":"false","ashton_ext_is_infinite":"false","ashton_ext_is_fadeout_animation":"false"}'
                            >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                    <div
                                        className="elementor-element elementor-element-b49fb6f elementor-shape-circle e-grid-align-left elementor-grid-0 elementor-widget elementor-widget-social-icons"
                                        data-id="b49fb6f"
                                        data-element_type="widget"
                                        data-settings='{"ashton_ext_link_sidemenu":"false","ashton_ext_link_fullmenu":"false","ashton_ext_is_sticky":"false","ashton_ext_is_scrollme":"false","ashton_ext_is_smoove":"false","ashton_ext_is_parallax_mouse":"false","ashton_ext_is_infinite":"false","ashton_ext_is_fadeout_animation":"false"}'
                                        data-widget_type="social-icons.default"
                                    >
                                        <div className="elementor-widget-container">
                                            <div className="elementor-social-icons-wrapper elementor-grid">
                                                <span className="elementor-grid-item">
                                                    <a className="elementor-icon elementor-social-icon elementor-social-icon-facebook elementor-repeater-item-5978526"
                                                       href="#" target="_blank">
                                                        <span className="elementor-screen-only">Facebook</span>
                                                        <i className="fab fa-facebook"></i>
                                                    </a>
                                                </span>
                                                <span className="elementor-grid-item">
                                                    <a className="elementor-icon elementor-social-icon elementor-social-icon-twitter elementor-repeater-item-9b3cfae"
                                                       href="#" target="_blank">
                                                        <span className="elementor-screen-only">Twitter</span>
                                                        <i className="fab fa-twitter"></i>
                                                    </a>
                                                </span>
                                                <span className="elementor-grid-item">
                                                    <a className="elementor-icon elementor-social-icon elementor-social-icon-linkedin elementor-repeater-item-38a005f"
                                                       href="#" target="_blank">
                                                        <span className="elementor-screen-only">Linkedin</span>
                                                        <i className="fab fa-linkedin"></i>
                                                    </a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-34f3a83"
                                data-id="34f3a83"
                                data-element_type="column"
                                data-settings='{"ashton_ext_link_sidemenu":"false","ashton_ext_link_fullmenu":"false","ashton_ext_is_sticky":"false","ashton_ext_is_scrollme":"false","ashton_ext_is_smoove":"false","ashton_ext_is_parallax_mouse":"false","ashton_ext_is_infinite":"false","ashton_ext_is_fadeout_animation":"false"}'
                            >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                    <section
                                        className="elementor-section elementor-inner-section elementor-element elementor-element-cbc94fa elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                        data-id="cbc94fa"
                                        data-element_type="section"
                                        data-settings='{"ashton_ext_is_background_parallax":"false","ashton_ext_is_background_on_scroll":"false"}'
                                    >
                                        <div className="elementor-container elementor-column-gap-default">
                                            <div
                                                className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-59d9558"
                                                data-id="59d9558"
                                                data-element_type="column"
                                                data-settings='{"ashton_ext_link_sidemenu":"false","ashton_ext_link_fullmenu":"false","ashton_ext_is_sticky":"false","ashton_ext_is_scrollme":"false","ashton_ext_is_smoove":"false","ashton_ext_is_parallax_mouse":"false","ashton_ext_is_infinite":"false","ashton_ext_is_fadeout_animation":"false"}'
                                            >
                                                <div className="elementor-widget-wrap elementor-element-populated">
                                                    <div
                                                        className="elementor-element elementor-element-221ad0a elementor-widget elementor-widget-heading"
                                                        data-id="221ad0a"
                                                        data-element_type="widget"
                                                        data-settings='{"ashton_ext_link_sidemenu":"false","ashton_ext_link_fullmenu":"false","ashton_ext_is_sticky":"false","ashton_ext_is_scrollme":"false","ashton_ext_is_smoove":"false","ashton_ext_is_parallax_mouse":"false","ashton_ext_is_infinite":"false","ashton_ext_is_fadeout_animation":"false"}'
                                                        data-widget_type="heading.default"
                                                    >
                                                        <div className="elementor-widget-container">
                                                            <span
                                                                className="elementor-heading-title elementor-size-default">Toll Free</span>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="elementor-element elementor-element-256f85d elementor-widget elementor-widget-heading"
                                                        data-id="256f85d"
                                                        data-element_type="widget"
                                                        data-settings='{"ashton_ext_link_sidemenu":"false","ashton_ext_link_fullmenu":"false","ashton_ext_is_sticky":"false","ashton_ext_is_scrollme":"false","ashton_ext_is_smoove":"false","ashton_ext_is_parallax_mouse":"false","ashton_ext_is_infinite":"false","ashton_ext_is_fadeout_animation":"false"}'
                                                        data-widget_type="heading.default"
                                                    >
                                                        <div className="elementor-widget-container">
                                                            <span
                                                                className="elementor-heading-title elementor-size-default">1-885-245-45635</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-8821f9a"
                                                data-id="8821f9a"
                                                data-element_type="column"
                                                data-settings='{"ashton_ext_link_sidemenu":"false","ashton_ext_link_fullmenu":"false","ashton_ext_is_sticky":"false","ashton_ext_is_scrollme":"false","ashton_ext_is_smoove":"false","ashton_ext_is_parallax_mouse":"false","ashton_ext_is_infinite":"false","ashton_ext_is_fadeout_animation":"false"}'
                                            >
                                                <div className="elementor-widget-wrap elementor-element-populated">
                                                    <div
                                                        className="elementor-element elementor-element-350777e elementor-widget elementor-widget-heading"
                                                        data-id="350777e"
                                                        data-element_type="widget"
                                                        data-settings='{"ashton_ext_link_sidemenu":"false","ashton_ext_link_fullmenu":"false","ashton_ext_is_sticky":"false","ashton_ext_is_scrollme":"false","ashton_ext_is_smoove":"false","ashton_ext_is_parallax_mouse":"false","ashton_ext_is_infinite":"false","ashton_ext_is_fadeout_animation":"false"}'
                                                        data-widget_type="heading.default"
                                                    >
                                                        <div className="elementor-widget-container">
                                                            <span
                                                                className="elementor-heading-title elementor-size-default">New York</span>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="elementor-element elementor-element-69c6fba elementor-widget elementor-widget-heading"
                                                        data-id="69c6fba"
                                                        data-element_type="widget"
                                                        data-settings='{"ashton_ext_link_sidemenu":"false","ashton_ext_link_fullmenu":"false","ashton_ext_is_sticky":"false","ashton_ext_is_scrollme":"false","ashton_ext_is_smoove":"false","ashton_ext_is_parallax_mouse":"false","ashton_ext_is_infinite":"false","ashton_ext_is_fadeout_animation":"false"}'
                                                        data-widget_type="heading.default"
                                                    >
                                                        <div className="elementor-widget-container">
                                                            <span
                                                                className="elementor-heading-title elementor-size-default">1-455-245-45623</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-a2577c7"
                                                data-id="a2577c7"
                                                data-element_type="column"
                                                data-settings='{"ashton_ext_link_sidemenu":"false","ashton_ext_link_fullmenu":"false","ashton_ext_is_sticky":"false","ashton_ext_is_scrollme":"false","ashton_ext_is_smoove":"false","ashton_ext_is_parallax_mouse":"false","ashton_ext_is_infinite":"false","ashton_ext_is_fadeout_animation":"false"}'
                                            >
                                                <div className="elementor-widget-wrap elementor-element-populated">
                                                    <div
                                                        className="elementor-element elementor-element-2a3d09d elementor-widget elementor-widget-heading"
                                                        data-id="2a3d09d"
                                                        data-element_type="widget"
                                                        data-settings='{"ashton_ext_link_sidemenu":"false","ashton_ext_link_fullmenu":"false","ashton_ext_is_sticky":"false","ashton_ext_is_scrollme":"false","ashton_ext_is_smoove":"false","ashton_ext_is_parallax_mouse":"false","ashton_ext_is_infinite":"false","ashton_ext_is_fadeout_animation":"false"}'
                                                        data-widget_type="heading.default"
                                                    >
                                                        <div className="elementor-widget-container">
                                                            <span
                                                                className="elementor-heading-title elementor-size-default">Toronto</span>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="elementor-element elementor-element-604ae3d elementor-widget elementor-widget-heading"
                                                        data-id="604ae3d"
                                                        data-element_type="widget"
                                                        data-settings='{"ashton_ext_link_sidemenu":"false","ashton_ext_link_fullmenu":"false","ashton_ext_is_sticky":"false","ashton_ext_is_scrollme":"false","ashton_ext_is_smoove":"false","ashton_ext_is_parallax_mouse":"false","ashton_ext_is_infinite":"false","ashton_ext_is_fadeout_animation":"false"}'
                                                        data-widget_type="heading.default"
                                                    >
                                                        <div className="elementor-widget-container">
                                                            <span
                                                                className="elementor-heading-title elementor-size-default">1-657-544-45623</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section
                        className="elementor-section elementor-top-section elementor-element elementor-element-598593f elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                        data-id="598593f"
                        data-element_type="section"
                        data-settings='{"background_background":"classic","ashton_ext_is_background_parallax":"false","ashton_ext_is_background_on_scroll":"false"}'
                    >
                        <div className="elementor-container elementor-column-gap-default">
                            <div
                                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-b193dfb"
                                data-id="b193dfb"
                                data-element_type="column"
                                data-settings='{"ashton_ext_link_sidemenu":"false","ashton_ext_link_fullmenu":"false","ashton_ext_is_sticky":"false","ashton_ext_is_scrollme":"false","ashton_ext_is_smoove":"false","ashton_ext_is_parallax_mouse":"false","ashton_ext_is_infinite":"false","ashton_ext_is_fadeout_animation":"false"}'
                            >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                    <section
                                        className="elementor-section elementor-inner-section elementor-element elementor-element-602d852 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                        data-id="602d852"
                                        data-element_type="section"
                                        data-settings='{"ashton_ext_is_background_parallax":"false","ashton_ext_is_background_on_scroll":"false"}'
                                    >
                                        <div className="elementor-container elementor-column-gap-default">
                                            <div
                                                className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-7f6a350"
                                                data-id="7f6a350"
                                                data-element_type="column"
                                                data-settings='{"ashton_ext_link_sidemenu":"false","ashton_ext_link_fullmenu":"false","ashton_ext_is_sticky":"false","ashton_ext_is_scrollme":"false","ashton_ext_is_smoove":"false","ashton_ext_is_parallax_mouse":"false","ashton_ext_is_infinite":"false","ashton_ext_is_fadeout_animation":"false"}'
                                            >
                                                <div className="elementor-widget-wrap elementor-element-populated">
                                                    <div
                                                        className="elementor-element elementor-element-14bbf70 elementor-widget elementor-widget-text-editor"
                                                        data-id="14bbf70"
                                                        data-element_type="widget"
                                                        data-settings='{"ashton_ext_link_sidemenu":"false","ashton_ext_link_fullmenu":"false","ashton_ext_is_sticky":"false","ashton_ext_is_scrollme":"false","ashton_ext_is_smoove":"false","ashton_ext_is_parallax_mouse":"false","ashton_ext_is_infinite":"false","ashton_ext_is_fadeout_animation":"false"}'
                                                        data-widget_type="text-editor.default"
                                                    >
                                                        <div className="elementor-widget-container">
                                                            <p className="p1">© Copyright by Ashton lawyer HTML</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-cd275fa"
                                                data-id="cd275fa"
                                                data-element_type="column"
                                                data-settings='{"ashton_ext_link_sidemenu":"false","ashton_ext_link_fullmenu":"false","ashton_ext_is_sticky":"false","ashton_ext_is_scrollme":"false","ashton_ext_is_smoove":"false","ashton_ext_is_parallax_mouse":"false","ashton_ext_is_infinite":"false","ashton_ext_is_fadeout_animation":"false"}'
                                            >
                                                <div className="elementor-widget-wrap elementor-element-populated">
                                                    <div
                                                        className="elementor-element elementor-element-3afee47 elementor-icon-list--layout-inline elementor-align-right elementor-mobile-align-left elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                                                        data-id="3afee47"
                                                        data-element_type="widget"
                                                        data-settings='{"ashton_ext_link_sidemenu":"false","ashton_ext_link_fullmenu":"false","ashton_ext_is_sticky":"false","ashton_ext_is_scrollme":"false","ashton_ext_is_smoove":"false","ashton_ext_is_parallax_mouse":"false","ashton_ext_is_infinite":"false","ashton_ext_is_fadeout_animation":"false"}'
                                                        data-widget_type="icon-list.default"
                                                    >
                                                        <div className="elementor-widget-container">
                                                            <ul className="elementor-icon-list-items elementor-inline-items">
                                                                <li className="elementor-icon-list-item elementor-inline-item">
                                                                    <a href="practice-areas-3.html"> <span
                                                                        className="elementor-icon-list-text">Privacy Policy</span>
                                                                    </a>
                                                                </li>
                                                                <li className="elementor-icon-list-item elementor-inline-item">
                                                                    <a href="practice-areas-3.html"> <span
                                                                        className="elementor-icon-list-text">Legal Agreement</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}


export default Footer
