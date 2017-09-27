
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import MoviesNavsComponent from './MoviesNavsComponent'

class MoviesComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
          
        }
    }
    componentWillMount(){
        
    }
    render(){

        return (
            <div>
                <HeaderComponent/>
                <div className="navbar" style={{position:"static",width: "353.66px", top: "0px", zIndex: "999"}}>
                    <ul id="ul_category_list">
                        <li className="need-touch">
                            <a href="/category/2296">电影全部
                                <div className="active"></div>
                            </a>
                        </li>
                    </ul>
                </div>
                <MoviesNavsComponent />
                <div className="no-more">没有更多了 (ฅ•ω•ฅ)</div>
                <FooterComponent />
            </div>
        )
    }
}
//定义默认属性
MoviesComponent.defaultProps={

}



export default MoviesComponent