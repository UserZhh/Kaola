import SortItemComponent from "./SortItemComponent"
class PopUpComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render (){
        // console.log(this.props);
        return (
            <div className="allSort-container" style={this.props.isShow?{display:'block'}:{display:'none'}}>
                        <SortItemComponent/>
                        <SortItemComponent/>
                        <SortItemComponent/>
                        <SortItemComponent/>

                        <SortItemComponent/>
                        <SortItemComponent/>
                        <SortItemComponent/>
                        <SortItemComponent/>

                        <SortItemComponent/>
                        <SortItemComponent/>
                        <SortItemComponent/>
                        <SortItemComponent/>

                        <SortItemComponent/>
                        <SortItemComponent/>
                        <SortItemComponent/>
                        <SortItemComponent/>
                        
                        <SortItemComponent/>
                        <SortItemComponent/>
                        <SortItemComponent/>
                        <SortItemComponent/>
             
                        <SortItemComponent/>
                        <SortItemComponent/>
                        <SortItemComponent/>
                        <SortItemComponent/>
                        
                        <SortItemComponent/>
                        <SortItemComponent/>
                        <SortItemComponent/>
                        <SortItemComponent/>
                        
                        <SortItemComponent/>
                        <SortItemComponent/>
            
            </div>
        )
    }
}
PopUpComponent.defaultProps = {
  
};

export default PopUpComponent;