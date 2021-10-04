import React from "react"
import PropTypes from "prop-types"
import {useStaticQuery, graphql} from "gatsby"
import "../../../static/css/font-icons.min.css"
import "../../../static/css/constantes.css"
import "../../../static/css/theme-vendors.min.css"
import "../../../static/css/style.css"
import "../../../static/css/responsive.css"
import "../../../static/css/hide_recaptcha.css"

import "../../../static/revolution/fonts/pe-icon-7-stroke/css/pe-icon-7-stroke.css"
import "../../../static/revolution/fonts/font-awesome/css/font-awesome.css"
import "../../../static/revolution/css/settings.css"
import "../../../static/revolution/css/layers.css"
import "../../../static/revolution/css/navigation.css"

import "../../../static/css/david.css"
import "../../../static/css/antonio.css"
import "../../../static/css/tania.css"
import Header from "./header"
import Footer from "../footer"
import Mobile_Menu from "../mobile_menu"
import {LangProvider} from "../../context/LangContext";
import preloader from "../../../static/images/latam_black-grueso.svg"

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
        <>
            <LangProvider>
                <div id="perspective" style="">
                    <Mobile_Menu/>
                    <div id="wrapper" className="hasbg transparent">
                        <Header location={location} siteTitle={data.site.siteMetadata.title}/>
                    </div>
                </div>

                {/*<div className="preloader text-center">*/}
                {/*<img src={preloader} alt=""/>*/}
                {/*</div>*/}
                {/*<main>{children}</main>*/}
                {/*<a aria-label="scroll-top" className="scroll-top-arrow" href="#top"><i*/}
                {/*className="feather icon-feather-arrow-up"></i></a>*/}
                {/*<Footer/>*/}
            </LangProvider>

        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
}

export default Layout
