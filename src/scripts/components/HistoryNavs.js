
import Fetch from '../modules/fetch'

class HistoryNavs extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
            showmovie:[],
            hot_search:[],
        }
    }
    componentWillMount(){
        this.getHotSearchWord()
      
    }
   
    getHotSearchWord(){
        let that = this 
        Fetch.Get('http://localhost:9000/kaola/webapi/resource/search?cid=657&rtype=20000&sorttype=VALID_START_DATE_DESC&pagesize=18&pagenum=1',{}).then((res)=>{
            return res.json()
        }).then((json)=>{
            this.setState({
                showmovie:json.result.dataList
            })
        })
        
    }
    showmovies(){
  
        let showmovie = this.state.showmovie
        let arr = []
        if(showmovie){
            showmovie.forEach(function(val,i){
                let dong = (val.listenNum/10000).toFixed(1)
                arr.push(
                    <li className="items">
                        <div className="imgpic" style={{width:"105px",height:"105px"}}>
                            <img className="pic" src={val.pic}/>
                            <div className="listennum">
                                <img className="background" src="/img/jb.png"/>
                                <img className="listen" src="/img/listen-w.png"/>
                                <span>{dong}万</span>
                            </div>
                        </div>
                        <p>{val.name}</p>
                    </li>

                )
            })
        }
        return arr
    }

    render(){

        return (
            <div className="container">
                    <ul id="div_zj_list" >
                    <a href={"#/"+this.props.hash}>{this.showmovies()}</a>
                    </ul>
            </div>
               
        )
    }
}
//定义默认属性
HistoryNavs.defaultProps={

}
// onClick={"window.location.href='/zj/0gKqpMA_.html'"}


export default HistoryNavs