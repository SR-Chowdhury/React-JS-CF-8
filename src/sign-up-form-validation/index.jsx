import React from "react";
import Form from "./form";
import PropTypes from 'prop-types';

const initValue = {
    name: '',
    email: '',
    birthDate: '',
    // gender: '',
    password: ''
}

class SignUpFormValidation extends React.Component {

    state = {
        values: initValue,
        agreement: false,
        errors: {}
    }

    handleChange = event => {
        this.setState({
            values: {
                ...this.state.values,
                [event.target.name]: event.target.value
            }
        });
    }

    handleAgreement = event => {
        this.setState({
            agreement: event.target.checked
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        const {errors, isValid} = this.validate();
        // console.log("errors: ", errors);
        // console.log("isValid: ", isValid);
        if(isValid) {
            // console.log(this.state.values);
            this.props.createUser(this.state.values);
            event.target.reset();
            this.setState({values: initValue, agreement: false, errors: {} });
        } else {
            // console.log(errors);
            this.setState({
                errors
            });
        }
    }

    validate = () => {
        const errors = {};
        const { 
            values: { name, email, birthDate, password}
        }  = this.state;
        if(!name) {
            errors.name = "Please provide your name";
        }
        if(!email) {
            errors.email = "Please provide your email";
        }
        if(!birthDate) {
            errors.birthDate = "Please provide your date of birth";
        }
        if(!password) {
            errors.password = "Please provide your password";
        }
        return {
            // err: errors, 
            errors, // ES6 format: errors 
            isValid: Object.keys(errors).length === 0 // Object.keys() will give us an array list
        }
    }

    render () {

        return (

            <Form
                values={this.state.values}
                agreement = {this.state.agreement}
                errors = {this.state.errors}
                handleChange = {this.handleChange}
                handleAgreement = {this.handleAgreement}
                handleSubmit = {this.handleSubmit}
            />
        );
    }

}

SignUpFormValidation.propTypes = {
    createUser: PropTypes.func.isRequired
}

export default SignUpFormValidation;