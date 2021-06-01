import React, {Component} from 'react';
import ClassworkCard from "./ClassworkCard";

class Classwork extends Component {
    render() {
        return (
            <div className={"row"}>
                <div className={"col-12"}>
                    <div className={"block-example border-bottom border-dark" } style={{marginTop:30,marginBottom:30}}>
                        <h1 className={"text-primary"}>Homework</h1>
                    </div>
                    <ClassworkCard name="Assignment 1" description="this is a1"/>
                    <div className={"block-example border-top border-dark"}></div>

                    <ClassworkCard name="Assignment 1" description="this is a1"/>
                    <div className={"block-example border-top border-dark"}></div>

                    <ClassworkCard name="Assignment 1" description="this is a1"/>
                    <div className={"block-example border-top border-dark"}></div>

                    <div className={"block-example border-bottom border-dark" } style={{marginTop:30,marginBottom:30}}>
                        <h1 className={"text-primary"}>Assignment</h1>
                    </div>
                    <ClassworkCard name="Assignment 1" description="this is a1"/>
                    <div className={"block-example border-top border-dark"}></div>

                    <ClassworkCard name="Assignment 1" description="this is a1"/>
                    <div className={"block-example border-top border-dark"}></div>

                    <ClassworkCard name="Assignment 1" description="this is a1"/>
                    <div className={"block-example border-top border-dark"}></div>
                    <div className={"block-example border-bottom border-dark" } style={{marginTop:30,marginBottom:30}}>
                        <h1 className={"text-primary"}>Project</h1>
                    </div>
                    <ClassworkCard name="Assignment 1" description="this is a1"/>
                    <div className={"block-example border-top border-dark"}></div>

                    <ClassworkCard name="Assignment 1" description="this is a1"/>
                    <div className={"block-example border-top border-dark"}></div>

                    <ClassworkCard name="Assignment 1" description="this is a1"/>
                    <div className={"block-example border-top border-dark"}></div>
                </div>
            </div>
        );
    }
}

export default Classwork;