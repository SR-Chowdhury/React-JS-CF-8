import React from "react";
import PropTypes from 'prop-types';

const TextInput = props => (
    <div className="form-group">
        <label htmlFor={props.name}>{props.label}</label>
        <input 
            type={props.type}
            className="form-control"
            name={props.name}
            id={props.name}
            placeholder={props.placeholder}
            value= {props.value}
            onChange = {props.onChange}
        /> <br />
    </div>
);

TextInput.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default TextInput;