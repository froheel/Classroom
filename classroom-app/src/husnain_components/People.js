import React, {Component} from 'react';
import PeopleCard from "./PeopleCard";

class People extends Component {
    render() {
        const teachers = this.props.teachers.map(t => (<><PeopleCard name={t.name} bio={t.bio} email={t.email}/>
            <div className={"block-example border-top border-dark"}></div>
        </>))
        const students = this.props.students.map(t => (<><PeopleCard name={t.name} bio={t.bio} email={t.email}/>
            <div className={"block-example border-top border-dark"}></div>
            </>))


        return (
            <div className={"container"}>
                <div className={"block-example border-bottom border-dark"} style={{marginTop: 20, marginBottom: 30}}>
                    <h1 className={"text-primary"}>Teachers</h1>
                </div>
                <div>
                    {teachers}
                </div>
                <div className={"block-example border-bottom border-dark"} style={{marginTop: 20, marginBottom: 30}}>
                    <h1 className={"text-primary"}>Students</h1>
                </div>
                <div>
                    {students}
                </div>
            </div>
        );
    }
}

export default People;