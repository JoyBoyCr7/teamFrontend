import { Form } from "react-router-dom";
import { farmerSignupAction } from "../../actions";

const USignup = () => {
return <div className="containerUL">
        <div className="login-container">
        <p>Login fo-food</p>
        <Form action="" method="POST" className="login-form">
            <div className="input-group">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" placeholder="Username"/>
            </div>
            <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" placeholder="Password"/>
            </div>
            <div className="input-group">
            <label htmlFor="zip">Zip</label>
            <input type="text" name="zip" id="zip" placeholder="Zip"/>
            </div>
            <div className="submit-button">
            <input type="submit" value="Login" />
            </div>
        </Form>
        </div>
    </div>
}



export default USignup;
