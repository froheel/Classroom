import React, {Component} from 'react';
import PeopleCard from "./PeopleCard";

class People extends Component {
    render() {
        return (
            <div className={"container"}>
                <div className={"block-example border-bottom border-dark" } style={{marginTop:20,marginBottom:30}}>
                    <h1 className={"text-primary"}>Teachers</h1>
                </div>
                <div>
                    <PeopleCard name="Feza Roheel" bio={"Nothing in BIO"}/>
                    <div className={"block-example border-top border-dark"}></div>
                    <PeopleCard name="Muhammad Husnain" bio={"Nothing in BIO"}/>
                    <div className={"block-example border-top border-dark"}></div>
                    <PeopleCard name="Muhammad Adan" bio={"Nothing in BIO"}/>
                    <div className={"block-example border-top border-dark"}></div>
                    <PeopleCard name="Muhammad Farhan" bio={"Nothing in BIO"}/>
                </div>
                <div className={"block-example border-bottom border-dark" } style={{marginTop:20,marginBottom:30}}>
                    <h1 className={"text-primary"}>Students</h1>
                </div>
                <div>

                    <PeopleCard name="Ather Fawaz" bio={"Nothing in BIO"}/>
                    <div className={"block-example border-top border-dark"}></div>
                    <PeopleCard name="Mujtaba Malik" bio={"Nothing in BIO"}/>
                    <div className={"block-example border-top border-dark"}></div>
                    <PeopleCard name="Hafsa Saleem" bio={"Nothing in BIO"}/>
                    <div className={"block-example border-top border-dark"}></div>
                    <PeopleCard name="Hamza Jawad" bio={"Nothing in BIO"}/>
                     <div className={"block-example border-top border-dark"}></div>
                    <PeopleCard name="Wasiq Malik" bio={"Nothing in BIO"}/>
                </div>
            </div>
        );
    }
}

export default People;