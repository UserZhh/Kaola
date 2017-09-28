
import Fetch from '../modules/fetch'
// import NavsComponent from './NavsComponent'
import HeaderComponent from './HeaderComponent'
import HistoryUPComponent from './HistoryUPComponent'
import FooterComponent from './FooterComponent'

class HistoryComponent extends React.Component {
    
    constructor(props,context){
        super(props,context)

        this.state={
            dataList:[],
            pageNum:1
          
        }
    }
    
    componentWillMount(){
        this.getHotSearchWord(this.props)
    }
    getHotSearchWord(props){
        let that = this
        Fetch.Get('http://localhost:9000/ddd/webapi/audios/list?id=1100000013301&pagesize=15&pagenum='+that.state.pageNum+'&sorttype=1',{}).then(res=>{return res.json()}).then(json=>{
            that.setState({hot_search:json,
                dataList: that.state.dataList.length?that.state.dataList.concat(json.result.dataList):json.result.dataList,
            	pageNum: ++that.state.pageNum})
        })
    }
      componentWillReceiveProps(props,state){
        this.getHotSearchWord(props)
    }
    showHotWords(){
        let that = this
        let arr = []
        let list = this.state.dataList

        if(list){
            console.log(list)
            for(var i=0;i<list.length;i++){
                arr.push(<li className="swiper-slide history-swiper"><a className="history-times" href="#/historyup">{list[i].orderNum}期:{list[i].audioName}</a><span className="back"></span></li>)
            }
        }
                            
        
        // list.forEach(item,i){
        //     arr+='<li>'+item.categoryName+'</li>'
        // };
        
        return arr;
    }

    render(){
        return (
            <div className='container'>
                <HeaderComponent/>
                <div className="top-title">
                    <p>历史揭秘</p>
                </div>
                <div className="zj-name">
                    <div className="zj-picbg">
                        <img src="http://img.kaolafm.net/mz/images/201402/c40aaf13-7bc9-4d2b-a10e-9a7f1613ffec/250_250.jpg" title="电影罐头" alt="电影罐头"/>
                    </div>
                    <div className="zj-bg"></div>
                    <div className="zj-name-cont">
                        <div className="zj-name-play">
                            <div className="left">
                                <div className="left-bg">
                                    <img src="http://img.kaolafm.net/mz/images/201402/c40aaf13-7bc9-4d2b-a10e-9a7f1613ffec/250_250.jpg" title="电影罐头" alt="电影罐头"/>
                                </div>
                                <div id="div_top_play" className="play-btn ic-play zj-play"></div>
                            </div>
                            <div className="right">
                                <h1>历史揭秘</h1>
                                <p className="p-anchor">上传者：<span>舒奕</span></p>
                            </div>
                        </div>
                        <div className="zj-brief">
                            <div className="div-brief-scroll">
                                <div className="div-brief">
                                    <p id="p-brief">
                                        带您了解您不了解的历史内幕！
                                        <br/>
                                        这是一档由车语传媒独家出品的原创节目。
                                        每天一期带你挖掘历史内幕，揭秘历史隐情。
                                        我们用幽默的语言，轻松的态度带你穿越古今中外，在这里，真相只有一个！
                                        <br/>
                                        <br/>
                                        网友@XX评论：终于找到一个自己喜欢的节目，非常不错！主持人讲的不错！
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
   
                 <div className="zj-wrapinner">
                    <div className="program">
                        <div className="title">
                        	<i></i>节目
                        	<span id="span-zjlist-num" className="number">(1058)</span>
                        </div>
                        <div className='program-list'>
                            <div className="swiper-wrapper">
				                <div className="his_left">
				                	{this.showHotWords()}
				                </div>
				                
				            </div>
                        </div>
                        
                    </div>
                    
                    <div id="div_load_more" onClick={this.getHotSearchWord.bind(this)} className="program-more">加载更多节目</div>
                    
                    <div className="recommend">
                        <div className="title"><i></i><span>相关推荐</span></div>
                    </div>
                    <FooterComponent/>
                
                </div>
                
            </div>
        )
    }
    componentDidMount(){
    this.myswiper = new Swiper(".program-list",{
            freeMode : false,
            direction : 'vertical',
            slidesPerView : 'auto',
            freeModeSticky : true ,
			
        })
    }
    componentDidUpdate(){
        this.myswiper.update()
    }
}




export default HistoryComponent