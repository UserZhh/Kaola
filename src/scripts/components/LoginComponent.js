
import { Link } from 'react-router'
import $ from 'jquery'
import {connect} from 'react-redux' 
import store from '../redux/store'
//                            _ooOoo_
//                           o8888888o
//                           88" . "88
//                           (| -_- |)
//                            O\ = /O
//                        ____/`---'\____
//                      .   ' \\| |// `.
//                       / \\||| : |||// \
//                     / _||||| -:- |||||- \
//                       | | \\\ - /// | |
//                     | \_| ''\---/'' | |
//                      \ .-\__ `-` ___/-. /
//                   ___`. .' /--.--\ `. . __
//                ."" '< `.___\_<|>_/___.' >'"".
//               | | : `- \`.;`\ _ /`;.`/ - ` : | |
//                 \ \ `-. \_ __\ /__ _/ .-` / /
//         ======`-.____`-.___\_____/___.-`____.-'======
//                            `=---='
//
//         .............................................
//                  佛祖保佑             永无BUG


class LoginComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
            userID:'',
            password:'',
  
        }
    }
    componentWillMount(){
        
    }
    login(){
        let that=this
        $.ajax({
            url:'http://datainfo.duapp.com/shopdata/userinfo.php',
            data:{
                status:'login',
                userID:that.state.userID,
                password:that.state.password
            },dataType:'json',
            success(results){
                console.log(results)
                // that.props.login({name:results.userID})
                if(results==0){
                    $(".Login-Content__errorTip").html("用户名不存在")
                }else if(results==2){
                    $(".Login-Content__errorTip").html("密码错误")    
                }else{
                    window.location.href='#/index'
                }
            }
        })
        
    }
 

    phoneError(){
        let phone=$('.input_phone').val()
        let Pho=/^1[3578]\d{9}$/
        if(Pho.test(phone)){
            $(".Reg-Content__errorTip").html("")
            this.state.phoneInp=true
        }else{
            $(".Reg-Content__errorTip").html("手机号码格式错误")
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
                    <input onBlur={this.changeValue.bind(this,'userID')} type="text" placeholder="请输入手机号码"/>
                    </div>

                    <div className="Login-Content__phonePas">
                    <input onBlur={this.changeValue.bind(this,'password')} type="password" placeholder="请输入密码"/>
                    </div>
                    <div className='Login-Content__errorTip'>
                        
                    </div>
                </div>         
                <div className="Login-End">
                    <button onClick={this.login.bind(this)} className="submit">登陆</button>
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
const mapStateToProps = (state)=>{
    return state
    
}
export default connect(mapStateToProps)(LoginComponent)