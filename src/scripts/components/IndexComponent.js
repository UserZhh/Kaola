
import NavsComponent from './NavsComponent'
import HeaderComponent from './HeaderComponent'
import BannerComponent from './BannerComponent'
import ContainerComponent from './ContainerComponent'
import FooterComponent from './FooterComponent'

class IndexComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
          
        }
    }
    componentWillMount(){
        
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



export default IndexComponent