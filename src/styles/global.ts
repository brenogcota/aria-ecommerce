import { createGlobalStyle } from 'styled-components'

import 'antd/dist/antd.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:regular,bold,italic&subset=latin,latin-ext');
    
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    *:focus {
        outline: 0;
    }

    html, body, #root {
        height: 100%;
        background: #f5f5f5;
    }

    body, input, button {
        font: 14px 'Open sans', sans-serif;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
        outline: none;
    }

    button {
        cursor: pointer;
    }
`
