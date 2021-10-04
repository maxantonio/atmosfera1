import React, {useEffect, useRef} from "react"
import Layout from "../components/interior/layout-int"
import SEO from "../components/seo"
import {Link} from "gatsby";

const InteriorPage = () => {

    const isMountedComponent = useRef(true)

    useEffect(() => {
        if (isMountedComponent.current) {
            if (typeof window !== "undefined") {
                window.funciones()
            }
        }
        return () => {
            isMountedComponent.current = false
        }
    })
    return (
        <Layout title={'404'}>
            <SEO title="404"/>
            <>
                <section className="p-0 cover-background wow animate__fadeIn"
                         style={{backgroundImage: 'url("images/404-bg.jpg")'}}>
                    <div className="container">
                        <div className="row align-items-stretch justify-content-center full-screen">
                            <div
                                className="col-12 col-xl-6 col-lg-7 col-md-8 text-center d-flex align-items-center justify-content-center flex-column">
                                <h6 className="alt-font text-fast-blue font-weight-600 letter-spacing-minus-1px margin-10px-bottom text-uppercase">Ooops!</h6>
                                <h1 className="alt-font text-extra-big font-weight-700 letter-spacing-minus-5px text-extra-dark-gray margin-6-rem-bottom md-margin-4-rem-bottom">404</h1>
                                <span
                                    className="alt-font font-weight-500 text-extra-dark-gray d-block margin-20px-bottom">This page could not be found!</span>
                                <Link to="/" className="btn btn-large btn-gradient-sky-blue-pink">Back to
                                    homepage</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </>


        </Layout>
    )
}

export default InteriorPage
