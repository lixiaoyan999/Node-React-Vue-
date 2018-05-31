import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import bannerImg from '../../static/images/banner2.jpg';
import Header from '../header/header.jsx';
import ListItem from '../header/ListItem.jsx'
import data from '../../libs/data'



class lists extends React.Component{
    constructor(){
        super();
        this.state = {
            lists:[]
        };
        this.ch = document.documentElement.clientHeight;
        this.nowpage = 1;
        this.allpages = 0;
        this.flag = false;
        this.loading = true;
    }
    handleScrool = ()=>{
        //DOM
        let ele = this.refs.load;
        let tops = ele.getBoundingClientRect().top;
        if(tops < this.ch && this.flag === false){
            this.flag = true;
            this.loading = false;
            this.getData();
        }
    };
    getData(){
        let type = this.props.match.params.type;
        data.getlist(type,this.nowpage).then(res=>{
            let data = res.showapi_res_body.pagebean;
            if(!this.allpages){
                this.allpages = data.allPages;
            }
            this.setState({
                lists:this.state.lists.concat(data.contentlist)
            });
            this.nowpage++;
            this.loading = true;
            if(this.nowpage<this.allpages){
                this.flag = false;
            }else{
                this.flag = true;
            }
        })

    }
    componentDidMount(){
        window.addEventListener('scroll',this.handleScrool);
        this.getData();
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.handleScrool);
    }
    render(){
        return(
            <div className="index-content">
                <Header title={this.props.match.params.value} isshow="true"/>
                <div className="banner">
                    <img src={bannerImg} alt=""/>
                </div>
                <div className="index-list-box">
                    <div className="index-list-title">
                        <h3><span></span> {this.props.match.params.value}</h3>
                    </div>
                    <ul className="index-list">
                        {
                            this.state.lists.map((value,index)=>{
                                return <ListItem  content={value} key={index}/>
                            })
                        }
                        <hr/>
                        <div className='loading' ref='load'>
                            {this.loading?'加载完毕':'正在加载...'}
                        </div>
                    </ul>
                </div>
            </div>
        )
    }
}
export default lists;
