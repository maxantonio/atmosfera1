import PropTypes from "prop-types"
import React, {useContext, useState} from "react"
import {Link} from "gatsby"
import CustomLink from "./link"
import LangContext from "../context/LangContext"

const Menu = (props) => {
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
            <div className="col-6 col-lg-3 mr-auto pl-lg-0">
                {lang === "es" ?
                    <Link onClick={() => switchLang("es", '/en')} className="navbar-brand" to="/">
                        <img src={"/images/latam_black.svg?v=1.1"} style={{height: '60px'}}
                             data-at2x={"/images/latam_black.svg?v=1.1"}
                             className="" alt={'LCA logo'}/>
                    </Link> :
                    <Link onClick={() => switchLang("en", '/')} className="navbar-brand" to="/en">
                        <img src={"/images/latam_black.svg?v=1.1"} style={{height: '60px'}}
                             data-at2x={"/images/latam_black.svg?v=1.1"}
                             className="" alt={'LCA logo'}/>
                    </Link>
                }
            </div>
            <div className="col-auto menu-order px-lg-0">
                <button className="navbar-toggler float-right" type="button" data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav" aria-label="Toggle navigation">
                    <span className="navbar-toggler-line"/>
                    <span className="navbar-toggler-line"/>
                    <span className="navbar-toggler-line"/>
                    <span className="navbar-toggler-line"/>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav alt-font">
                        <li className="nav-item">
                            <CustomLink to="nosotros" className="nav-link"> {data["nosotros"]}</CustomLink>
                        </li>
                        <li className="nav-item">
                            <CustomLink className="nav-link" to="servicios">{data["servicios"]}</CustomLink>
                        </li>
                        <li className="nav-item ">
                            <CustomLink to="sectores" className="nav-link">{data["sectores"]}</CustomLink>
                        </li>
                        <li className="nav-item ">
                            <a href="https://latamcapitaladvisors.citrixdata.com/" rel="noreferrer" className="nav-link"
                                  target="_blank">{data["inversionistas"]}</a>
                        </li>
                        <li className="nav-item">
                            <CustomLink className="nav-link" to="contacto">{data["contacto"]}</CustomLink>
                        </li>

                        <li className="nav-item">
                            <p onClick={() => switchLang(lang === "es" ? "en" : "es", props.location.pathname)}
                               className="nav-link">|
                                {lang === "es" ? 'English' : 'Español'}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

Menu.propTypes = {
    siteTitle: PropTypes.string
}

Menu.defaultProps = {
    siteTitle: ``
}

export default Menu
