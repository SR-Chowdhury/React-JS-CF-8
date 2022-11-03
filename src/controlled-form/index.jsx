import React from "react";

class ControlledForm extends React.Component {

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

    submitHandler = event => {
        event.preventDefault();
        console.log(this.state);
        event.target.reset();
        this.setState({name: '', email: '', password: ''});
    }

    render() {
        const {name, email, password} = this.state
        return (
            <div className="container">
                <h1 className="text-center my-5">Bismillah, Core React JS: Chapter Eight - Controlled Form</h1>
                <form className="form-group" onSubmit={this.submitHandler}>
                    <label>Please Enter Your Name</label>
                    <input type="text"
                        className="form-control" 
                        placeholder="Type your name" 
                        name="name"
                        value={name}
                        onChange={this.handleChange}
                    /> <br />
                    <label>Please Enter Your Email Address</label>
                    <input type="email"
                        className="form-control" 
                        placeholder="Type your email address" 
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                    /> <br />
                    <label>Please Enter Your Password</label>
                    <input type="password"
                        className="form-control" 
                        placeholder="*********" 
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                    /> <br />
                    <button type="submit" className="btn btn-lg btn-danger">Submit</button>
                </form>
            </div>
        );
    }
}

export default ControlledForm;