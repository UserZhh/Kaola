
import Fetch from '../modules/fetch'
// import NavsComponent from './NavsComponent'
import HeaderComponent from './HeaderComponent'
import MusicUPComponent from './MusicUPComponent' 
import FooterComponent from './FooterComponent'

class MusicComponent extends React.Component {
    
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
        Fetch.Get('http://localhost:9000/ddd/webapi/audios/list?id=1100000199634&pagesize=15&pagenum='+that.state.pageNum+'&sorttype=1',{}).then(res=>{return res.json()}).then(json=>{
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
                arr.push(<li className="swiper-slide music-swiper"><a className="music-times" href="#/musicup">{list[i].orderNum}期:{list[i].audioName}</a><span className="back"></span></li>)
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
                    <p>阳光书签</p>
                </div>
                <div className="zj-name">
                    <div className="zj-picbg">
                        <img src="http://img.kaolafm.net/mz/images/201606/1c78e766-97c4-499f-8155-c462378a127a/250_250.jpg" title="阳光书签" alt="阳光书签"/>
                    </div>
                    <div className="zj-bg"></div>
                    <div className="zj-name-cont">
                        <div className="zj-name-play">
                            <div className="left">
                                <div className="left-bg">
                                    <img src="http://img.kaolafm.net/mz/images/201606/1c78e766-97c4-499f-8155-c462378a127a/250_250.jpg" title="阳光书签" alt="阳光书签"/>
                                </div>
                                <div id="div_top_play" className="play-btn ic-play zj-play"></div>
                            </div>
                            <div className="right">
                                <h1>阳光书签</h1>
                                <p className="p-anchor">上传者：<span>上官文露</span></p>
                            </div>
                        </div>
                        <div className="zj-brief">
                            <div className="div-brief-scroll">
                                <div className="div-brief">
                                    <p id="p-brief">
                                        Sunshine Creek 一缕阳光，一枚书签。！
                                        <br/>
                                        （微博—上官文露 微信公众号—上官文露 微信群—ai212223 ）！
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
                        	<span id="span-zjlist-num" className="number">(65)</span>
                        </div>
                        <div className='program-list'>
                            <div className="swiper-wrapper">
				                <div className="his_left">
				                	{this.showHotWords()}
				                </div>
				                
				            </div>
                        </div>
                        
                    </div>
                    
                    <div id="div_load_more"  onClick={this.getHotSearchWord.bind(this)}className="program-more">加载更多节目</div>
                    
                    <div className="recommend">
                        <div className="title"><i></i><span>相关推荐</span></div>
                    </div>
                    <FooterComponent/>
                
                </div>
            </div>
        )
    }
}


export default MusicComponent