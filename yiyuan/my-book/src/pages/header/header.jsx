import React,{Component} from 'react';
import '../../static/iconfont/iconfont.css';
import './header.css'

class header extends Component{
    handleClick(){
        window.history.back();
    }
    render (){
        return(
                <header>
                    <span className="iconfont icon-fanhui" style={{'visibilty':(this.props.isshow=='true'?'visible':'hidden')}} onClick={this.handleClick}> </span>
                    <span>{this.props.title}故事</span>
                    <span></span>
                </header>
        )

    }
}
export default header;