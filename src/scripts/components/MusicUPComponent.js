
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
							<img src="http://img.kaolafm.net/mz/images/201608/421207de-a286-41de-b83c-8f74e99c2807/550_550.jpg" />
						</div>
						<div className='cover-shade'></div>
						<div className='div-cover-detail'>
							<h1 id="p_jm_name">余华《十八岁出门远行》：所见是如此的人间</h1>
							<div className="cover-img">
								<img src="http://img.kaolafm.net/mz/images/201608/421207de-a286-41de-b83c-8f74e99c2807/550_550.jpg" />
								<div className="play-btn" id="div-play"><img src='./img/btn_play.png'/></div>
							</div>
							<div className="div-play-progress">
								<div className="play-time">
									<div className="left" id="p_cur_time">00:00</div>
									<div className="right" id="p_duration">16:20</div>
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
								<p className="p-sp-name" id="spn_zj_name">阳光书签</p>
								<div className="div-author">
			                    	<span className="span-author">
										<span className="span-photo">
											<img src="http://img.kaolafm.net/mz/images/201603/a152e208-84ef-439c-9fc9-c6211732c9f1/100_100.jpg"/>
										</span>
										<span className="span-name">上官文露</span>
									</span>
								</div>
								<div className="div-desc" id="spn_zj_desc">策划、出品：Sunshine Creek出品人：周...</div>
							</div>
							<div className="div-sp-enter right"></div>
						</a>
					</div>
				</div>
                
                <div className="div-siblings">
					<div className="div-siblings-cont left">
						<a id="a-prev" href="#/music">
							<p className="p-jmtitle" id="p-prev">上一期</p>
							<p className="p-desc" id="p-desc-prev">
								<span className="span-jmnum" id="span-num-prev">3</span>
								:
								<span className="span-jmtitle" id="span-title-prev">张爱玲，一个男人的两朵...</span>
							</p>
						</a>
					</div>
					<div className="div-center left"></div>
					<div className="div-siblings-cont left">
						<a id="a-next" href="#/music">
							<p className="p-jmtitle" id="p-next">下一期</p>
							<p className="p-desc" id="p-desc-next">
								<span className="span-jmnum" id="span-num-next">4</span>
								:
								<span className="span-jmtitle" id="span-title-next">周国平《时光村落里的往...</span>
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