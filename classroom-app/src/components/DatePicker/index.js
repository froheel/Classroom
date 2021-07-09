import React from 'react'
import { Form } from 'react-bootstrap';
import {
    FormLabel,
    DateBg
} from './Datepicker.js'

class BootstrapDate extends React.Component{

    render(){

        return(
            <div>
                <div className="row">
                        <Form.Group controlId="dob">
                            <FormLabel>Select Birth Date</FormLabel>
                            <DateBg><Form.Control type="date" name="dob" placeholder="Date of Birth" max={new Date().toISOString().split("T")[0]} required />
                            <Form.Check
                                type="checkbox" label="Register As a Teacher"/>
                                </DateBg>
                        </Form.Group>
                        
                </div>
            </div>
        )
    }
    
}
export default BootstrapDate;
