import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: inherit;
  } 

  body {
    color: rgba(0, 0, 0, 0.87);
    margin: 0;
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 1.43;
    letter-spacing: 0.01071em;
    background-color: #fff;
    font-family: 'Noto Sans HK', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Bebas Neue', cursive;
  }

  a {
    
    text-decoration: none;
    cursor: pointer;
    color: #999;
    transition: color 0.25s ease-in;
    &:hover {
      color: #333;
    }
  }

  img {
    width: 270px;
    margin-top: 40px;
  }
`

export default GlobalStyle