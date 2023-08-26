import { Form , Link } from "react-router-dom";

const FSignup = () => {
    return <div className="containerUL">
        < div className="login-container">
        <p>Farmer Signup</p>
        <Form action="" method="POST" className="login-form">
            <div className="input-group">
            <label htmlFor="farmername">Farmername</label>
            <input type="text" name="farmername" id="farmername" />
            </div>
            <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
            </div>
            <div className="input-group">
            <input type="submit" value="Signup" />
            </div>
            <div className="notauser">
            <Link to="/farmer/login">
               Start planting !
            </Link>
            </div>
        </Form>
    </div>

        </div>
}

export default FSignup;