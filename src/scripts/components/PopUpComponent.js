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
                        <SortItemComponent name="电影" hash="movie"/>
                        <SortItemComponent name="历史" hash="history"/>
                        <SortItemComponent name="音乐" hash="music"/>

                        <SortItemComponent name="搞笑"/>
                        <SortItemComponent name="小说"/>
                        <SortItemComponent name="王牌脱口秀"/>
                        <SortItemComponent name="相声评书"/>

                        <SortItemComponent name="经典典藏"/>
                        <SortItemComponent name="亲子"/>
                        <SortItemComponent name="名人"/>
                        <SortItemComponent name="电影"/>

                        <SortItemComponent name="旅游"/>
                        <SortItemComponent name="综艺娱乐"/>
                        <SortItemComponent name="恐怖故事"/>
                        <SortItemComponent name="历史人文"/>
                        
                        <SortItemComponent name="财经"/>
                        <SortItemComponent name="广播剧"/>
                        <SortItemComponent name="讲座讲坛"/>
                        <SortItemComponent name="外语"/>
             
                        <SortItemComponent name="星座风水"/>
                        <SortItemComponent name="科技"/>
                        <SortItemComponent name="汽车"/>
                        <SortItemComponent name="生活"/>
                        
                        <SortItemComponent name="体育"/>
                        <SortItemComponent name="健康"/>
                        <SortItemComponent name="教育"/>
                        <SortItemComponent name="军事"/>
                        
                        <SortItemComponent name="动漫游戏"/>
                        <SortItemComponent name="校园"/>
            
            </div>
        )
    }
}
PopUpComponent.defaultProps = {
  
};

export default PopUpComponent;