import Layout from "../components/index/layout"
import SEO from "../components/seo"
import React, {useContext, useEffect, useRef, useState} from "react"
import CustomLink from "../components/link"
import {Link} from "gatsby"

import slider1 from "../../static/images/slider/travel1.jpg"

import especializamos from "../../static/video/especializamos.mp4"
import LangContext from "../context/LangContext";

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
            <>

            </>
        </Layout>
    )
}

export default IndexPage
