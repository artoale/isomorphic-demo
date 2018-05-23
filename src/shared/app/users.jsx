import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import * as actions from './redux/actions/user-actions'
import React, { Component } from 'react';

class Users extends Component {
    static fetchData({ dispatch }) {
        return dispatch(actions.getUserListIfNeeded());
    }

    componentDidMount() {
        this.constructor.fetchData({ dispatch: this.props.dispatch});
    }

    render() {
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>User</title>
                </Helmet>
                <strong>User list</strong>
                <ul>
                {this.props.list.map((userId) => {
                    let href = `/user/${userId}`;
                        return <li key={userId}><Link to={href}>{userId}</Link></li>
                })}
                </ul>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        list: state.userlist,
    }
}
function mapDispatchToProps(dispatch) {
    const boundActionCreators = bindActionCreators(actions, dispatch);
    return {
        ...boundActionCreators,
        dispatch,
    }
}
export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Users);