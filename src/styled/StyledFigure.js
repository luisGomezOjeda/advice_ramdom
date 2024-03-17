import styled from "styled-components";

export const Main = styled.main`
    width: 100%;
    height: 100vh;
    background-color: hsl(218, 23%, 16%);
    display :grid;
    place-items: center;
`;

export const StyledDecoration = styled.figure`
    max-width: 100%;
    display: grid;
    place-items: center;
    margin-top: 30px;
    img {
        width: 100%;
    }

`;

export const StyledFigure = styled.figure`
    margin: 0;
    background-color: hsl(217, 19%, 24%);
    width: 35vw;
    height: 40vh;
    min-width: 300px;
    border-radius: 20px;
    box-shadow: 0 0 30px 0 hsla(225, 9%, 9%, 0.615);
    text-align: center;
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    
    h1{
        color :  hsl(150, 100%, 66%) ;  
        font-size: 1.6rem;
        letter-spacing: 5px;
        font-weight: 500;
        transition: 0.5s;
        
    }
    @media(max-width: 730px){
            h1 {
                font-size: 1.2rem;
            }
        }
    article {
        padding: 0 20px;


        p{
            color: #fff;
            font-size: 1vw;
            font-weight: 500;
            letter-spacing: 2px;
            line-height: 3.5rem;
            animation-name: animationtext;
            transition: 0.5s;
        }
        @media(max-width: 1120px){
            p {
                font-size: 1.4rem;
                line-height: 3rem;
                font-weight: 200;
            }
        }

    }
    buttom {
        position: absolute;
        background :  hsl(150, 100%, 66%);
        width: 90px;
        height: 90px;
        bottom: -50px;
        right: calc(50% - 45px);
        border-radius: 100%;
        display: grid;
        place-items: center;
        transition: 0.2s;
        cursor: pointer;
        
        &:hover {
            animation-duration: 0.5s;
            box-shadow: 0 0 15px 10px  hsl(193, 38%, 86%);
            transition: 0.2s;
        }

        img {
            width: 40px;
        }
        @media(max-width: 1120px){
            right: calc(50% - 23px);
            bottom: -30px;
            width: 50px;
            height: 50px;
            img {
                width: 25px;
            }
        }
    }
`;