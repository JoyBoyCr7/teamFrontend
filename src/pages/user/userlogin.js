import { Form , Link } from "react-router-dom";

const ULogin = () => {
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
            <div className="submit-button">
            <input type="submit" value="Login" />
            <div className="notauser">
            <Link to="/user/signup">
                Don't have an account? register now !
            </Link>
            </div>
            </div>
        </Form>
        </div>
    </div>
}
export default ULogin;