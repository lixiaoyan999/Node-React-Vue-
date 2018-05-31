import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from '../header/header.jsx';
import ListItem from '../header/ListItem.jsx'
import '../../static/iconfont/iconfont.css';
import bannerImg from '../../static/images/banner1.jpg';
import data from '../../libs/data';
import './home.css';


class Home extends React.Component{
    constructor(){
        super();
        this.state = {
            cate:[]
        }
    }
    componentDidMount(){
        this.setState({
            cate:data.cate.slice(0,3)
        })
    }
    render(){
        return(
            <div className="index-content">
                <Header title={this.props.match.params.title} isshow="true"/>
                <div className="banner">
                    <img src={bannerImg} alt=""/>
                </div>
                {
                    this.state.cate.map((item,index)=>(<Listbox value={item.value} type={item.type} key={index}/>))
                }
            </div>
        )
    }
}

class Listbox extends  Component{
    constructor(){
        super();
        this.state={
            lists:[]
        }
    }
    render(){
        return (
            <div className="index-list-box">
                <div className="index-list-title">
                    <h3><span></span> {this.props.value}</h3>
                    <Link to={'/list/' + this.props.type + '/' + this.props.value}>
                        <span className="iconfont icon-gengduo-tianchong"> </span>
                    </Link>
                </div>
                <ul className="index-list">
                    {
                        this.state.lists.map((value,index)=>{
                            return <ListItem  content={value} key={index}/>
                        })
                    }
                </ul>
            </div>
        )
    }
    componentDidMount(){
        data.getlist(this.props.type,1).then(res=>{
            this.setState ({
                lists:res.showapi_res_body.pagebean.contentlist.slice(0,5)
            })
        })
    }
}

export default Home;