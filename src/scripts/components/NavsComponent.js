

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
                    <li className="swiper-slide"><SortItemComponent name="电影" hash="movies"/></li>
                    <li className="swiper-slide"><SortItemComponent name="历史" hash="history"/></li>
                    <li className="swiper-slide"><SortItemComponent name="音乐" hash="music"/></li>
                    <li className="swiper-slide"><SortItemComponent name="搞笑"/></li>
                    <li className="swiper-slide"><SortItemComponent name="小说"/></li>
                    <li className="swiper-slide"><SortItemComponent name="王牌脱口秀"/></li>
                    <li className="swiper-slide"><SortItemComponent name="相声评书"/></li>
                    <li className="swiper-slide"><SortItemComponent name="经典典藏"/></li>
                    <li className="swiper-slide"><SortItemComponent name="亲子"/></li>
                    <li className="swiper-slide"><SortItemComponent name="名人"/></li>
                    <li className="swiper-slide"><SortItemComponent name="电影"/></li>
                    <li className="swiper-slide"><SortItemComponent name="旅游"/></li>
                    <li className="swiper-slide"><SortItemComponent name="综艺娱乐"/></li>
                    <li className="swiper-slide"><SortItemComponent name="恐怖故事"/></li>
                    <li className="swiper-slide"><SortItemComponent name="历史人文"/></li>
                    <li className="swiper-slide"><SortItemComponent name="财经"/></li>
                    <li className="swiper-slide"><SortItemComponent name="广播剧"/></li>
                    <li className="swiper-slide"><SortItemComponent name="讲座讲坛"/></li>
                    <li className="swiper-slide"><SortItemComponent name="外语"/></li>
                    <li className="swiper-slide"><SortItemComponent name="星座风水"/></li>
                    <li className="swiper-slide"><SortItemComponent name="科技"/></li>
                    <li className="swiper-slide"><SortItemComponent name="汽车"/></li>
                    <li className="swiper-slide"><SortItemComponent name="生活"/></li>
                    <li className="swiper-slide"><SortItemComponent name="体育"/></li>
                    <li className="swiper-slide"><SortItemComponent name="健康"/></li>
                    <li className="swiper-slide"><SortItemComponent name="教育"/></li>
                    <li className="swiper-slide"><SortItemComponent name="军事"/></li>
                    <li className="swiper-slide"><SortItemComponent name="动漫游戏"/></li>
                    <li className="swiper-slide"><SortItemComponent name="校园"/></li>
        
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

