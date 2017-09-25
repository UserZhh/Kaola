
import Fetch from '../modules/fetch'
import {Link} from 'react-router'

class ContainerComponent extends React.Component {
    
    constructor(props,context){
        super(props,context)

        this.state={
            check_list:[]
        }
    }
    searWord(){
		let that = this
		Fetch.Get("./json/question.json",{
		}).then(res=>res.json()).then(json=>{
			console.log(json)
			that.setState({check_list:json})
		})
    }
    // showWord(){
    //     let that=this
    //     let col=[]
    //     if(this.state.check_list.length!=0){
    //          this.state.check_list.forEach((item,i)=>{
    //             item.list.forEach((list,i)=>{
    //                 col.push(
    //                     <li className="item need-touch">
    //                         <img src={list.imgURL}/>
    //                         <p>{list.txt}</p>
    //                     </li>
    //                 )
    //             })
    //         })
    //     }
       
    //     return col
    // }
    showCheckList(){
    	let that = this;
        let col=[]
        let arr=[]
        if(this.state.check_list.length!=0){
            this.state.check_list.forEach((item,i)=>{
                   arr.push(
                    <div className="title">
                        <p><span>{item.title}</span><Link to='/movie' className='more'>{item.more}</Link></p>
                        <ul className="main">
                            {/* {this.showWord()} */}
                            
                            <li className="item need-touch">
                                <Link to="/movie" className="item need-touch">
                                    <img src={item.list[0].imgURL}/>
                                    <p>{item.list[0].txt}</p>
                                </Link>
                            </li>
                            
                            <li className="item need-touch">
                                <Link to="/history" className="item need-touch">
                                    <img src={item.list[1].imgURL}/>
                                    <p>{item.list[1].txt}</p>
                                </Link>
                            </li>
                            <li className="item need-touch">
                                <Link to="/music" className="item need-touch">
                                    <img src={item.list[2].imgURL}/>
                                    <p>{item.list[2].txt}</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                )                
            })
        }
    	
    	return arr
    }
    componentWillMount(){
        this.searWord()
    }
    render(){
        return (
            <div className='container'>
                <div className='classify'>
                    {/* <div className="title">
                        <em>&nbsp;</em>
                        <a href="javaScript:;"><h2>特别推荐</h2></a>
                        <a href="javaScript:;" className='more'>更多></a>
                    </div>
                    <div className="main"> */}
                        {this.showCheckList()}
                        {/* <div className='items'>

                        <Link to="/music" className="item need-touch">
                            <img src="http://img.kaolafm.net/mz/images/201606/1c78e766-97c4-499f-8155-c462378a127a/250_250.jpg"/>
                            <p>阳光书签</p>
                        </Link>
                        <Link to="/move" className="item need-touch">
                            <img src="http://img.kaolafm.net/mz/images/201708/0e9e5d97-3ace-4649-a65e-fadb6342c015/250_250.jpg"/>
                            <p>电影罐头</p>
                        </Link>
                        <Link to="/history" className="item need-touch">
                            <img src="http://img.kaolafm.net/mz/images/201402/c40aaf13-7bc9-4d2b-a10e-9a7f1613ffec/250_250.jpg"/>
                            <p>历史揭秘</p>
                        </Link>
                        </div> */}
                    {/* </div> */}
                </div>
            </div>
            
            
        )
    }
}


export default ContainerComponent