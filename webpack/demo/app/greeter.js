/*module.exports = function () {
    let text = require('./config');
    let greet = document.createElement('div');
    greet.textContent = text.text;
    return greet;
}*/
    import React from 'react';
    // import styles from './greeter.css'


class Greeter extends React.Component{
        render(){
           // return(<div className={styles.root}>jsx</div>)
            return(<div>jsx</div>)
        }
    }
    export default Greeter

