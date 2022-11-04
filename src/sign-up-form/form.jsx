import React from "react";
import PropTypes from 'prop-types';
import TextInput from "./text-input";

const Form = ({values, agreement, handleChange, handleAgreement, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <TextInput
                label="Enter Your Name"
                type="text"
                name="name"
                placeholder="Enter Your name"
                value={values.name}
                onChange={handleChange}
            />            
            <TextInput
                label="Enter Your Email"
                type="email"
                name="email"
                placeholder="example@example.com"
                value={values.email}
                onChange={handleChange}
            />            
            <TextInput
                label="Enter Your Birth Date"
                type="date"
                name="birthDate"
                value={values.birthDate}
                onChange={handleChange}
            />            
            <div className="form-group">
                <label htmlFor="gender">Select Your Gender</label> <br />
                <input
                    className="mx-2" 
                    type= "radio"
                    name= "gender"
                    value = "Male"
                    onChange = {handleChange}  
                /> Male
                <input 
                    className="mx-2"
                    type= "radio"
                    name= "gender"
                    value = "Male"
                    onChange = {handleChange}  
                /> Female
            </div> <br/>
            <TextInput
                label="Enter Your Password"
                type="password"
                name="password"
                placeholder="********"
                value={values.password}
                onChange={handleChange}
            /> 
            <div className="form-group">
                <input 
                    type="checkbox"
                    name="agreement"
                    checked={agreement}
                    onChange = {handleAgreement}
                /> I agree the terms & conditions
            </div> <br /> 
            <button type="submit" className="btn btn-primary" disabled={!agreement}>Submit</button>
        </form>
    )
}

Form.propTypes = {
    values: PropTypes.object.isRequired,
    agreement: PropTypes.bool.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleAgreement: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}

export default Form;