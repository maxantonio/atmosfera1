import React, { useState, useLayoutEffect } from "react"

const LangContext = React.createContext({
  lang: "",
  currentLangData: {},
  switchLang: () => {
  }
})

export default LangContext

export function LangProvider(props) {

  const [lang, setLang] = useState('es')

  useLayoutEffect(() => {
    const selectedLang = window.sessionStorage.getItem("appUILang")

    if (selectedLang) {
      setLang(selectedLang)
    }
  }, [lang])

  const switchLang = (ln,path) => {
    window.sessionStorage.setItem("appUILang", ln)
    if (path === '/' && ln === "en"){
      window.location.pathname='/en'

    }
    else if ((path === '/en' && ln === "es") || (path === '/en/' && ln === "es")){
      window.location.pathname='/'
    }
    else if (ln === "en") {
      window.location.pathname = window.location.pathname.replace("/es/", "/en/")
    }else{
      window.location.pathname = window.location.pathname.replace("/en/", "/es/")
    }
  }

  return (
    <LangContext.Provider value={{
      lang,
      switchLang
    }}>
      {props.children}
    </LangContext.Provider>
  )
}

