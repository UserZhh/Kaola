

class FooterComponent extends React.Component {
    
    constructor(props,context){
        super(props,context)

        this.state={
          
        }
    }

    render(){
        return (
            <div className='footer'>
                <div className='left'>
                    <img src="http://m.kaolafm.com/images/footer.png"/>
                </div>
                <div className='right'>
                    <a href="javaScript:;">客户端收听</a>
                </div>
            </div>
            
            
        )
    }
}


export default FooterComponent

