import {Suspense} from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    NavLink,
    Navigate
} from "react-router-dom";

import logo from "../logo.svg";
import {routes} from "./routes";

const getRoutes = () =>
    routes.map(({Component, path}) => (
        <Route key={path} path={path} element={<Component />} />
    ));

const getLinks = () =>
    routes.map(({to, name}) => (
        <li key={to}>
            <NavLink
                to={to}
                className={({isActive}) => (isActive ? "nav-active" : "")}
            >
                {name}
            </NavLink>
        </li>
    ));

export const Navigation = () => {
    return (
        <Suspense fallback={<span>Loading...</span>}>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="React Logo" />
                        <ul>{getLinks()}</ul>
                    </nav>

                    <Routes>
                        {getRoutes()}
                        <Route
                            path="/*"
                            element={<Navigate to={routes[0].to} replace />}
                        />
                    </Routes>
                </div>
            </BrowserRouter>
        </Suspense>
    );
};
