
class SortHeader extends React.Component {

    render (){
        return (
                <div className="navbar" style={{position:"static",width: "353.66px", top: "0px", zIndex: "999"}}>
                    <ul id="ul_category_list">
                        <li className="need-touch">
                            <a >{this.props.name}
                                <div className="active"></div>
                            </a>
                        </li>
                    </ul>
                </div>
        )
    }
}


    


export default SortHeader;