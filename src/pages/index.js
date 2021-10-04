import Layout from "../components/index/layout"
import SEO from "../components/seo"
import React, {useContext, useEffect, useRef, useState} from "react"
// import CustomLink from "../components/link"
// import {Link} from "gatsby"
import LangContext from "../context/LangContext";

import logo3 from '../../static/upload/logo3-300x200.png'
import law_firm_logo_2 from '../../static/upload/law_firm_logo_2-300x200.png'
import logo4 from '../../static/upload/logo4-300x200.png'
import law_logo2 from '../../static/upload/law-logo2-300x200.png'
const jQuery = require("jquery");
const IndexPage = (props) => {
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
    const isMountedComponent = useRef(true)
    useEffect(() => {
        if (isMountedComponent.current) {
            if (typeof window !== "undefined") {
            }
        }
        return () => {
            isMountedComponent.current = false
        }
    })

    return (
        <Layout location={props.location}>
            <SEO title="Atmofera"/>
            {/*<>*/}
            <section
                className="elementor-section elementor-top-section elementor-element elementor-element-92058d6 elementor-section-height-min-height elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-items-middle"
                data-id="92058d6"
                data-element_type="section"
                data-settings='{"stretch_section":"section-stretched","background_background":"slideshow","ashton_ext_is_background_parallax":"true","background_slideshow_gallery":[{"id":2218,"url":"/upload/younger-and-older-businessman-shaking-hands-in-mod-UGE522P.jpg"},{"id":3175,"url":"/upload/smiling-group-of-diverse-businesspeople-working-to-8ZCXHEH.jpg"},{"id":3716,"url":"/upload/smiling-business-people-doing-paperwork-in-office-UQ2H5N9.jpg"}],"background_slideshow_slide_transition":"slide_left","background_slideshow_transition_duration":1000,"background_slideshow_loop":"yes","background_slideshow_slide_duration":5000,"ashton_ext_is_background_parallax_speed":{"unit":"px","size":0.8000000000000000444089209850062616169452667236328125,"sizes":[]},"ashton_ext_is_background_on_scroll":"false"}'
            >
                <div className="elementor-background-overlay"></div>
                <div className="elementor-container elementor-column-gap-default">
                    <div
                        className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-bf82be5"
                        data-id="bf82be5"
                        data-element_type="column"
                        data-settings='{"ashton_ext_link_sidemenu":"false","ashton_ext_link_fullmenu":"false","ashton_ext_is_sticky":"false","ashton_ext_is_scrollme":"false","ashton_ext_is_parallax_mouse":"false","ashton_ext_is_infinite":"false","ashton_ext_is_fadeout_animation":"false"}'
                    >
                        <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                                className="elementor-element elementor-element-2656104 elementor-widget elementor-widget-heading"
                                data-id="2656104"
                                data-element_type="widget"
                                data-settings='{"ashton_ext_is_smoove":"true","ashton_ext_smoove_duration":800,"ashton_ext_smoove_translatey":{"unit":"px","size":100,"sizes":[]},"ashton_ext_smoove_disable":"769","ashton_ext_smoove_rotatey":{"unit":"px","size":15,"sizes":[]},"ashton_ext_link_sidemenu":"false","ashton_ext_link_fullmenu":"false","ashton_ext_is_sticky":"false","ashton_ext_is_scrollme":"false","ashton_ext_smoove_scalex":{"unit":"px","size":1,"sizes":[]},"ashton_ext_smoove_scaley":{"unit":"px","size":1,"sizes":[]},"ashton_ext_smoove_rotatex":{"unit":"px","size":0,"sizes":[]},"ashton_ext_smoove_rotatez":{"unit":"px","size":0,"sizes":[]},"ashton_ext_smoove_translatex":{"unit":"px","size":0,"sizes":[]},"ashton_ext_smoove_translatez":{"unit":"px","size":0,"sizes":[]},"ashton_ext_smoove_skewx":{"unit":"px","size":0,"sizes":[]},"ashton_ext_smoove_skewy":{"unit":"px","size":0,"sizes":[]},"ashton_ext_smoove_transform_originx":{"unit":"px","size":50,"sizes":[]},"ashton_ext_smoove_transform_originy":{"unit":"px","size":50,"sizes":[]},"ashton_ext_smoove_perspective":{"unit":"px","size":1000,"sizes":[]},"ashton_ext_is_parallax_mouse":"false","ashton_ext_is_infinite":"false","ashton_ext_is_fadeout_animation":"false"}'
                                data-widget_type="heading.default"
                            >
                                <div className="elementor-widget-container">
                                    <h2 className="elementor-heading-title elementor-size-default">Our
                                        Philosophy</h2>
                                </div>
                            </div>
                            <div
                                className="elementor-element elementor-element-08f7f84 elementor-widget elementor-widget-heading"
                                data-id="08f7f84"
                                data-element_type="widget"
                                data-settings='{"ashton_ext_is_smoove":"true","ashton_ext_smoove_disable":"769","ashton_ext_smoove_duration":800,"ashton_ext_smoove_translatey":{"unit":"px","size":100,"sizes":[]},"ashton_ext_smoove_rotatey":{"unit":"px","size":15,"sizes":[]},"ashton_ext_link_sidemenu":"false","ashton_ext_link_fullmenu":"false","ashton_ext_is_sticky":"false","ashton_ext_is_scrollme":"false","ashton_ext_smoove_scalex":{"unit":"px","size":1,"sizes":[]},"ashton_ext_smoove_scaley":{"unit":"px","size":1,"sizes":[]},"ashton_ext_smoove_rotatex":{"unit":"px","size":0,"sizes":[]},"ashton_ext_smoove_rotatez":{"unit":"px","size":0,"sizes":[]},"ashton_ext_smoove_translatex":{"unit":"px","size":0,"sizes":[]},"ashton_ext_smoove_translatez":{"unit":"px","size":0,"sizes":[]},"ashton_ext_smoove_skewx":{"unit":"px","size":0,"sizes":[]},"ashton_ext_smoove_skewy":{"unit":"px","size":0,"sizes":[]},"ashton_ext_smoove_transform_originx":{"unit":"px","size":50,"sizes":[]},"ashton_ext_smoove_transform_originy":{"unit":"px","size":50,"sizes":[]},"ashton_ext_smoove_perspective":{"unit":"px","size":1000,"sizes":[]},"ashton_ext_is_parallax_mouse":"false","ashton_ext_is_infinite":"false"}'
                                data-widget_type="heading.default"
                            >
                                <div className="elementor-widget-container">
                                    <h2 className="elementor-heading-title elementor-size-default">
                                        Experience<span style={{color: '#a51c30'}}>.</span></h2>
                                </div>
                            </div>
                            <div
                                className="elementor-element elementor-element-6ad535b elementor-widget elementor-widget-heading"
                                data-id="6ad535b"
                                data-element_type="widget"
                                data-settings='{"ashton_ext_is_smoove":"true","ashton_ext_smoove_disable":"769","ashton_ext_smoove_duration":800,"ashton_ext_smoove_translatey":{"unit":"px","size":100,"sizes":[]},"ashton_ext_smoove_rotatey":{"unit":"px","size":15,"sizes":[]},"ashton_ext_link_sidemenu":"false","ashton_ext_link_fullmenu":"false","ashton_ext_is_sticky":"false","ashton_ext_is_scrollme":"false","ashton_ext_smoove_scalex":{"unit":"px","size":1,"sizes":[]},"ashton_ext_smoove_scaley":{"unit":"px","size":1,"sizes":[]},"ashton_ext_smoove_rotatex":{"unit":"px","size":0,"sizes":[]},"ashton_ext_smoove_rotatez":{"unit":"px","size":0,"sizes":[]},"ashton_ext_smoove_translatex":{"unit":"px","size":0,"sizes":[]},"ashton_ext_smoove_translatez":{"unit":"px","size":0,"sizes":[]},"ashton_ext_smoove_skewx":{"unit":"px","size":0,"sizes":[]},"ashton_ext_smoove_skewy":{"unit":"px","size":0,"sizes":[]},"ashton_ext_smoove_transform_originx":{"unit":"px","size":50,"sizes":[]},"ashton_ext_smoove_transform_originy":{"unit":"px","size":50,"sizes":[]},"ashton_ext_smoove_perspective":{"unit":"px","size":1000,"sizes":[]},"ashton_ext_is_parallax_mouse":"false","ashton_ext_is_infinite":"false"}'
                                data-widget_type="heading.default"
                            >
                                <div className="elementor-widget-container">
                                    <h2 className="elementor-heading-title elementor-size-default">
                                        Compassion<span style={{color: '#a51c30'}}>.</span></h2>
                                </div>
                            </div>
                            <div
                                className="elementor-element elementor-element-c9c9515 elementor-widget elementor-widget-heading"
                                data-id="c9c9515"
                                data-element_type="widget"
                                data-settings='{"ashton_ext_is_smoove":"true","ashton_ext_smoove_disable":"769","ashton_ext_smoove_duration":800,"ashton_ext_smoove_translatey":{"unit":"px","size":100,"sizes":[]},"ashton_ext_smoove_rotatey":{"unit":"px","size":15,"sizes":[]},"ashton_ext_link_sidemenu":"false","ashton_ext_link_fullmenu":"false","ashton_ext_is_sticky":"false","ashton_ext_is_scrollme":"false","ashton_ext_smoove_scalex":{"unit":"px","size":1,"sizes":[]},"ashton_ext_smoove_scaley":{"unit":"px","size":1,"sizes":[]},"ashton_ext_smoove_rotatex":{"unit":"px","size":0,"sizes":[]},"ashton_ext_smoove_rotatez":{"unit":"px","size":0,"sizes":[]},"ashton_ext_smoove_translatex":{"unit":"px","size":0,"sizes":[]},"ashton_ext_smoove_translatez":{"unit":"px","size":0,"sizes":[]},"ashton_ext_smoove_skewx":{"unit":"px","size":0,"sizes":[]},"ashton_ext_smoove_skewy":{"unit":"px","size":0,"sizes":[]},"ashton_ext_smoove_transform_originx":{"unit":"px","size":50,"sizes":[]},"ashton_ext_smoove_transform_originy":{"unit":"px","size":50,"sizes":[]},"ashton_ext_smoove_perspective":{"unit":"px","size":1000,"sizes":[]},"ashton_ext_is_parallax_mouse":"false","ashton_ext_is_infinite":"false"}'
                                data-widget_type="heading.default"
                            >
                                <div className="elementor-widget-container">
                                    <h2 className="elementor-heading-title elementor-size-default">
                                        Results<span style={{color: '#a51c30'}}>.</span></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-9e3d28e elementor-hidden-phone"
                        data-id="9e3d28e"
                        data-element_type="column"
                        data-settings='{"ashton_ext_link_sidemenu":"false","ashton_ext_link_fullmenu":"false","ashton_ext_is_sticky":"false","ashton_ext_is_scrollme":"false","ashton_ext_is_smoove":"false","ashton_ext_is_parallax_mouse":"false","ashton_ext_is_infinite":"false","ashton_ext_is_fadeout_animation":"false"}'
                    >
                        <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                                className="elementor-element elementor-element-76839fa elementor-widget elementor-widget-spacer"
                                data-id="76839fa"
                                data-element_type="widget"
                                data-settings='{"ashton_ext_link_sidemenu":"false","ashton_ext_link_fullmenu":"false","ashton_ext_is_sticky":"false","ashton_ext_is_scrollme":"false","ashton_ext_is_smoove":"false","ashton_ext_is_parallax_mouse":"false","ashton_ext_is_infinite":"false","ashton_ext_is_fadeout_animation":"false"}'
                                data-widget_type="spacer.default"
                            >
                                <div className="elementor-widget-container">
                                    <div className="elementor-spacer">
                                        <div className="elementor-spacer-inner"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className="elementor-section elementor-top-section elementor-element elementor-element-be10b13 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="be10b13"
                data-element_type="section"
                data-settings='{"ashton_ext_is_background_parallax":"false","ashton_ext_is_background_on_scroll":"false"}'
            >
                <div className="elementor-container elementor-column-gap-default">
                    <div
                        className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-974f3df"
                        data-id="974f3df"
                        data-element_type="column"
                        data-settings='{"ashton_ext_link_sidemenu":"false","ashton_ext_link_fullmenu":"false","ashton_ext_is_sticky":"false","ashton_ext_is_scrollme":"false","ashton_ext_is_smoove":"false","ashton_ext_is_parallax_mouse":"false","ashton_ext_is_infinite":"false","ashton_ext_is_fadeout_animation":"false"}'
                    >
                        <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                                className="elementor-element elementor-element-602f789 elementor-widget elementor-widget-heading"
                                data-id="602f789"
                                data-element_type="widget"
                                data-settings='{"ashton_ext_link_sidemenu":"false","ashton_ext_link_fullmenu":"false","ashton_ext_is_sticky":"false","ashton_ext_is_scrollme":"false","ashton_ext_is_parallax_mouse":"false","ashton_ext_is_infinite":"false","ashton_ext_is_fadeout_animation":"false"}'
                                data-widget_type="heading.default"
                            >
                                <div className="elementor-widget-container">
                                    <div className="elementor-heading-title elementor-size-default">Global Clients</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-5506ed4"
                        data-id="5506ed4"
                        data-element_type="column"
                        data-settings='{"ashton_ext_link_sidemenu":"false","ashton_ext_link_fullmenu":"false","ashton_ext_is_sticky":"false","ashton_ext_is_scrollme":"false","ashton_ext_is_smoove":"false","ashton_ext_is_parallax_mouse":"false","ashton_ext_is_infinite":"false","ashton_ext_is_fadeout_animation":"false"}'
                    >
                        <div className="elementor-widget-wrap elementor-element-populated">
                            <section
                                className="elementor-section elementor-inner-section elementor-element elementor-element-16e0b44 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                data-id="16e0b44"
                                data-element_type="section"
                                data-settings='{"ashton_ext_is_background_parallax":"false","ashton_ext_is_background_on_scroll":"false"}'
                            >
                                <div className="elementor-container elementor-column-gap-default">
                                    <div
                                        className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-8af4bb9"
                                        data-id="8af4bb9"
                                        data-element_type="column"
                                        data-settings='{"ashton_ext_link_sidemenu":"false","ashton_ext_link_fullmenu":"false","ashton_ext_is_sticky":"false","ashton_ext_is_scrollme":"false","ashton_ext_is_smoove":"false","ashton_ext_is_parallax_mouse":"false","ashton_ext_is_infinite":"false","ashton_ext_is_fadeout_animation":"false"}'
                                    >
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                            <div
                                                className="elementor-element elementor-element-450411b elementor-widget__width-auto elementor-widget elementor-widget-image"
                                                data-id="450411b"
                                                data-element_type="widget"
                                                data-settings='{"ashton_image_is_animation":"false","ashton_ext_link_sidemenu":"false","ashton_ext_link_fullmenu":"false","ashton_ext_is_sticky":"false","ashton_ext_is_scrollme":"false","ashton_ext_is_smoove":"false","ashton_ext_is_parallax_mouse":"false","ashton_ext_is_infinite":"false","ashton_ext_is_fadeout_animation":"false"}'
                                                data-widget_type="image.default"
                                            >
                                                <div className="elementor-widget-container">
                                                    <img
                                                        width="300"
                                                        height="200"
                                                        src={logo3}
                                                        className="attachment-medium size-medium"
                                                        alt=""
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-80612e9"
                                        data-id="80612e9"
                                        data-element_type="column"
                                        data-settings='{"ashton_ext_link_sidemenu":"false","ashton_ext_link_fullmenu":"false","ashton_ext_is_sticky":"false","ashton_ext_is_scrollme":"false","ashton_ext_is_smoove":"false","ashton_ext_is_parallax_mouse":"false","ashton_ext_is_infinite":"false","ashton_ext_is_fadeout_animation":"false"}'
                                    >
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                            <div
                                                className="elementor-element elementor-element-8976249 elementor-widget__width-auto elementor-widget elementor-widget-image"
                                                data-id="8976249"
                                                data-element_type="widget"
                                                data-settings='{"ashton_image_is_animation":"false","ashton_ext_link_sidemenu":"false","ashton_ext_link_fullmenu":"false","ashton_ext_is_sticky":"false","ashton_ext_is_scrollme":"false","ashton_ext_is_smoove":"false","ashton_ext_is_parallax_mouse":"false","ashton_ext_is_infinite":"false","ashton_ext_is_fadeout_animation":"false"}'
                                                data-widget_type="image.default"
                                            >
                                                <div className="elementor-widget-container">
                                                    <img
                                                        width="300"
                                                        height="200"
                                                        src={law_firm_logo_2}
                                                        className="attachment-medium size-medium"
                                                        alt=""
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-f4cefbf"
                                        data-id="f4cefbf"
                                        data-element_type="column"
                                        data-settings='{"ashton_ext_link_sidemenu":"false","ashton_ext_link_fullmenu":"false","ashton_ext_is_sticky":"false","ashton_ext_is_scrollme":"false","ashton_ext_is_smoove":"false","ashton_ext_is_parallax_mouse":"false","ashton_ext_is_infinite":"false","ashton_ext_is_fadeout_animation":"false"}'
                                    >
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                            <div
                                                className="elementor-element elementor-element-60db923 elementor-widget__width-auto elementor-widget elementor-widget-image"
                                                data-id="60db923"
                                                data-element_type="widget"
                                                data-settings='{"ashton_image_is_animation":"false","ashton_ext_link_sidemenu":"false","ashton_ext_link_fullmenu":"false","ashton_ext_is_sticky":"false","ashton_ext_is_scrollme":"false","ashton_ext_is_smoove":"false","ashton_ext_is_parallax_mouse":"false","ashton_ext_is_infinite":"false","ashton_ext_is_fadeout_animation":"false"}'
                                                data-widget_type="image.default"
                                            >
                                                <div className="elementor-widget-container">
                                                    <img
                                                        width="300"
                                                        height="200"
                                                        src={logo4}
                                                        className="attachment-medium size-medium"
                                                        alt=""
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-52ae238"
                                        data-id="52ae238"
                                        data-element_type="column"
                                        data-settings='{"ashton_ext_link_sidemenu":"false","ashton_ext_link_fullmenu":"false","ashton_ext_is_sticky":"false","ashton_ext_is_scrollme":"false","ashton_ext_is_smoove":"false","ashton_ext_is_parallax_mouse":"false","ashton_ext_is_infinite":"false","ashton_ext_is_fadeout_animation":"false"}'
                                    >
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                            <div
                                                className="elementor-element elementor-element-8cfb797 elementor-widget__width-auto elementor-widget elementor-widget-image"
                                                data-id="8cfb797"
                                                data-element_type="widget"
                                                data-settings='{"ashton_image_is_animation":"false","ashton_ext_link_sidemenu":"false","ashton_ext_link_fullmenu":"false","ashton_ext_is_sticky":"false","ashton_ext_is_scrollme":"false","ashton_ext_is_smoove":"false","ashton_ext_is_parallax_mouse":"false","ashton_ext_is_infinite":"false","ashton_ext_is_fadeout_animation":"false"}'
                                                data-widget_type="image.default"
                                            >
                                                <div className="elementor-widget-container">
                                                    <img
                                                        width="300"
                                                        height="200"
                                                        src={law_logo2}
                                                        className="attachment-medium size-medium"
                                                        alt=""
                                                        loading="lazy"
                                                    />
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
                className="elementor-section elementor-top-section elementor-element elementor-element-62dfe10 elementor-section-height-min-height elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-items-middle"
                data-id="62dfe10"
                data-element_type="section"
                data-settings='{"stretch_section":"section-stretched","background_background":"classic","ashton_ext_is_background_parallax":"true","ashton_ext_is_background_parallax_speed":{"unit":"px","size":0.8000000000000000444089209850062616169452667236328125,"sizes":[]},"ashton_ext_is_background_on_scroll":"false"}'
            >
                <div className="elementor-background-overlay"></div>
                <div className="elementor-container elementor-column-gap-default">
                    <div
                        className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-0866a00"
                        data-id="0866a00"
                        data-element_type="column"
                        data-settings='{"ashton_ext_link_sidemenu":"false","ashton_ext_link_fullmenu":"false","ashton_ext_is_sticky":"false","ashton_ext_is_scrollme":"false","ashton_ext_is_parallax_mouse":"false","ashton_ext_is_infinite":"false","ashton_ext_is_fadeout_animation":"false"}'
                    >
                        <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                                className="elementor-element elementor-element-581a34c elementor-widget elementor-widget-ashton-animated-text"
                                data-id="581a34c"
                                data-element_type="widget"
                                data-settings='{"ashton_ext_link_sidemenu":"false","ashton_ext_link_fullmenu":"false","ashton_ext_is_sticky":"false","ashton_ext_is_scrollme":"false","ashton_ext_is_parallax_mouse":"false","ashton_ext_is_infinite":"false","ashton_ext_is_fadeout_animation":"false"}'
                                data-widget_type="ashton-animated-text.default"
                            >
                                <div className="elementor-widget-container">
                                    <div
                                        className="themegoods-animated-text text-alignment-center transition-right overflow-visible"
                                        data-delimiter="word"
                                        data-transition="100"
                                        data-transition-delay="100"
                                        data-transition-duration="400"
                                    >
                                        <h2>
                                            We build relationships
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="elementor-element elementor-element-5bd3476 elementor-widget elementor-widget-ashton-animated-text"
                                data-id="5bd3476"
                                data-element_type="widget"
                                data-settings='{"ashton_ext_link_sidemenu":"false","ashton_ext_link_fullmenu":"false","ashton_ext_is_sticky":"false","ashton_ext_is_scrollme":"false","ashton_ext_is_smoove":"false","ashton_ext_is_parallax_mouse":"false","ashton_ext_is_infinite":"false","ashton_ext_is_fadeout_animation":"false"}'
                                data-widget_type="ashton-animated-text.default"
                            >
                                <div className="elementor-widget-container">
                                    <div
                                        className="themegoods-animated-text text-alignment-center transition-right overflow-visible"
                                        data-delimiter="word"
                                        data-transition="100"
                                        data-transition-delay="200"
                                        data-transition-duration="400"
                                    >
                                        <h2>
                                            that inspire success
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="elementor-element elementor-element-0faaefd elementor-widget elementor-widget-text-editor"
                                data-id="0faaefd"
                                data-element_type="widget"
                                data-settings='{"ashton_ext_is_smoove":"true","ashton_ext_smoove_disable":"769","ashton_ext_smoove_duration":800,"ashton_ext_smoove_translatey":{"unit":"px","size":30,"sizes":[]},"ashton_ext_link_sidemenu":"false","ashton_ext_link_fullmenu":"false","ashton_ext_is_sticky":"false","ashton_ext_is_scrollme":"false","ashton_ext_smoove_scalex":{"unit":"px","size":1,"sizes":[]},"ashton_ext_smoove_scaley":{"unit":"px","size":1,"sizes":[]},"ashton_ext_smoove_rotatex":{"unit":"px","size":0,"sizes":[]},"ashton_ext_smoove_rotatey":{"unit":"px","size":0,"sizes":[]},"ashton_ext_smoove_rotatez":{"unit":"px","size":0,"sizes":[]},"ashton_ext_smoove_translatex":{"unit":"px","size":0,"sizes":[]},"ashton_ext_smoove_translatez":{"unit":"px","size":0,"sizes":[]},"ashton_ext_smoove_skewx":{"unit":"px","size":0,"sizes":[]},"ashton_ext_smoove_skewy":{"unit":"px","size":0,"sizes":[]},"ashton_ext_smoove_transform_originx":{"unit":"px","size":50,"sizes":[]},"ashton_ext_smoove_transform_originy":{"unit":"px","size":50,"sizes":[]},"ashton_ext_smoove_perspective":{"unit":"px","size":1000,"sizes":[]},"ashton_ext_is_parallax_mouse":"false","ashton_ext_is_infinite":"false","ashton_ext_is_fadeout_animation":"false"}'
                                data-widget_type="text-editor.default"
                            >
                                <div className="elementor-widget-container">
                                    <p>Today’s clients expect convenience. Texting is already part of our daily
                                        lives and it’s the preferred method of interaction.</p>
                                </div>
                            </div>
                            <div
                                className="elementor-element elementor-element-4783b73 elementor-widget__width-auto elementor-widget elementor-widget-button"
                                data-id="4783b73"
                                data-element_type="widget"
                                data-settings='{"ashton_ext_is_smoove":"true","ashton_ext_smoove_disable":"769","ashton_ext_smoove_duration":800,"ashton_ext_smoove_translatey":{"unit":"px","size":30,"sizes":[]},"ashton_ext_link_sidemenu":"false","ashton_ext_link_fullmenu":"false","ashton_ext_is_sticky":"false","ashton_ext_is_scrollme":"false","ashton_ext_smoove_scalex":{"unit":"px","size":1,"sizes":[]},"ashton_ext_smoove_scaley":{"unit":"px","size":1,"sizes":[]},"ashton_ext_smoove_rotatex":{"unit":"px","size":0,"sizes":[]},"ashton_ext_smoove_rotatey":{"unit":"px","size":0,"sizes":[]},"ashton_ext_smoove_rotatez":{"unit":"px","size":0,"sizes":[]},"ashton_ext_smoove_translatex":{"unit":"px","size":0,"sizes":[]},"ashton_ext_smoove_translatez":{"unit":"px","size":0,"sizes":[]},"ashton_ext_smoove_skewx":{"unit":"px","size":0,"sizes":[]},"ashton_ext_smoove_skewy":{"unit":"px","size":0,"sizes":[]},"ashton_ext_smoove_transform_originx":{"unit":"px","size":50,"sizes":[]},"ashton_ext_smoove_transform_originy":{"unit":"px","size":50,"sizes":[]},"ashton_ext_smoove_perspective":{"unit":"px","size":1000,"sizes":[]},"ashton_ext_is_parallax_mouse":"false","ashton_ext_is_infinite":"false","ashton_ext_is_fadeout_animation":"false"}'
                                data-widget_type="button.default"
                            >
                                <div className="elementor-widget-container">
                                    <div className="elementor-button-wrapper">
                                        <a href="#"
                                           className="elementor-button-link elementor-button elementor-size-sm elementor-animation-float"
                                           role="button">
                                                                    <span className="elementor-button-content-wrapper">
                                                                        <span className="elementor-button-text">Make an appointment</span>
                                                                    </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*</>*/}
        </Layout>
    )
}

export default IndexPage
