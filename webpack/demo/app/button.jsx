
    import React from 'react';
    import Config from './config';
    import './button.scss'
    class Button extends React.Component{
        render(){
           return(<button>{Config.text}</button>)
        }
    }
    export default Button
