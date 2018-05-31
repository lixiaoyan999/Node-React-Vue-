import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from '../header/header';
import data from '../../libs/data';
import './content.css'


class Content extends React.Component{
    constructor(){
        super();
        this.state = {
            text:''
        }
    }
    componentDidMount(){
        let id=this.props.match.params.id.replace(/-/g,'/');
        data.getContent(id).then(res=>{
            this.setState({
                text:res.showapi_res_body.text.replace(/&nbsp;&nbsp;&nbsp;/g,'<br>')
            })
        })
    }
    render(){
        return(
                <div>
                    <Header title={this.props.match.params.title} isshow='true'/>
                    <div className="content" dangerouslySetInnerHTML={{__html:this.state.text}}>
                    </div>
                </div>
        )

    }
}
export default Content;
