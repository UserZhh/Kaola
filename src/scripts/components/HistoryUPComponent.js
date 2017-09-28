
import Fetch from '../modules/fetch'

// import NavsComponent from './NavsComponent'
import HeaderUPComponent from './HeaderUPComponent'

import FooterComponent from './FooterComponent'

class MoveComponent extends React.Component {
    
    constructor(props,context){
        super(props,context)

        this.state={
            check_list:[]            
        }
    }
    render(){
        return (
            <div className='div-play-top usesearch'>
                <HeaderUPComponent/>
                
                <div className="div-cover">
					<div className="div-cover-cont">
						<div className="cover-img-bg">
							<img src="http://img.kaolafm.net/mz/images/201402/c40aaf13-7bc9-4d2b-a10e-9a7f1613ffec/550_550.jpg" />
						</div>
						<div className='cover-shade'></div>
						<div className='div-cover-detail'>
							<h1 id="p_jm_name">古代青楼为何要开到考场对面？</h1>
							<div className="cover-img">
								<img src="http://img.kaolafm.net/mz/images/201402/c40aaf13-7bc9-4d2b-a10e-9a7f1613ffec/550_550.jpg" />
								<div className="play-btn" id="div-play"><img src='./img/btn_play.png'/></div>
							</div>
							<div className="div-play-progress">
								<div className="play-time">
									<div className="left" id="p_cur_time">00:00</div>
									<div className="right" id="p_duration">03:58</div>
								</div>
								<div className="play-progress-bar" id="div_bar_box">
									<div className="play-bar" id="div_bg"></div>
									<div className="play-point" id="div_point"><img src='./img/play-point.png'/></div>
									<div className="play-bar-bg"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
                
                <div className='div-share'>
                	<div className="left">
						<div id="div-share-cont" >
							<i className="ic-listen"><img src='./img/listen-new.png'/></i>
							<span className="num-listen" id="num-listen"></span>
						</div>
					</div>
					<div className="right">
						<span className="span-share left">分享至：</span>
						<span className="span-share-btn left">
							<div className="bdsharebuttonbox bdshare-button-style0-16" data-tag="share_1" data-bd-bind="1506598150964">
				                <a className="bds_tsina" data-cmd="tsina"><img src='./img/weibo-new.png'/></a>
				                <a className="bds_qzone" data-cmd="qzone"><img src='./img/qq-zone.png'/></a>
				                <a className="bds_sqq" data-cmd="sqq"><img src='./img/qq-new.png'/></a>
				            </div>
						</span>
					</div>
                </div>
                
                <div className="div-special">
					<p className="p-title">所属专辑</p>
					<div className="div-special-cont">
						<a href="">
							<div className="div-sp-cover left"><img src="http://img.kaolafm.net/mz/images/201402/c40aaf13-7bc9-4d2b-a10e-9a7f1613ffec/550_550.jpg"/></div>
							<div className="div-sp-text left">
								<p className="p-sp-name" id="spn_zj_name">历史揭秘</p>
								<div className="div-author">
			                    	<span className="span-author">
										<span className="span-photo">
											<img src="http://img.kaolafm.net/mz/images/201708/31b00ac7-b886-4b5e-a57e-4a56ad107f81/100_100.jpg"/>
										</span>
										<span className="span-name">舒奕</span>
									</span>
								</div>
								<div className="div-desc" id="spn_zj_desc">（9.26历史揭秘）标题：古代青楼为何要开到考场对面...</div>
							</div>
							<div className="div-sp-enter right"></div>
						</a>
					</div>
				</div>
                
                <div className="div-siblings">
					<div className="div-siblings-cont left">
						<a id="a-prev" href="/jm/witvosq4.html">
							<p className="p-jmtitle" id="p-prev">上一期</p>
							<p className="p-desc" id="p-desc-prev">
								<span className="span-jmnum" id="span-num-prev">1059</span>
								:
								<span className="span-jmtitle" id="span-title-prev">中国古代的退休制度</span>
							</p>
						</a>
					</div>
					<div className="div-center left"></div>
					<div className="div-siblings-cont left">
						<a id="a-next" href="/jm/MeZFWQTn.html">
							<p className="p-jmtitle" id="p-next">下一期</p>
							<p className="p-desc" id="p-desc-next">
								<span className="span-jmnum" id="span-num-next">1057</span>
								:
								<span className="span-jmtitle" id="span-title-next">犯人为什么一进监狱就要...</span>
							</p>
						</a>
					</div>
				</div>
                
                <div className="div-recommend">
					<p className="p-title">相关推荐</p>
					<div className="div-recommend-cont">
						<ul id="ul-recommend">
							<div className="recommend-list">暂无数据</div>
						</ul>
					</div>
				</div>
                <FooterComponent/>
               
            </div>
        )
    }
}

export default MoveComponent