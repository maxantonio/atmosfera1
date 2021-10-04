/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
const React = require("react")
import {withPrefix} from "gatsby"

export const onRenderBody = ({setHeadComponents}, pluginOptions) => {
    setHeadComponents([

        <script src={withPrefix('js/jquery.js?ver=3.6.0')} type="text/javascript"/>,
        <script src={withPrefix('js/jquery-migrate.js?ver=3.3.2')} type="text/javascript"/>,
        <script src={withPrefix('js/plugins/imagesloaded.min.js?ver=4.1.4')} type="text/javascript"/>,
        <script src={withPrefix('js/plugins/masonry.min.js?ver=4.2.2')} type="text/javascript"/>,
        <script src={withPrefix('js/plugins/ui/effect.js?ver=1.12.1')} type="text/javascript"/>,
        <script src={withPrefix('js/plugins/ashton-elementor/assets/js/jquery.lazy.js?ver=5.8')} type="text/javascript"/>,
        <script src={withPrefix('js/ashton_lazy.js')} type="text/javascript"/>,
        <script src={withPrefix('js/plugins/ashton-elementor/assets/js/modulobox.js?ver=5.8')} type="text/javascript"/>,
        <script src={withPrefix('js/plugins/ashton-elementor/assets/js/jquery.parallax-scroll.js?ver=5.8')} type="text/javascript"/>,
        <script src={withPrefix('js/plugins/ashton-elementor/assets/js/jquery.smoove.js?ver=5.8')} type="text/javascript"/>,
        <script src={withPrefix('js/plugins/ashton-elementor/assets/js/parallax.js?ver=5.8')} type="text/javascript"/>,
        <script src={withPrefix('js/plugins/ashton-elementor/assets/js/jquery.blast.js?ver=5.8')} type="text/javascript"/>,
        <script src={withPrefix('js/plugins/ashton-elementor/assets/js/jarallax.js?ver=5.8')} type="text/javascript"/>,
        <script src={withPrefix('js/plugins/ashton-elementor/assets/js/jquery.sticky-sidebar.js?ver=5.8')} type="text/javascript"/>,
        <script src={withPrefix('js/plugins/ashton-elementor/assets/js/ashton-elementor.js?ver=5.8')} type="text/javascript"/>,
        <script src={withPrefix('js/plugins/ui/core.js?ver=1.12.1')} type="text/javascript"/>,
        <script src={withPrefix('js/plugins/ashton-elementor/assets/js/tweenmax.min.js?ver=5.8')} type="text/javascript"/>,
        <script src={withPrefix('js/plugins/ashton-plugins.js?ver=5.8')} type="text/javascript"/>,
        <script src={withPrefix('js/plugins/ashton-custom.js?ver=5.8')} type="text/javascript"/>,
        <script src={withPrefix('js/plugins/jquery-tooltipster.js?ver=5.8')} type="text/javascript"/>,
        <script src={withPrefix('js/plugins/loftloader/assets/js/loftloader.min.js?ver=2021041202')} type="text/javascript"/>,
        <script src={withPrefix('js/plugins/ashton-elementor/assets/js/jquery.animatedheadline.js?ver=5.8')} type="text/javascript"/>,
        <script src={withPrefix('js/plugins/elementor/assets/lib/jquery-numerator/jquery-numerator.js?ver=0.2.1')} type="text/javascript"/>,
        <script src={withPrefix('js/plugins/ashton-elementor/assets/js/flickity.pkgd.js?ver=5.8')} type="text/javascript"/>,
        <script src={withPrefix('js/plugins/ashton-elementor/assets/js/jquery.animatedheadline.js?ver=5.8')} type="text/javascript"/>,
        <script src={withPrefix('jjs/plugins/ashton-elementor/assets/js/owl.carousel.min.js?ver=5.8')} type="text/javascript"/>,
        <script src={withPrefix('js/plugins/elementor/assets/lib/jquery-numerator/jquery-numerator.js?ver=0.2.1')} type="text/javascript"/>,
        <script src={withPrefix('js/plugins/elementor/assets/js/webpack.runtime.js?ver=3.3.1')} type="text/javascript"/>,
        <script src={withPrefix('js/plugins/elementor/assets/js/frontend-modules.js?ver=3.3.1')} type="text/javascript"/>,
        <script src={withPrefix('js/plugins/elementor/assets/lib/waypoints/waypoints.js?ver=4.0.2')} type="text/javascript"/>,
        <script src={withPrefix('js/plugins/elementor/assets/js/frontend.js?ver=3.3.1')} type="text/javascript"/>,
        <script src={withPrefix('js/regados.js')} type="text/javascript"/>,
    ])
}
