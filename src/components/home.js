import LoginForm from "./loginForm";
import { Link } from "react-router-dom";

const Home = () => (
    <div>
        <h2>Home</h2>
        <LoginForm />
        <p>New user?</p>
        <Link to='/signup'>Sign Up</Link>
    </div>
)

export default Home;