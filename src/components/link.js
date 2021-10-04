import React, { useContext } from "react"
import { Link as GatsbyLink, } from "gatsby"
import LangContext from '../context/LangContext';
const CustomLink = ({  to, ref, ...rest }) => {
  const {  lang } = useContext(LangContext);
  return <GatsbyLink {...rest} to={"/"+lang +'/'+ to}/>
}

export default CustomLink