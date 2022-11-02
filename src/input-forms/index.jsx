import React from "react";

class InputElements extends React.Component {

    state = {
        name: '',
        country: '',
        birthDate: ''
    }

    changeHandler = event => {
        // console.log(event.target.name);
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    buttonHandler = () => {
        console.log(this.state);
    }

    render () {
        const {name, country, birthDate} = this.state;

        return (
            <div className="container"> 
                <h1 className="my-3 text-center">Bismillah, Core React JS: Chapter Eight - Input Elements</h1>
                <div>
                    <label htmlFor="#">Type Your name</label>
                    <input 
                        className="form-control" 
                        type="text" name="name" 
                        placeholder="Enter your name"
                        value={name} 
                        onChange={this.changeHandler}
                    />
                    <label htmlFor="#" className="mt-3">Select your country</label>
                    <select name="country" className="form-control" onChange={this.changeHandler} value={country}>
                        <option>-Select-</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="Canada">Canada</option>
                    </select>
                    <label htmlFor="#" className="mt-3">Your Date of Birth</label>
                    <input 
                        name="birthday" type="date" 
                        className="form-control" 
                        onChange={this.changeHandler} 
                        value={birthDate}
                    />
                    <button className="btn btn-lg btn-outline-danger my-3" onClick={this.buttonHandler}>
                            Submit
                    </button>
                    <p>{this.state.name}</p>
                </div>
            </div>
        );
    }
}

export default InputElements;