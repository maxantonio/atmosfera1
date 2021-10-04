/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

import {confirmAlert} from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css';
export const wrapRootElement = ({ element }) => {
    return (
        <GoogleReCaptchaProvider useRecaptchaNet reCaptchaKey="6LcYnpkaAAAAAMu0uTl7OyCCYgBKGYoLNpUdc5eR">
            {element}
        </GoogleReCaptchaProvider>
    )
}

const $ = require("jquery")


export const onInitialClientRender = () => {


}
