import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;500&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: unset;
        font-family: 'Montserrat', sans-serif;
    }
    :root{
        --shadow: 0 1px 1px 0 rgb(0 0 0 / 10%);
        --radius: 4px;
    }
    a{
        text-decoration: none;
    }
    img{
        max-width: 100%;
    }
    body{
        background-color: #ebebeb;
    }
    button{
        cursor: pointer;
    }
    ul{
        list-style: none;
    }
    ul li{
        display: inline;
    }
    .slick-dots{
        bottom: 20px;
        li button:before{
            color: white !important;
            opacity:.6;
        }
        li.slick-active button:before {
            opacity: 1;
            color: white;
            transform: scale(1.5);
        }
    }
     .discover__item:first-child{
         margin-right:15px;
     }
`;
export default GlobalStyle;