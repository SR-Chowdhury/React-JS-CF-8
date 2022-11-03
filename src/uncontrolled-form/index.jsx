import React from "react";

class UncontrolledForm extends React.Component {

    submitHandler = event => {
        event.preventDefault();
        // console.dir(event.target); // We will find the object property
        // console.log(event.target.name); // We will find the clicked object property
        //  console.log(event.target.name.value);  
        const data = {};
        data.name = event.target.name.value;
        data.email = event.target.email.value;
        data.password = event.target.password.value;
        console.log(data);
        event.target.reset(); // Reset function will reset the form value
    }

    render() {
        return (
            <div className="container">
                <h1 className="text-center my-5">Bismillah, Core React JS: Chapter Eight - Uncontrolled Form</h1>
                <form className="form-group" onSubmit={this.submitHandler}>
                    <label>Please Enter Your Name</label>
                    <input type="text"
                        className="form-control" 
                        placeholder="Type your name" 
                        name="name"
                    /> <br />
                    <label>Please Enter Your Email Address</label>
                    <input type="email"
                        className="form-control" 
                        placeholder="Type your email address" 
                        name="email"
                    /> <br />
                    <label>Please Enter Your Password</label>
                    <input type="password"
                        className="form-control" 
                        placeholder="*********" 
                        name="password"
                    /> <br />
                    <button type="submit" className="btn btn-lg btn-danger">Submit</button>
                </form>
            </div>
        );
    }
}

export default UncontrolledForm;