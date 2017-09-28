

import SortHeader from './SortHeader'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import FunnyNavs from './FunnyNavs'

class Funny extends React.Component {   
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
                <SortHeader name="搞笑" />
                <FunnyNavs hash="history"/>
                <div className="no-more">没有更多了 (ฅ•ω•ฅ)</div>
                <FooterComponent />
            </div>
        )
    }
}
//定义默认属性
Funny.defaultProps={

}



export default Funny