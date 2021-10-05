/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
const React = require("react")
import {withPrefix} from "gatsby"

export const onRenderBody = ({setHeadComponents, setPostBodyComponents}, pluginOptions) => {
    setHeadComponents([
        <link rel="stylesheet" href={withPrefix('css/reset.css?ver=5.8')} type="text/css" media="all"/>,
        <link rel="stylesheet" href={withPrefix('css/wordpress.css')} type="text/css" media="all"/>,
        <link rel="stylesheet" href={withPrefix('css/style.css')} type="text/css" media="all"/>,
        <link rel="stylesheet" href={withPrefix('css/modulobox.css')} type="text/css" media="all"/>,
        <link rel="stylesheet" href={withPrefix('css/left-align-menu.css')} type="text/css" media="all"/>,
        <link rel="stylesheet" href={withPrefix('css/font-awesome.min.css')} type="text/css" media="all"/>,
        <link rel="stylesheet" href={withPrefix('css/themify-icons.css')} type="text/css" media="all"/>,
        <link rel="stylesheet" href={withPrefix('css/tooltipster.css')} type="text/css" media="all"/>,
        <link rel="stylesheet" href={withPrefix('css/demo.css')} type="text/css" media="all"/>,
        <link rel="stylesheet" href={withPrefix('js/plugins/loftloader/assets/css/loftloader.min.css')} type="text/css"
              media="all"/>,
        <link rel="stylesheet" href={withPrefix('js/plugins/elementor/assets/css/frontend.css')} type="text/css"
              media="all"/>,
        <link rel="stylesheet" href={withPrefix('js/plugins/ashton-elementor/assets/css/swiper.css')} type="text/css"
              media="all"/>,
        <link rel="stylesheet" href={withPrefix('js/plugins/ashton-elementor/assets/css/animatedheadline.css')}
              type="text/css" media="all"/>,
        <link rel="stylesheet" href={withPrefix('js/plugins/ashton-elementor/assets/css/justifiedGallery.css')}
              type="text/css" media="all"/>,
        <link rel="stylesheet" href={withPrefix('js/plugins/ashton-elementor/assets/css/flickity.css')} type="text/css"
              media="all"/>,
        <link rel="stylesheet" href={withPrefix('js/plugins/ashton-elementor/assets/css/owl.theme.default.min.css')}
              type="text/css" media="all"/>,
        <link rel="stylesheet" href={withPrefix('js/plugins/ashton-elementor/assets/css/switchery.css')} type="text/css"
              media="all"/>,
        <link rel="stylesheet" href={withPrefix('js/plugins/ashton-elementor/assets/css/ashton-elementor.css')}
              type="text/css" media="all"/>,
        <link rel="stylesheet"
              href={withPrefix('js/plugins/ashton-elementor/assets/css/ashton-elementor-responsive.css')}
              type="text/css" media="all"/>,
        <link rel="stylesheet" href={withPrefix('css/responsive.css')} type="text/css" media="all"/>,
        <link rel="stylesheet" href={withPrefix('js/plugins/elementor/assets/lib/font-awesome/css/fontawesome.css')}
              type="text/css" media="all"/>,
        <link rel="stylesheet" href={withPrefix('js/plugins/elementor/assets/lib/font-awesome/css/regular.css')}
              type="text/css" media="all"/>,
        <link rel="stylesheet" href={withPrefix('js/plugins/elementor/assets/lib/font-awesome/css/solid.css')}
              type="text/css" media="all"/>,
        <link rel="stylesheet" href={withPrefix('js/plugins/elementor/assets/lib/animations/animations.min.css')}
              type="text/css" media="all"/>,
        <link rel="stylesheet" href={withPrefix('js/plugins/elementor/assets/lib/font-awesome/css/brands.css')}
              type="text/css" media="all"/>,
        <link rel="stylesheet" href={withPrefix('css/custom-css.css')} type="text/css" media="all"/>,

    ]);
    setPostBodyComponents([
        <script src={withPrefix('js/jquery.js')} type="text/javascript"/>,
        <script src={withPrefix('js/jquery-migrate.js')} type="text/javascript"/>,
        <script src={withPrefix('js/plugins/imagesloaded.min.js')} type="text/javascript"/>,
        <script src={withPrefix('js/plugins/masonry.min.js')} type="text/javascript"/>,
        <script src={withPrefix('js/plugins/ui/effect.js')} type="text/javascript"/>,
        <script src={withPrefix('js/plugins/ashton-elementor/assets/js/jquery.lazy.js')} type="text/javascript"/>,
        <script src={withPrefix('js/ashton_lazy.js')} type="text/javascript"/>,
        <script src={withPrefix('js/plugins/ashton-elementor/assets/js/modulobox.js')} type="text/javascript"/>,
        <script src={withPrefix('js/plugins/ashton-elementor/assets/js/jquery.parallax-scroll.js')}
                type="text/javascript"/>,
        <script src={withPrefix('js/plugins/ashton-elementor/assets/js/jquery.smoove.js')} type="text/javascript"/>,
        <script src={withPrefix('js/plugins/ashton-elementor/assets/js/parallax.js')} type="text/javascript"/>,
        <script src={withPrefix('js/plugins/ashton-elementor/assets/js/jquery.blast.js')} type="text/javascript"/>,
        <script src={withPrefix('js/plugins/ashton-elementor/assets/js/jarallax.js')} type="text/javascript"/>,
        <script src={withPrefix('js/plugins/ashton-elementor/assets/js/jquery.sticky-sidebar.js')}
                type="text/javascript"/>,
        <script src={withPrefix('js/plugins/ashton-elementor/assets/js/ashton-elementor.js')}
                type="text/javascript"/>,
        <script src={withPrefix('js/plugins/ui/core.js')} type="text/javascript"/>,
        <script src={withPrefix('js/plugins/ashton-elementor/assets/js/tweenmax.min.js')} type="text/javascript"/>,
        <script src={withPrefix('js/plugins/ashton-plugins.js')} type="text/javascript"/>,
        <script src={withPrefix('js/plugins/ashton-custom.js')} type="text/javascript"/>,
        <script src={withPrefix('js/plugins/jquery-tooltipster.js')} type="text/javascript"/>,
        <script src={withPrefix('js/plugins/loftloader/assets/js/loftloader.min.js')} type="text/javascript"/>,
        <script src={withPrefix('js/plugins/ashton-elementor/assets/js/jquery.animatedheadline.js')}
                type="text/javascript"/>,
        <script src={withPrefix('js/plugins/elementor/assets/lib/jquery-numerator/jquery-numerator.js')}
                type="text/javascript"/>,
        <script src={withPrefix('js/plugins/ashton-elementor/assets/js/flickity.pkgd.js')} type="text/javascript"/>,
        <script src={withPrefix('js/plugins/ashton-elementor/assets/js/jquery.animatedheadline.js')}
                type="text/javascript"/>,
        <script src={withPrefix('jjs/plugins/ashton-elementor/assets/js/owl.carousel.min.js')}
                type="text/javascript"/>,
        <script src={withPrefix('js/plugins/elementor/assets/lib/jquery-numerator/jquery-numerator.js')}
                type="text/javascript"/>,
        <script src={withPrefix('js/plugins/elementor/assets/js/webpack.runtime.js')} type="text/javascript"/>,
        <script src={withPrefix('js/plugins/elementor/assets/js/frontend-modules.js')} type="text/javascript"/>,
        <script src={withPrefix('js/plugins/elementor/assets/lib/waypoints/waypoints.js')} type="text/javascript"/>,
        <script src={withPrefix('js/regados.js')} type="text/javascript"/>,
        <script src={withPrefix('js/plugins/elementor/assets/js/frontend.js')} type="text/javascript"/>,
    ])
}
