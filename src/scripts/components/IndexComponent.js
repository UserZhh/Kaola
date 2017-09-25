
import NavsComponent from './NavsComponent'
import HeaderComponent from './HeaderComponent'
import BannerComponent from './BannerComponent'
import ContainerComponent from './ContainerComponent'
import FooterComponent from './FooterComponent'
import {connect} from 'react-redux' 
import store from '../redux/store'

class IndexComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
          
        }
    }
    componentDidMount(){
        console.log(this)
    }
    componentWillMount(){
        console.log(this.props)
    }
   
    render(){

        return (
            <div>
                <HeaderComponent />
                <NavsComponent />
                <BannerComponent/>
                <ContainerComponent/>
                <FooterComponent/>  
            </div>
        )
    }
}
//定义默认属性
IndexComponent.defaultProps={

}

//生成容器组件
const mapStateToProps = (state)=>{
    return state
    
}
export default connect(mapStateToProps)(IndexComponent)