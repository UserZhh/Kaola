



class HeaderComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
          
        }
    }
    componentWillMount(){
        
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
                            <img className="menu-i" src="./img/menu.png"/> <span>菜单</span>
                        </div>
                        <div className="login left">
                            <img className="uimg-i" src="./img/uimg.png"/> <span>登录</span>
                        </div>
                    </div>
            </div>
        )
    }
}
//定义默认属性
HeaderComponent.defaultProps={

}



export default HeaderComponent