import React from "react";
import PropTypes from 'prop-types';
import TextInput from "./text-input";

const Form = ({values, agreement, errors, handleChange, handleAgreement, handleSubmit}) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextInput
                    label="Enter Your Name"
                    name = "name"
                    type= "text"
                    placeholder= "Enter Your Name"
                    value={values.name}
                    onChange = {handleChange}
                    error = {errors.name}
                />
                <TextInput
                    label="Enter Your Email"
                    name = "email"
                    type= "email"
                    placeholder= "Enter Your Email"
                    value={values.email}
                    onChange = {handleChange}
                    error = {errors.email}
                />
                <TextInput
                    label="Enter Your Birth Date"
                    name = "birthDate"
                    type= "date"
                    placeholder= "Enter Your Birth Date"
                    value={values.birthDate}
                    onChange = {handleChange}
                    error = {errors.birthDate}
                />
                <TextInput
                    label="Enter Your Password"
                    name = "password"
                    type= "password"
                    placeholder= "**********"
                    value={values.password}
                    onChange = {handleChange}
                    error = {errors.password}
                />
                <div>
                    <input type="checkbox" name="agreement" checked={agreement} onChange={handleAgreement}/> I agree the terms & Conditions
                </div> <br />
                <button type="submit" className="btn btn-success" disabled={!agreement}>Submit</button>
            </form>
        </div>
    );
}

Form.propTypes = {
    values: PropTypes.object.isRequired,
    agreement: PropTypes.bool.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleAgreement: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired 
}

export default Form;