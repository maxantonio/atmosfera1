import React from "react"
import PropTypes from "prop-types"
import {useStaticQuery, graphql} from "gatsby"

// import "../../../static/css/reset.css"
// import "../../../static/css/wordpress.css"
// import "../../../static/css/style.css"
// import "../../../static/css/modulobox.css"
// import "../../../static/css/left-align-menu.css"
// import "../../../static/css/font-awesome.min.css"
// import "../../../static/css/themify-icons.css"
// import "../../../static/css/tooltipster.css"
// import "../../../static/css/demo.css"

// import "../../../static/js/plugins/loftloader/assets/css/loftloader.min.css"
// import "../../../static/js/plugins/elementor/assets/css/frontend.css"
// import "../../../static/js/plugins/ashton-elementor/assets/css/swiper.css"
// import "../../../static/js/plugins/ashton-elementor/assets/css/animatedheadline.css"
// import "../../../static/js/plugins/ashton-elementor/assets/css/justifiedGallery.css"
// import "../../../static/js/plugins/ashton-elementor/assets/css/flickity.css"
// import "../../../static/js/plugins/ashton-elementor/assets/css/owl.theme.default.min.css"
// import "../../../static/js/plugins/ashton-elementor/assets/css/switchery.css"
// import "../../../static/js/plugins/ashton-elementor/assets/css/ashton-elementor.css"
// import "../../../static/js/plugins/ashton-elementor/assets/css/ashton-elementor-responsive.css"
// import "../../../static/css/responsive.css"
// import "../../../static/js/plugins/elementor/assets/lib/font-awesome/css/fontawesome.css"
// import "../../../static/js/plugins/elementor/assets/lib/font-awesome/css/regular.css"
// import "../../../static/js/plugins/elementor/assets/lib/font-awesome/css/solid.css"
// import "../../../static/js/plugins/elementor/assets/lib/animations/animations.min.css"
// import "../../../static/js/plugins/elementor/assets/lib/font-awesome/css/brands.css"
// import "../../../static/css/custom-css.css"

import logo from "../../../static/upload/logo@2x.png"
import Header from "./header"
import Footer from "../footer"
import Mobile_Menu from "../mobile_menu"
import {LangProvider} from "../../context/LangContext";

const Layout = ({children, location}) => {
    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

    return (
            <LangProvider>
                {/*<div id="loftloader-wrapper" className="pl-imgloading" data-show-close-time="15000"*/}
                     {/*data-max-load-time="0">*/}
                    {/*<div className="loader-inner">*/}
                        {/*<div id="loader">*/}
                            {/*<div className="imgloading-container"><span style={{backgroundImage: 'url("/upload/logo@2x.png")'}}/></div>*/}
                            {/*<img width="130" height="52" data-no-lazy="1" className="skip-lazy" alt="loader image"*/}
                                 {/*src={logo}/>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    {/*<div className="loader-section section-fade"/>*/}
                    {/*<div className="loader-close-button" style={{display: 'none'}}><span*/}
                        {/*className="screen-reader-text">Close</span></div>*/}
                {/*</div>*/}
                <div id="perspective">
                    <Mobile_Menu/>
                    <div id="wrapper" className="hasbg transparent">
                        <Header/>
                        <div id="page-content-wrapper" className="no-title">
                            <div className="inner">
                                <div className="inner-wrapper">
                                    <div className="sidebar-content fullwidth">
                                        <div data-elementor-type="wp-page" data-elementor-id="2216"
                                             className="elementor elementor-2216"
                                             data-elementor-settings="[]">
                                            <div className="elementor-section-wrap">
                                               {children}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer/>
                    <a id="go-to-top" href="#"><span className="ti-arrow-up"></span></a>
                </div>
            </LangProvider>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
}

export default Layout
