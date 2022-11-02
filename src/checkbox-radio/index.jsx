import React from "react";

class CheckboxAndRadio extends React.Component {

    state = {
        gender: '',
        agree: false
    }

    changeHandler = event => {
        this.setState({
            gender: event.target.value
        });
    }

    handleCheckbox = event => {
        this.setState({
            agree: event.target.checked
        });
    }

    handleSubmit = () => {
        console.log(this.state);
    }    

    render () {

        return (
            <div className="container"> 
                <h1 className="my-3 text-center">Bismillah, Core React JS: Chapter Eight - Checkbox & Radio Button</h1>
                <div>
                    <label htmlFor="#">Select Gender: &nbsp;</label>
                    <input 
                        type="radio" 
                        className=""
                        name="gender"
                        value="Male"
                        onChange={this.changeHandler}            
                    /> Male &nbsp;
                    <input 
                        type="radio" 
                        className=""
                        name="gender"
                        value="Female"
                        onChange={this.changeHandler}            
                    /> Female <br />
                    <input 
                        type="checkbox"
                        name="checkbox"
                        onChange={this.handleCheckbox} 
                    />&nbsp; I agree the terms and conditions.
                    <br /><br />
                    <button className="btn btn-sm btn-success" onClick={this.handleSubmit}>Submit</button>
                </div>
            </div>
        );
    }
}

export default CheckboxAndRadio;