
class SortItemComponent extends React.Component {

    render (){
        return (
            <div className="channel-btn">
                <a href={"#/"+this.props.hash}>{this.props.name}</a>
            </div>
        )
    }
}


    


export default SortItemComponent;