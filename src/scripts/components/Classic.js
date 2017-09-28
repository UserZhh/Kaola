

import SortHeader from './SortHeader'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import ClassicNavs from './ClassicNavs'

class Classic extends React.Component {   
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
                <SortHeader name="典藏全部" />
                <ClassicNavs hash="music"/>
                <div className="no-more">没有更多了 (ฅ•ω•ฅ)</div>
                <FooterComponent />
            </div>
        )
    }
}
//定义默认属性
Classic.defaultProps={

}



export default Classic