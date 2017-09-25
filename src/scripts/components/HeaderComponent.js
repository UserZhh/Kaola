
import PopUpComponent from "./PopUpComponent"
import {connect} from 'react-redux' 
import { Link } from 'react-router'

class HeaderComponent extends React.Component {   
    constructor(props,context){
        super(props,context)
        this.state = {isShow:false}
    }
        changeShow(){
            /*  console.log(1) */
             this.setState({
                 isShow: !this.state.isShow
             })   
         }
    
    

    render(){
        return (
            <div className="header usesearch">
                    <a href="/" className="left">
                        <img className="logo-i" src="./img/logo.png"/>
                    </a>
                    <div className="right">
                        {/* <div className="search left" style="display: none;">
                            <i classNameName="search-i"></i> <span>搜索</span>
                        </div> */}
                        <div className="menu left">
                            <img className="menu-i" src="./img/menu.png" onClick={this.changeShow.bind(this)}/> <a>菜单</a>
                        </div>
                        <div className="login left">
                            <img className="uimg-i" src="./img/uimg.png"/> <Link to='/login'>{this.props.user.name||'登录'}</Link>
                        </div>
                    </div>
                    <div className='menubox'>
                    <PopUpComponent isShow={this.state.isShow} />
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
export default connect(mapStateToProps)(HeaderComponent)