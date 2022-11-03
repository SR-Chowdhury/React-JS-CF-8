import React from "react";
import PropTypes from 'prop-types';
import TextInput from "./text-input";

const Form = props => (
    <div className="form-group">
        <form onSubmit={props.handleSubmit}>

            <TextInput
                label="Enter Your Name"
                name="name"
                type="text"
                placeholder="Enter Name"
                value={props.obj.name}
                onChange={props.handleChange}
            /> 
            <TextInput
                label="Enter Your Email"
                name="email"
                type="email"
                placeholder="Enter Email"
                value={props.obj.email}
                onChange={props.handleChange}
            /> 
            <TextInput
                label="Enter Your Password"
                name="password"
                type="password"
                placeholder="******"
                value={props.obj.password}
                onChange={props.handleChange}
            />

            <button type="submit" className="btn btn-lg btn-outline-danger">Submit</button>
        </form>
    </div>
)

Form.propTypes = {
    obj: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}

export default Form;