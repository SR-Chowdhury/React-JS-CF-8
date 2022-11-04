import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Form from "./form";

const initValue = {
    name: '',
    email: '',
    birthDate: '',
    gender: '',
    password: ''
}

class App extends React.Component {

    state = {
        values: initValue,
        agreement: false
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
        console.log(this.state.values);
        event.target.reset();
        this.setState({values: initValue, agreement: false});
    }

    render () {
        return (
            <div className="container">
                <h1 className="text-center my-5">Bismillah, Core React JS: Chapter Eight - Sign up Form</h1>
                <div className="row">
                    <div className="col-6">
                        <Form
                            values={this.state.values}
                            agreement = {this.state.agreement}
                            handleChange = {this.handleChange}
                            handleAgreement = {this.handleAgreement}
                            handleSubmit = {this.handleSubmit}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;