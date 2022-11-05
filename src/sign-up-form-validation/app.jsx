import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import SignUpFormValidation from ".";

class App extends React.Component {

    state = {
        users: []
    }

    createUser = user => {
        user.id = new Date().getTime().toString();
        console.log(user.id);
        this.setState({
            users: [...this.state.users, user]
        });
    }

    render () {
        return (
            <div className="container">
                <h1 className="text-center my-4">Bismillah, Core React JS: Chapter Eight - Sign up Form with Validation</h1>
                <div className="row">
                    <div className="col-6">
                        <SignUpFormValidation createUser={this.createUser}/>
                    </div>
                    <div className="col-6">
                        <h1 className="text-center">User List</h1> <hr />
                        <ul className="list-group">
                            {this.state.users.map( user => (
                                <li key={user.id} className="list-group-item">
                                    {user.name} =&gt; {user.email}
                                </li>
                            ) )}

                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;