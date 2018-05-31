import React,{Component} from "react";
import data from "../../libs/data";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './ListItem.css'


class ListItem extends Component{
    constructor(){
        super();
        this.state={
            id:''
        }
    }
    render(){
        return (
            <li className="list-item">
                <img src={this.props.content.img} alt=""/>
                <Link to={"/content/"+this.state.id+"/"+this.props.content.title}>
                    <div className="item-info">
                        <h3 style={{'WebkitBoxOrient': 'vertical'}}>{this.props.content.title}</h3>
                        <p style={{'WebkitBoxOrient': 'vertical'}}>
                            {this.props.content.desc}
                        </p>
                    </div>
                </Link>
            </li>
        )
    }

    componentDidMount(){
        this.setState({
            id:this.props.content.id.replace(/\//g,'-')
        })
    }
}

export default ListItem;