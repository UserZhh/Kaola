

import SortItemComponent from "./SortItemComponent"


class NavsComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){

        return (
            <div className="swiper-container content__header__nav">
                <ul className="swiper-wrapper">
                    <li className="swiper-slide" >
                        <SortItemComponent name="首页" hash="/"/>
                        <div className="active"></div>
                    </li>
                    <li className="swiper-slide"><SortItemComponent name="电影罐头" hash="movies"/></li>
                    <li className="swiper-slide"><SortItemComponent name="历史人文" hash="historys"/></li>
                    <li className="swiper-slide"><SortItemComponent name="经典典藏" hash="classic"/></li>
                    <li className="swiper-slide"><SortItemComponent name="搞笑" hash="funny" /></li>
                    <li className="swiper-slide"><SortItemComponent name="小说" hash="movies"/></li>
                    <li className="swiper-slide"><SortItemComponent name="王牌脱口秀" hash="historys"/></li>
                    <li className="swiper-slide"><SortItemComponent name="相声评书" hash="classic"/></li>
                    <li className="swiper-slide"><SortItemComponent name="音乐" hash="funny"/></li>
                    <li className="swiper-slide"><SortItemComponent name="亲子" hash="movies"/></li>
                    <li className="swiper-slide"><SortItemComponent name="名人" hash="historys"/></li>
                    <li className="swiper-slide"><SortItemComponent name="电影" hash="classic"/></li>
                    <li className="swiper-slide"><SortItemComponent name="旅游" hash="historys"/></li>
                    <li className="swiper-slide"><SortItemComponent name="综艺娱乐" hash="funny"/></li>
                    <li className="swiper-slide"><SortItemComponent name="恐怖故事" hash="movies"/></li>
                    <li className="swiper-slide"><SortItemComponent name="历史人文" hash="historys"/></li>
                    <li className="swiper-slide"><SortItemComponent name="财经" hash="classic"/></li>
                    <li className="swiper-slide"><SortItemComponent name="广播剧" hash="funny"/></li>
                    <li className="swiper-slide"><SortItemComponent name="讲座讲坛" hash="movies"/></li>
                    <li className="swiper-slide"><SortItemComponent name="外语" hash="historys"/></li>
                    <li className="swiper-slide"><SortItemComponent name="星座风水" hash="classic"/></li>
                    <li className="swiper-slide"><SortItemComponent name="科技" hash="movies"/></li>
                    <li className="swiper-slide"><SortItemComponent name="汽车" hash="historys"/></li>
                    <li className="swiper-slide"><SortItemComponent name="生活" hash="classic"/></li>
                    <li className="swiper-slide"><SortItemComponent name="体育" hash="movies"/></li>
                    <li className="swiper-slide"><SortItemComponent name="健康" hash="historys"/></li>
                    <li className="swiper-slide"><SortItemComponent name="教育" hash="classic"/></li>
                    <li className="swiper-slide"><SortItemComponent name="军事" hash="movies"/></li>
                    <li className="swiper-slide"><SortItemComponent name="动漫游戏" hash="historys"/></li>
                    <li className="swiper-slide"><SortItemComponent name="校园" hash="classic"/></li>
        
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
}
//定义默认属性
NavsComponent.defaultProps={

}



export default NavsComponent

