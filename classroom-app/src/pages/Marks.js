import React, {Component} from 'react';
import Navbar from '../components/Sidebar_Inside/Sidebar';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
class Marks extends Component {
    render() {
        return (
            <>
            <Navbar/>

            <div className={"container"}>
            <Button variant="success" style={{float: 'right'}}>Save All Marks</Button>{' '}
                <div className={"block-example border-bottom border-dark" } style={{marginTop:20,marginBottom:30}}>
                    <h1 className={"text-primary"}>Assignment - 1</h1>
                </div>
                
                <Card body>Mujtaba Malik <Badge pill bg="success"> 30th July 2021 7:40 PM</Badge>{' '} <input  style={{float: 'right'}} type="number"/><div style={{float: 'right'}}>100 /<span class="tab"></span></div></Card>
                <Card body>Ahmad Fawaz <Badge pill bg="danger">30th July 2021 8:30 PM </Badge>{' '}<input  style={{float: 'right'}} type="number"/><div style={{float: 'right'}}>100 /<span class="tab"></span></div></Card>
                <Card body>Husanin Ali Ahmed <Badge pill bg="danger">30th July 2021 9:30 PM</Badge>{' '}  <input  style={{float: 'right'}} type="number"/><div style={{float: 'right'}}>100 /<span class="tab"></span></div></Card>

            
                
            </div>
            </>
        );
    }
}

export default Marks;