import Navbar from '../app/navbar.jsx';
import Home from '../app/home.jsx';
import Users from '../app/users.jsx';
import User from '../app/user.jsx';
import FourOFour from '../app/404.jsx';

export default {
    routes: [
        {
            path: '/',
            component: Home,
            exact: true
        },
        {
            path: '/users',
            component: Users,
            exact: true
        },
        {
            path: '/user/:id',
            component: User,
            exact: true,
        },
        {
            component: FourOFour,
            exact: false,
        }
    ],
    redirects: [
        {
            from: '/people',
            to: '/user',
            status: 301
        }
    ]
}