
import Fetch from '../modules/fetch'

// import NavsComponent from './NavsComponent'
import HeaderComponent from './HeaderComponent'
import MoviesUPComponent from './MovieUPComponent'
import FooterComponent from './FooterComponent'

class MoveComponent extends React.Component {
    
    constructor(props,context){
        super(props,context)

        this.state={
            check_list:[]            
        }
    }
    searWord(){
		let that = this
		Fetch.Get("./json/movie.json",{
		}).then(res=>res.json()).then(json=>{
			// console.log(json)
			that.setState({check_list:json})
		})
    }
    showCheckList(){
    	let that = this;
        let arr=[]
        if(this.state.check_list.length!=0){
            var aa = this.state.check_list[0].list
            console.log(aa)
          aa.forEach((item,i)=>{
              console.log(i)
                   arr.push(
                    <div className="title">
                        <div>
                            <a href="#/movieup">{item.txt}</a>
                            <span className="back" ></span>
                        </div>
                    </div>
                )                
            })
        }   	
    	return arr
    }
    componentWillMount(){
        this.searWord()
    }
    render(){
        return (
            <div className='container'>
                <HeaderComponent/>
                <div className="top-title">
                    <p>电影罐头</p>
                </div>
                <div className="zj-name">
                    <div className="zj-picbg">
                        <img src="http://img.kaolafm.net/mz/images/201708/0e9e5d97-3ace-4649-a65e-fadb6342c015/250_250.jpg" title="电影罐头" alt="电影罐头"/>
                    </div>
                    <div className="zj-bg"></div>
                    <div className="zj-name-cont">
                        <div className="zj-name-play">
                            <div className="left">
                                <div className="left-bg">
                                    <img src="http://img.kaolafm.net/mz/images/201708/0e9e5d97-3ace-4649-a65e-fadb6342c015/250_250.jpg" title="电影罐头" alt="电影罐头"/>
                                </div>
                                <div id="div_top_play" className="play-btn ic-play zj-play"></div>
                            </div>
                            <div className="right">
                                <h1>电影罐头</h1>
                                <p className="p-anchor">上传者：<span>电影罐头</span></p>
                            </div>
                        </div>
                        <div className="zj-brief">
                            <div className="div-brief-scroll">
                                <div className="div-brief">
                                    <p id="p-brief">罐头分你一半 MovieCanShareWithU</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="zj-wrapinner">
                    <div className="program">
                        <div className="title"><i></i>节目<span id="span-zjlist-num" className="number">（7）</span></div>
                        <div className='program-list'>
                            {this.showCheckList()}
                        </div>
                        
                    </div>
                    <div className="recommend">
                        <div className="title"><i></i><span>相关推荐</span></div>
                    </div>
                    <FooterComponent/>
                
                </div>

                {/* <NavsComponent/> */}
            </div>
            
            
        )
    }
}


export default MoveComponent