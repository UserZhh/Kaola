
import PopUpComponent from "./PopUpComponent"
import {connect} from 'react-redux' 
import { Link } from 'react-router'
import store from '../redux/store'
import $ from 'jquery'

class HeaderComponent extends React.Component {   
    constructor(props,context){
        super(props,context)
        this.state = {
        	isShow:false,
        	myShow:false,
        	name:"未登录"
        }
    }
    	isMineShow(){
             this.setState({
                 myShow: !this.state.myShow
             })   
         }
        changeShow(){
             this.setState({
                 isShow: !this.state.isShow
             })   
        }
	componentWillMount(){

	}
	componentDidMount(){
		let myname = localStorage.name
		console.log(myname)
		if(localStorage.name){
	
			$(".Logined").css({"display":"block"})
			$(".login").css({"display":"none"})

			this.setState({
				name:myname
			})
		}
	}
	exit(){
		localStorage.name=""
		this.setState({
				name:"未登录"
			})
		$(".login").css({"display":"block"})
		$(".Logined").css({"display":"none"})
	}
	mylogin(){
                     	
		
	}
    render(){
        return (
            <div className="header usesearch">
                    <a href="/" className="left">
                        <img className="logo-i" src="./img/logo.png"/>
                    </a>
                    <div className="right">
                        <div className="menu left">
                            <img className="menu-i" src="./img/menu.png" onClick={this.changeShow.bind(this)}/> <a>菜单</a>
                        </div>
                        <div className="login left">
                            <img className="uimg-i" src="./img/uimg.png"/> 
                            <a href='#/login'>登陆</a> 	
                        </div>
                        <div className="Logined">
                        	<img className="uimg-i" src="./img/uimg.png"/> 
                           	<span className="login-mine" onClick={this.isMineShow.bind(this)} >我的</span>
                           	<div className="Logined-my" style={this.state.myShow?{display:'block'}:{display:'none'}}>

                           	<p>welcome,{this.state.name}</p>
                           	<a className="exit-btn" onClick={this.exit.bind(this)}>注销</a>
                         </div>
                    
                        </div>
                    </div>
                    <div className='menubox'>
                    <PopUpComponent isShow={this.state.isShow}/>
                    </div>
            </div>
        )
    }
}
//定义默认属性
HeaderComponent.defaultProps={

}



// export default HeaderComponent
const mapStateToProps = (state)=>{
	return {
		user:state.userInfo
	}
}
//const mapStateToProps = state=>state;

export default connect(mapStateToProps)(HeaderComponent)