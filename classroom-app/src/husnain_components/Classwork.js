import React, {Component} from 'react';
import ClassworkCard from "./ClassworkCard";

class Classwork extends Component {
    render() {
        return (
            <div className={"row"}>
                <div className={"col-12"}>
                    <div className={"block-example border-bottom border-dark"}
                         style={{marginTop: 30, marginBottom: 30}}>
                        <h1 className={"text-primary"}>Homework</h1>
                    </div>
                    <ClassworkCard name="Homework 3" description="
In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available"/>
                    <div className={"block-example border-top border-dark"}></div>

                    <ClassworkCard name="Homework 2" description="this is a1"/>
                    <div className={"block-example border-top border-dark"}></div>

                    <ClassworkCard name="Homework 1" description="this is a1"/>
                    <div className={"block-example border-top border-dark"}></div>

                    <div className={"block-example border-bottom border-dark"}
                         style={{marginTop: 30, marginBottom: 30}}>
                        <h1 className={"text-primary"}>Assignment</h1>
                    </div>
                    <ClassworkCard name="Assignment 3" description="this is a1"/>
                    <div className={"block-example border-top border-dark"}></div>

                    <ClassworkCard name="Assignment 2" description="this is a1"/>
                    <div className={"block-example border-top border-dark"}></div>

                    <ClassworkCard name="Assignment 1" description="this is a1"/>
                    <div className={"block-example border-top border-dark"}></div>
                    <div className={"block-example border-bottom border-dark"}
                         style={{marginTop: 30, marginBottom: 30}}>
                        <h1 className={"text-primary"}>Project</h1>
                    </div>
                    <ClassworkCard name="Project 3" description="this is a1"/>
                    <div className={"block-example border-top border-dark"}></div>

                    <ClassworkCard name="Project 2" description="this is a1"/>
                    <div className={"block-example border-top border-dark"}></div>

                    <ClassworkCard name="Project 1" description="this is a1"/>
                    <div className={"block-example border-top border-dark"}></div>
                </div>
            </div>
        );
    }
}

export default Classwork;