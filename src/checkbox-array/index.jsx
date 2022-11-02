import React from "react";

class CheckboxAndArray extends React.Component { 

    state = {
        skills: []
    }

    handleChange = event => {
        if(event.target.checked) {

            this.setState({
                // here we can use push / pull method for inserting data into skills array;
                // but in React push / pull is not working; so we need to pass the skills array immutable way as a new array 
                skills: [...this.state.skills, event.target.value]
            });
        }
        else {
            const newSkillsArray = this.state.skills.filter( individualSkill => individualSkill != event.target.value );
            this.setState({skills: newSkillsArray});
        }
    }

    render () {

        const {skills} = this.state;

        return (
            <div className="container"> 
                <h1 className="my-3 text-center">Bismillah, Core React JS: Chapter Eight - Advance Checkbox & Array</h1>
                <div>
                    <label htmlFor="#">Select Your Skill: &nbsp;</label>
                    <input 
                        type="checkbox" name="skills"
                        value="Java"
                        checked = {skills.includes('Java')} 
                        onChange={this.handleChange}
                    />&nbsp;Java &nbsp;
                    <input 
                        type="checkbox" name="skills"
                        value="Python"
                        checked = {skills.includes('Python')} 
                        onChange={this.handleChange}
                    />&nbsp;Python
                    <br /><br />
                    <button className="btn btn-sm btn-info" onClick={ () => console.log(this.state.skills)}>Show Result</button>
                </div>
            </div>
        );
    }
}

export default CheckboxAndArray;