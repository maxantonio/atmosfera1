jQuery(document).ready(function () {
    jQuery(".themegoods-parallax").jarallax({
        speed: 0.8,
    });
});

/* <![CDATA[ */
var ashtonPluginParams = {backTitle: "Back"};
/* ]]> */


/* <![CDATA[ */
var tgAjax = {ajaxurl: "#", ajax_nonce: "530e41beca"};
var ashtonParams = {
    menulayout: "leftalign",
    fixedmenu: "1",
    footerreveal: "",
    headercontent: "content",
    lightboxthumbnails: "no_thumbnail",
    lightboxtimer: "7000"
};
/* ]]> */

jQuery(function ($) {
    jQuery(".demotip").tooltipster({
        position: "left",
        multiple: true,
        theme: "tooltipster-shadow",
        delay: 0,
    });
});

var elementorFrontendConfig = {
    environmentMode: {edit: false, wpPreview: false, isScriptDebug: true},
    i18n: {
        shareOnFacebook: "Share on Facebook",
        shareOnTwitter: "Share on Twitter",
        pinIt: "Pin it",
        download: "Download",
        downloadImage: "Download image",
        fullscreen: "Fullscreen",
        zoom: "Zoom",
        share: "Share",
        playVideo: "Play Video",
        previous: "Previous",
        next: "Next",
        close: "Close",
    },
    is_rtl: false,
    breakpoints: {xs: 0, sm: 480, md: 768, lg: 1025, xl: 1440, xxl: 1600},
    responsive: {
        breakpoints: {
            mobile: {label: "Mobile", value: 767, direction: "max", is_enabled: true, default_value: 767},
            mobile_extra: {
                label: "Mobile Extra",
                value: 880,
                direction: "max",
                is_enabled: false,
                default_value: 880
            },
            tablet: {label: "Tablet", value: 1024, direction: "max", is_enabled: true, default_value: 1024},
            tablet_extra: {
                label: "Tablet Extra",
                value: 1365,
                direction: "max",
                is_enabled: false,
                default_value: 1365
            },
            laptop: {label: "Laptop", value: 1620, direction: "max", is_enabled: false, default_value: 1620},
            widescreen: {
                label: "Widescreen",
                value: 2400,
                direction: "min",
                is_enabled: false,
                default_value: 2400
            },
        },
    },
    version: "3.3.1",
    is_static: false,
    experimentalFeatures: {
        e_dom_optimization: true,
        e_optimized_assets_loading: true,
        e_optimized_css_loading: true,
        a11y_improvements: true
    },
    urls: {assets: "https:\/\/themes.themegoods.com\/ashton\/wp-content\/plugins\/elementor\/assets\/"},
    settings: {page: [], editorPreferences: []},
    kit: {
        active_breakpoints: ["viewport_mobile", "viewport_tablet"],
        global_image_lightbox: "yes",
        lightbox_enable_counter: "yes",
        lightbox_enable_fullscreen: "yes",
        lightbox_enable_zoom: "yes",
        lightbox_enable_share: "yes",
        lightbox_title_src: "title",
        lightbox_description_src: "description",
    },
    post: {
        id: 82,
        title: "Ashton%20%7C%20Lawyer%20%26%20Attorney%20WordPress%20Theme%20%E2%80%93%20Just%20another%20WordPress%20site",
        excerpt: "",
        featuredImage: false
    },
};