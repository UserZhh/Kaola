
import { Link } from 'react-router'
import $ from 'jquery'
import {connect} from 'react-redux' 
import store from '../redux/store'


class LoginComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
            userID:'',
            password:'',
            logphone:false,
            logintest:false
        }
    }
    componentWillMount(){
        
    }
    Login(info){
    	console.log(info)
    	this.props.changeUserInfo(info)
//  	actions.changeUserInfo(info)
    }
    login(){
//  	console.log(info)
        let that=this
        let phone=$('.login-input_phone').val()
        let Pho=/^1[3578]\d{9}$/
        if(Pho.test(phone)){
            $(".Login-Content__errorTip").html("")
            $.ajax({
                url:'http://datainfo.duapp.com/shopdata/userinfo.php',
                data:{
                    status:'login',
                    userID:that.state.userID,
                    password:that.state.password
                },dataType:'json',
                success(results){
                    console.log(results)
//                    that.props.Login({name:results.userID})
                    if(results==0){
                        $(".Login-Content__errorTip").html("用户名不存在")
                    }else if(results==2){
                        $(".Login-Content__errorTip").html("密码错误")    
                    }else{
                        $(".Login-Content__errorTip").html("")
                        // that.state.logintest=true
                        localStorage.name = that.state.userID
                        window.location.href = "#/index"
                        console.log('success')
                    }
                }
            })
        }else{
        	 $(".Login-Content__errorTip").html("请输入正确格式的手机号码")
        }
           
    }
 

    phoneError(){
        let phone=$('.login-input_phone').val()
        let Pho=/^1[3578]\d{9}$/
        if(Pho.test(phone)){
            $(".Login-Content__errorTip").html("")
            this.state.logphone=true
        }else{
            $(".Login-Content__errorTip").html("手机号码格式错误")
        }
    }
   
    changeValue(type,e){
        let obj = {}
        obj[type]=e.target.value
        this.setState(obj)
        
    }  
    render(){

        return (
            <div className="LoginBox">

                <div className="Login-Top">
                    <Link to="/index"><img src="./img/register-logo.png"/></Link>
                    <p>登陆</p>
                </div>

                <div className="Login-Content">
                    <div className="Login-Content__phoneNum">
                    <input onBlur={this.changeValue.bind(this,'userID')} className="login-input_phone" type="text" placeholder="请输入手机号码"/>
                    </div>

                    <div className="Login-Content__phonePas">
                    <input onBlur={this.changeValue.bind(this,'password')} className="login-input_password" type="password" placeholder="请输入密码"/>
                    </div>
                    <div className='Login-Content__errorTip'>
                        
                    </div>
                </div>         
                <div className="Login-End">
                    <Link onClick={this.login.bind(this)}> 
                    <button className="submit">登陆</button>
                    </Link>
                    <Link to="/register">没有账号?点击注册</Link>
                </div>
            </div>
        )
    }
}
//定义默认属性
LoginComponent.defaultProps={

}



// export default LoginComponent
//生成容器组件
//const mapStateToProps = (state)=>{
//  return state
//  
//}
//export default connect(mapStateToProps)(LoginComponent)
const mapDispatchToProps = (dispatch)=>{
	return {
		changeUserInfo:(info)=>{
			dispatch({type:'CHANGE_USER_INFO',info:info})
		}
	}
}
export default connect(state=>state,mapDispatchToProps)(LoginComponent)
