import { Form , Link} from "react-router-dom";

const FLogin = () => {
    return <div className="containerUL">
        <div className="login-container">
        <p>Farmer login</p>
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
            <input type="submit" value="start plantin" />
            </div>
            <div className="notauser">
            <Link to="/farmer/signup">
               Can't plant? registar here!
            </Link>
            </div>
        </Form>
        </div>
    </div>
}

export default FLogin;


