

import SortHeader from './SortHeader'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import HistoryNavs from './HistoryNavs'

class History extends React.Component {   
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
                <SortHeader name="历史" />
                <HistoryNavs hash="history"/>
                <div className="no-more">没有更多了 (ฅ•ω•ฅ)</div>
                <FooterComponent />
            </div>
        )
    }
}
//定义默认属性
History.defaultProps={

}



export default History