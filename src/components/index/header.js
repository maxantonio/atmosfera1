import PropTypes from "prop-types"
import React from "react"
import TopBar from "./top_bar"
import Menu from "./menu"


const Header = ({ location }) => (
    <div id="elementor-header" className="main-menu-wrapper">
        <div data-elementor-type="wp-post" data-elementor-id="2211" className="elementor elementor-2211"
             data-elementor-settings="[]">
            <div className="elementor-section-wrap">
                <TopBar/>
                <Menu/>
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
