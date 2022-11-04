import React from "react";
import PropTypes from 'prop-types';

const TextInput = props => (
    <div className="form-group">
        <label htmlFor={props.name}>{props.label}</label>
        <input 
            className="form-control"
            type= {props.type}
            name= {props.name}
            id= {props.name}
            placeholder = {props.placeholder}
            value = {props.value}
            onChange = {props.onChange}  
        /> <br/>
    </div>
);

TextInput.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

TextInput.defaultProps = {
    type: 'text',
    label: '',
    placeholder: ''
}

export default TextInput;