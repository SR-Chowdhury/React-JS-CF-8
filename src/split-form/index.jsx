import React from "react";
import Form from "./form";

class SplitForm extends React.Component {

    state = {
        name: '',
        email: '',
        password: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        event.target.reset();
        this.setState({name: '', email: '', password: ''});
    }

    render () {

        return (
            <div className="container">
                <h1 className="text-center my-5">Bismillah, Core React JS: Chapter Eight - Split Form into multiple components</h1>
                <Form
                    obj={this.state}
                    handleChange = {this.handleChange}
                    handleSubmit = {this.handleSubmit}
                />
            </div>
        );
    }
} 

export default SplitForm;