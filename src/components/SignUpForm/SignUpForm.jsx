import { Component } from "react";
import { signUp } from "../../utilities/users-api";

export default class SignUpForm extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        error: ''
    };

    handleChange = (e) => {
        this.setState({ ...this.state, [e.target.name]: e.target.value, error: '' })
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const formData = { ...this.state };
            delete formData.error;
            const user = await signUp(formData);
            this.props.setUser(user);
        } catch {
            this.setState({ error: 'Sign Up Failed' });
        }
    };
    render() {
        const disable = this.state.password;
        return (
            <div>
                <div className="signupBox">
                    <form autoComplete="off" onSubmit={this.handleSubmit}>
                        <label>Username</label>
                        <input type="text" name="username" value={this.state.username} onChange={this.handleChange} required />
                        <label>Email</label>
                        <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
                        <label>Password</label>
                        <input type="password" name="password" value={this.state.password} required />
                        <button type="submit" disabled={disable}>Click to Sign Up</button>
                    </form>
                </div>
                <p className="error-message">&nbsp;{this.state.error}</p>
            </div>
        )
    }
}