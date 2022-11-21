import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Routes
} from "react-router-dom";

import logo from "../logo.svg";
import {ShoppingPage} from "../02-component-patterns/pages/ShoppingPage";

export const Navigation = () => {
    return (
        <Router>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React Logo" />
                    <ul>
                        <li>
                            <NavLink
                                to="/"
                                className={({isActive}) =>
                                    isActive ? "nav-active" : ""
                                }
                            >
                                ShoppingPage
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({isActive}) =>
                                    isActive ? "nav-active" : ""
                                }
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/users"
                                className={({isActive}) =>
                                    isActive ? "nav-active" : ""
                                }
                            >
                                Users
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/about">About</Route>
                    <Route path="/users">Users</Route>
                    <Route path="/" element={<ShoppingPage />}></Route>
                </Routes>
            </div>
        </Router>
    );
};
