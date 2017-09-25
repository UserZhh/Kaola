

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
        })
    }
    componentWillReceiveProps(props,state){
        // this.getHotSearchWord(props)
    }
    showHotWords(){
        let that = this
        let arr = []
        let list = this.state.dataList

        if(list){
            // console.log(list)
            for(var i=0;i<list.length;i++){
                arr.push(<li className="swiper-slide"><a href="###">{list[i].categoryName}</a></li>)
            }
        }
        
        // list.forEach(item,i){
        //     arr+='<li>'+item.categoryName+'</li>'
        // };
        
        return arr;
    }

    render(){

        return (
        <div className="swiper-container content__header__nav">
            <ul className="swiper-wrapper">
                {this.showHotWords()}
            </ul>
        </div>
        )
    }
    componentDidMount(){
    this.myswiper = new Swiper(".content__header__nav",{
            freeMode : false,
            slidesPerView : 'auto',
            freeModeSticky : true ,

        })
    }
    componentDidUpdate(){
        this.myswiper.update()
    }
}

//定义默认属性
NavsComponent.defaultProps={

}



export default NavsComponent