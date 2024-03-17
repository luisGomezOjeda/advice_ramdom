import imgButton from "../../assets/icon-dice.svg"




export const ButtomRamdomTip = ({ fetchApi }) => {


  const clickButtom = () => {
    const h1 = document.querySelector("h1"),
    p = document.querySelector("p")
    console.log(h1)
    console.log(p)
    
    h1.style.color=" hsl(217, 19%, 24%)"
    p.style.color=" hsl(217, 19%, 24%)"
    
    fetchApi()
    setTimeout(()=>{
      h1.style.color="hsl(150, 100%, 66%)"
      p.style.color="#fff"
    },1000)
  }

  return (
    <buttom onClick = {clickButtom}>
        <img src= {imgButton} />
    </buttom>
  )
}
