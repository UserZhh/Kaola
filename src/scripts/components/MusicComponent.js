
// import NavsComponent from './NavsComponent'
import HeaderComponent from './HeaderComponent'

import FooterComponent from './FooterComponent'

class MusicComponent extends React.Component {
    
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
            
                <div className="title">
                    <em>&nbsp;</em>
                    <a href="javaScript:;"><h2>节目</h2></a>
                </div>
            </div>
        )
    }
}


export default MusicComponent