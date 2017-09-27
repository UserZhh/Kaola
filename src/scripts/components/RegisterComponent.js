
import { Link } from 'react-router'
import $ from 'jquery'


class RegisterComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
            bgColor:'',
            userID:'',
            password:'',
            phoneInp:false,
            passwordInp:false,
            authInp:false,
            Regtest:false
            // isRegistered:false
          
        }
    }
    componentDidMount(){
        
    }
    rndCode(){
        let str = "abcdefghijkmnpqrstuvwxyzABCDEFGHIJKLMNPQRSTUVWXYZ23456789";
        let len = str.length;
        let ind1 = parseInt(Math.random()*len);
        let ind2 = parseInt(Math.random()*len);
        let ind3 = parseInt(Math.random()*len);
        let ind4 = parseInt(Math.random()*len);
  
        return str[ind1]+str[ind2]+str[ind3]+str[ind4];

    }
        
    rndColor(){
        let r = Math.round(Math.random()*255);
        let g = Math.round(Math.random()*255);
        let b = Math.round(Math.random()*255);
        this.setState ({
            bgColor:"rgb("+r+","+g+","+b+")"
        })
        }
    register(){
        let that=this
        $.ajax({
            url:'http://datainfo.duapp.com/shopdata/userinfo.php',
            data:{
                status:'register',
                userID:that.state.userID,
                password:that.state.password
            },dataType:'json',
            // async : false,//取消异步
            success(results){
                console.log(results)
                // that.props.register({name:results.userID})
                if(results!=1){
                    // that.setState({
                    //     isRegistered:true
                    // })
                    console.log('error')
                }else{
                    that.state.Regtest=true
                    that.tologin()
                    // window.location.href = "#/login" 
                    console.log('success')
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
    passwordError(){
        let password=$(".input_password").val()
        let Pas=new RegExp("(?=.{6}).*", "g")
            if(Pas.test(password)){
                this.state.passwordInp=true
                $(".Reg-Content__errorTip").html("")
            }else{
                $(".Reg-Content__errorTip").html("密码最少6位")
            }
    	
    }
    authError(){
        
       if($(".input_auth").val()==$(".Reg-Content__check__img").html()){
                $(".Reg-Content__errorTip").html("")
                this.state.authInp=true
            }else{
                $(".Reg-Content__errorTip").html("验证码错误")
            }
            
    }
    tologin(){
        $(".input_phone").blur()
        $(".input_auth").blur()
        $(".input_password").blur()
        let val = false
        if(this.state.phoneInp&&this.state.passwordInp&&this.state.authInp&&this.state.Regtest){
            val = true
            if(val=true){
                 window.location.href = "#/login" 
            }  
        }
        return val

}
        
    changeValue(type,e){
            let obj = {}
            obj[type]=e.target.value
            this.setState(obj)
            this.phoneError()
            this.passwordError()
            }  
    render(){

        return (
            <div className="RegisterBox">

                <div className="Register-Top">
                    <Link to="/index"><img src="./img/register-logo.png"/></Link>
                    <p>注册</p>
                </div>

                <div className="Register-Content">
                    <div className="Reg-Content__phoneNum">
                    <input onBlur={this.changeValue.bind(this,'userID')} className="input_phone" type="text" placeholder="请输入手机号码"/>
                    </div>

                    <div className="Reg-Content__phonePas">
                    <input onBlur={this.changeValue.bind(this,'password')} className="input_password" type="password" placeholder="请输入密码"/>
                    </div>

                    <div className="Reg-Content__check">
                        <input type="text" onBlur={this.authError.bind(this)} className="input_auth" placeholder="请输入验证码"/>
                        <div onClick={this.rndColor.bind(this)} style={{background:this.state.bgColor}} className="Reg-Content__check__img">
                        {this.rndCode()}
                        </div>
                    </div>
                    <div className="Reg-Content__errorTip"></div>
                </div>         
                <div className="Reg-showtip"></div>
                <div className="Register-End">
                    <Link onClick={this.register.bind(this)}>
                        <button className="submit">注册</button>
                    </Link>
                    <Link to="/login" className="hasId">已有账号?登陆</Link>
                    <p>考拉FM注册服务协议</p>
                    <span>点击注册即表明你已阅读并同意</span>
                </div>
            </div>
        )
    }
}
//定义默认属性
RegisterComponent.defaultProps={

}



export default RegisterComponent