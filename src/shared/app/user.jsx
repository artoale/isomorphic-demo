import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Helmet } from 'react-helmet';
import * as actions from './redux/actions/user-actions'

class User extends Component {
    static fetchData({ dispatch, params }) {
        if (params.id) {
            return dispatch(actions.getNameIfNeeded(params.id));
        }
    }

    componentDidMount() {
        this.constructor.fetchData({
            dispatch: this.props.dispatch,
            params: this.props.match.params
        });
    }

    render() {
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>User</title>
                </Helmet>
                <strong>User: {this.props.name} </strong>
                <p>User id is {this.props.id}</p>
            </div>
        );
    }
}
function mapStateToProps(state, ownProps) {
    const id = ownProps.match.params.id;
    return {
        ...state.users[id],
        id,
    }
}
function mapDispatchToProps(dispatch) {
    const boundActionCreators = bindActionCreators(actions, dispatch);
    return {
        ...boundActionCreators,
        dispatch,
    }
}
export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(User);