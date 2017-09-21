
import NavsComponent from './NavsComponent'
import HeaderComponent from './HeaderComponent'

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
            </div>
        )
    }
}
//定义默认属性
IndexComponent.defaultProps={

}



export default IndexComponent