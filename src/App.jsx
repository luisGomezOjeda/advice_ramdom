import { useState, useEffect } from 'react'
import { InfoAdvence } from './components/infoAdvence/InfoAdvence'
import { InfoTips } from './components/InfoTips/InfoTips'
import { ButtomRamdomTip } from './components/ButtomRamdomTip/ButtomRamdomTip'
import { StyledFigure, Main, StyledDecoration } from "./styled/StyledFigure.js"
import iconDecoration from "./assets/pattern-divider-desktop.svg"

const url = "https://api.adviceslip.com/advice"

function App() {
  const [advence, setAdvence] = useState("")
  const [tip, setTip] = useState("")

  const fetchApi = async () => {
    const res = await fetch(url);
    const json = await res.json()
    console.log(json.slip.advice)
    setAdvence(json.slip.id)
    setTip(json.slip.advice)
  }

  useEffect(() => {
    fetchApi()
  }, [])

  return (
    <Main>
    <StyledFigure>
    <article>
    { advence !== undefined && <InfoAdvence advence = { advence }/>}
      
      { tip !== undefined && <InfoTips tip = { tip }/>}
    </article>

    <StyledDecoration>
      <img src= {iconDecoration} />
    </StyledDecoration>

      <ButtomRamdomTip setAdvence = { setAdvence } setTip = { setTip } fetchApi= { fetchApi }/>

    </StyledFigure>  

    </Main>  
  )
}

export default App
