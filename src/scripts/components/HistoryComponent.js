
// import NavsComponent from './NavsComponent'
import HeaderComponent from './HeaderComponent'

import FooterComponent from './FooterComponent'

class HistoryComponent extends React.Component {
    
    constructor(props,context){
        super(props,context)

        this.state={
          
        }
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
            
                <div className="title">
                    <em>&nbsp;</em>
                    <a href="javaScript:;"><h2>节目</h2></a>
                </div>
            </div>
        )
    }
}


export default HistoryComponent