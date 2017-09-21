

import Fetch from '../modules/fetch'

class NavsComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
            hot_search:[],
            swiper:null
        }
    }
    componentWillMount(){
        this.getHotSearchWord(this.props)
    }
    getHotSearchWord(props){
        let that = this
        Fetch.Get('http://localhost:9000/kaola/webapi/category/list?fid=0').then(res=>{return res.json()}).then(json=>{
            that.setState({hot_search:json,dataList:json.result.dataList})
            console.log(this.state.hot_search.result.dataList)
           
    
        })
    }
    componentWillReceiveProps(props,state){
        this.getHotSearchWord(props)
    }
    showHotWords(){
        let that = this
        let arr = []
        console.log(this.state.hot_search.result)
        
        return arr;
    }

    render(){

        return (
        <div className="swiper-container content__header__nav">
            <div className="swiper-wrapper">
                {this.showHotWords()}
            </div>
        </div>
        )
    }
    componentDidMount(){
        new Swiper(".content__header__nav",{
            freeMode : false,
            slidesPerView : 'auto',
            freeModeSticky : true ,

        })
    }
}

//定义默认属性
NavsComponent.defaultProps={

}



export default NavsComponent