import styled from 'styled-components'

//Components
const Button = styled.button`
    font-family: Arial;
    color: #ffffff;
    font-size: 20px;
    margin-top:1em;
    margin-left: 0.5em;
    background: #738fff;
    padding: 10px 20px 10px 20px;
    border: solid #1f628d 2px;
    text-decoration: none;    
    &:hover{
        background-image: -webkit-linear-gradient(top, #00d5ff, #e785ff);
        background-image: -moz-linear-gradient(top, #00d5ff, #e785ff);
        background-image: -ms-linear-gradient(top, #00d5ff, #e785ff);
        background-image: -o-linear-gradient(top, #00d5ff, #e785ff);
        background-image: linear-gradient(to bottom, #00d5ff, #e785ff);
        text-decoration: none;
    }
    &:active{
        color:blue;
    }
`

const ButtonSmall = styled.button`
font-family: Arial;
    color: #ffffff;
    font-size: 16px;
    margin-top: 0.5em;
    margin-left: 0.5em;
    background: #738fff;
    padding: 5px 10px 5px 10px;
    border: solid #1f628d 2px;
    text-decoration: none;    
    &:hover{
        background-image: -webkit-linear-gradient(top, #00d5ff, #e785ff);
        background-image: -moz-linear-gradient(top, #00d5ff, #e785ff);
        background-image: -ms-linear-gradient(top, #00d5ff, #e785ff);
        background-image: -o-linear-gradient(top, #00d5ff, #e785ff);
        background-image: linear-gradient(to bottom, #00d5ff, #e785ff);
        text-decoration: none;
    }
    &:active{
        color:blue;
    }
`

const Input = styled.input`
    margin: 0.5em 0.5em;
    width:200px;
    border: 3px solid #999;
    transition: 0.5s;
    -webkit-transition: 0.5s;
    outline: none;
    

    &:focus{

        border: 3px solid #555;
    }
`
const Notification = styled.div`
    border: 3px solid ${props => props.error ? 'red' : 'green'};
    background: ${props => props.error ? '#f54263' : '#42f581'};
    position: absolute;
    z-index: 101;
    top: 0;
    left: 0;
    right: 0;
    text-align: center;
    line-height: 2.5;
    overflow: hidden; 
    -webkit-box-shadow: 0 0 5px black;
    -moz-box-shadow:    0 0 5px black;
    box-shadow:         0 0 5px black;
    
    @keyframes slideDown {
        0%, 100% { -webkit-transform: translateY(-50px); }
        10%, 90% { -webkit-transform: translateY(0px); }
    }
    @-webkit-keyframes slideDown {
        0%, 100% { -webkit-transform: translateY(-50px); }
        10%, 90% { -webkit-transform: translateY(0px); }
    }

    transform: translateY(-50px);
    animation: slideDown 2.5s 1.0s 1 ease forwards;
    -webkit-transform: translateY(-50px);
    -webkit-animation: slideDown 2.5s 1.0s 1 ease forwards;
`
const Title = styled.h1`
    color: blue;
    font-family: sans-serif;
`

//Containers
const Page = styled.div`
    margin: 1em;
    background: #b1cbcc;
`

const Form = styled.form`
    background: #ccc;
    text-align:left;
`

const BlogsWrapper = styled.div`
    background: #ccc;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-flow: wrap;

    @media (max-width: 768px) {
        flex-direction: column;
    }
    & hr {
        width: 100%;
    }
`

const BlogContainer = styled.div`
    margin-bottom: 1em;
    border: outset 2px #6D6A94;
    padding:1em;
    border-radius: 0 0 0 0;

    &:nth-child(2n) {
        background: silver;
    }
`



export {Button, ButtonSmall, Input, Form, Notification, Title, BlogsWrapper, Page, BlogContainer}