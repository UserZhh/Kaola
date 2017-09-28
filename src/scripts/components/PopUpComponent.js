import SortItemComponent from "./SortItemComponent"
class PopUpComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render (){
        // console.log(this.props);
        return (
            <div className="allSort-container" style={this.props.isShow?{display:'block'}:{display:'none'}}>
                        <SortItemComponent name="首页" hash="/"/>
                        <SortItemComponent name="电影" hash="movies"/>
                        <SortItemComponent name="历史" hash="historys"/>
                        <SortItemComponent name="经典典藏" hash="classic"/>

                        <SortItemComponent name="搞笑" hash="funny"/>
                        <SortItemComponent name="小说" hash="movies"/>
                        <SortItemComponent name="王牌脱口秀" hash="historys"/>
                        <SortItemComponent name="相声评书" hash="classic"/>

                        <SortItemComponent name="音乐" hash="funny"/>
                        <SortItemComponent name="亲子" hash="movies"/>
                        <SortItemComponent name="名人" hash="historys"/>
                        <SortItemComponent name="电影" hash="classic"/>

                        <SortItemComponent name="旅游" hash="funny"/>
                        <SortItemComponent name="综艺娱乐" hash="movies"/>
                        <SortItemComponent name="恐怖故事" hash="historys"/>
                        <SortItemComponent name="历史人文" hash="classic"/>
                        
                        <SortItemComponent name="财经" hash="funny"/>
                        <SortItemComponent name="广播剧" hash="movies"/>
                        <SortItemComponent name="讲座讲坛" hash="historys"/>
                        <SortItemComponent name="外语" hash="classic"/>
             
                        <SortItemComponent name="星座风水" hash="funny"/>
                        <SortItemComponent name="科技" hash="movies"/>
                        <SortItemComponent name="汽车" hash="historys"/>
                        <SortItemComponent name="生活" hash="classic"/>
                        
                        <SortItemComponent name="体育" hash="funny"/>
                        <SortItemComponent name="健康" hash="movies"/>
                        <SortItemComponent name="教育" hash="historys"/>
                        <SortItemComponent name="军事" hash="classic"/>
                        
                        <SortItemComponent name="动漫游戏" hash="funny"/>
                        <SortItemComponent name="校园" hash="movies"/>
            
            </div>
        )
    }
}
PopUpComponent.defaultProps = {
  
};

export default PopUpComponent;