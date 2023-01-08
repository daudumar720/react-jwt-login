import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { LoginForm } from "./LoginForm";
import UserList from "./UserList";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="row" style={{ paddingRight: 300, paddingLeft: 300 }}>
          <Link className="btn btn-dark col m-3" to="/login">
            Login
          </Link>
          <Link className="btn btn-dark col m-3" to="/Users">
            Users
          </Link>
        </div>
        <hr />
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/users" element={<UserList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export { AppRouter };
