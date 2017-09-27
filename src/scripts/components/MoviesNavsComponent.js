
import Fetch from '../modules/fetch'

class MoviesNavsComponent extends React.Component {   
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
        console.log(11)
        Fetch.Get('http://localhost:9000/kaola/webapi/resource/search?cid=2296&rtype=20000&sorttype=VALID_START_DATE_DESC&pagesize=18&pagenum=1',{}).then((res)=>{
            return res.json()
        }).then((json)=>{
            console.log(json.result.dataList)
            this.setState({
                showmovie:json.result.dataList
            })
        })
        
    }
    showmovies(){
  
        let showmovie = this.state.showmovie
        console.log(showmovie)
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
                        {this.showmovies()}
                    </ul>
            </div>
               
        )
    }
}
//定义默认属性
MoviesNavsComponent.defaultProps={

}
// onClick={"window.location.href='/zj/0gKqpMA_.html'"}


export default MoviesNavsComponent