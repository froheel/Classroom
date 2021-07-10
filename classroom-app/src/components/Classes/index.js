import React, {Component} from 'react'
import Icon1 from '../../images/svg-8.svg'
import Icon2 from '../../images/svg-9.svg'
import Icon3 from '../../images/svg-10.svg'
import {ServicesCard, ServicesContainer, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper} from './ClassesElements'
import {Link} from 'react-router-dom'
import {connect} from "react-redux";
import axios from "axios";


class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classList: []
        }
    }

    componentDidMount() {
        axios.post("http://localhost:8080/getclasses", {}, {
            headers: {'Authorization': "Bearer " + this.props.auth.jwt}
        },).then((response) => {
            console.log(response.data)
            this.setState({classList: response.data.classList})
        }).catch((err) => {
            console.log(err)
        })
    }


    render() {
        console.log(this.state.classList)
        const cards = this.state.classList.map((c) => (
            <ServicesCard key={c.classid}>
                <Link to={'/inclass/' + c.classid}>
                    <ServicesIcon src={Icon3}/>
                </Link>
                <ServicesH2>{c.classname}</ServicesH2>
                <ServicesP>{c.teachername}</ServicesP>
            </ServicesCard>
        ))
        return (
            <ServicesContainer>
                <ServicesWrapper>
                    {cards}
                </ServicesWrapper>
            </ServicesContainer>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Services)
