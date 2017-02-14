import React from 'react';
import {connect} from 'react-redux';
import { browserHistory } from 'react-router';

export function requireAuthentication(Component) {

    class AuthenticatedComponent extends React.Component {

        componentWillMount () {
            this.checkAuth(this.props.isAuthenticated);
        }

        componentWillReceiveProps (nextProps) {
            this.checkAuth(nextProps.isAuthenticated);
        }

        checkAuth (isAuthenticated) {
            if (!isAuthenticated) {
              let redirectAfterLogin = this.props.location.pathname;
              browserHistory.push(`/login?next=${redirectAfterLogin}`);
            }
        }

        render () {
            return (
                <div>
                    {this.props.isAuthenticated === true
                        ? <Component {...this.props}/>
                        : null
                    }
                </div>
            )

        }
    }

    const mapStateToProps = (state) => ({
        jwt: state.authentication.jwt,
        userName: state.authentication.userName,
        isAuthenticated: state.authentication.isAuthenticated
    });

    return connect(mapStateToProps)(AuthenticatedComponent);

}
