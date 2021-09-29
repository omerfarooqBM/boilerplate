import { BrowserRouter as Router, Route, Switch, Redirect, useLocation } from "react-router-dom";
import Login from '../containers/Login';
import Signup from "../containers/Signup";
import Profile from '../containers/Profile';
import Chat from '../containers/Chat'
import Page1 from '../containers/Page1'
import Page2 from '../containers/Page2'
import Page3 from '../containers/Page3'
import { onAuthStateChanged, auth } from './Firebase';
import { useEffect } from 'react';
import { useState } from 'react';



function PrivateRoute({ component: Component, auth, ...rest }) {
    return (
        <Route
            {...rest}
            component={({ location }) =>
                auth ? (
                    <Component />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: {
                                from: location.pathname,
                            },
                        }}
                    />
                )
            }
        />
    );
}

function PublicRoute({ component: Component, auth, ...rest }) {
    const location = useLocation();
    return (
        <Route
            {...rest}
            component={() =>
                !auth ? (
                    <Component />
                ) : (
                    <Redirect
                        to={location.state.from? location.state.from : "/profile"}
                    />
                )
            }
        />
    );
}


function AppRouter() {
    const [isAuth, setIsAuth] = useState(false)
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsAuth(true)
            } else {
                setIsAuth(false)
            }
        })
    }, [])
    return (
        <Router>
            <Switch>
                <PublicRoute auth={isAuth} exact path="/" component={Login} />
                <PublicRoute auth={isAuth} exact path="/signup" component={Signup} />
                <PrivateRoute auth={isAuth} exact path="/profile" component={Profile} />
                <PrivateRoute auth={isAuth} exact path="/chat" component={Chat} />
                <PrivateRoute auth={isAuth} exact path="/page1" component={Page1} />
                <PrivateRoute auth={isAuth} exact path="/page2" component={Page2} />
                <PrivateRoute auth={isAuth} exact path="/page3" component={Page3} />
            </Switch>
        </Router>
    )
}

export default AppRouter;