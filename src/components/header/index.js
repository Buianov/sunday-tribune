import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { fetchData } from '../../actions/crudActions';
import { POSTS, USERS } from '../../constants';

import { HeaderName, Centering } from './index.style';
import CircularProgress from '@material-ui/core/CircularProgress';

class Header extends Component {
  static propTypes = {
    fetchAll: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired,
  };

  state = {
    loading: true,
  };

  goHome = () => {
    const { push } = this.props;
    push('/');
  };

  componentDidMount = () => {
    const { fetchAll } = this.props;
    let promises = [];
    promises.push(fetchAll(POSTS));
    promises.push(fetchAll(USERS));

    Promise.all(promises).then(() => {
      this.setState({
        loading: false,
      });
    });
  };

  render() {
    const { loading } = this.state;

    return (
      <>
        <HeaderName onClick={this.goHome}>Sunday Tribune</HeaderName>
        {loading && (
          <Centering>
            <CircularProgress size={300} />
          </Centering>
        )}
      </>
    );
  }
}

const mapDispatchToProps = {
  fetchAll: fetchData,
  push,
};

export default connect(
  null,
  mapDispatchToProps,
)(Header);
