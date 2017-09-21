



class BannerComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
          
        }
    }
    componentWillMount(){
        
    }
    render(){

        return (
            <div className="swiper-container banner">
                <div className="swiper-wrapper">
                    <img className="swiper-slide" src="./img/banner1.jpg"/>
                    <img className="swiper-slide" src="./img/banner2.jpg"/>
                    <img className="swiper-slide" src="./img/banner3.jpg"/>
                    <img className="swiper-slide" src="./img/banner4.jpg"/>
                    <img className="swiper-slide" src="./img/banner5.jpg"/>
                </div>
                <div className="swiper-pagination"></div>
            </div>
        )
    }
    componentDidMount(){
        this.myswiper = new Swiper(".banner",{
                freeMode : false,
                slidesPerView : 'auto',
                freeModeSticky : true ,
                autoplay: 1000,
                autoplayDisableOnInteraction: true,
                loop:true,
                pagination:'.swiper-pagination'
            })
        }
        componentDidUpdate(){
            this.myswiper.update()
        }
}
//定义默认属性
BannerComponent.defaultProps={

}



export default BannerComponent