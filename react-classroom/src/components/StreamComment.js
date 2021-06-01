import React, {Component} from 'react';
import temp from "../Images/temp.png"
class StreamComment extends Component {
    render() {
        return (
            <div style={{marginTop:"10px",marginBottom:"5px"} }>
                <div className={"row"}>
                    <div className={"col-2"}>
                        <img src={temp} width={"75%"}/>
                    </div>
                    <div className={"col-10"}>
                        <div>{this.props.name}</div>
                        <p>{this.props.comment}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default StreamComment;