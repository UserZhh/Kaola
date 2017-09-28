

import SortHeader from './SortHeader'
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
                <SortHeader name="电影全部" />
                <MoviesNavsComponent  hash="movie"/>
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