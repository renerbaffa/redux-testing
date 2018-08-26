import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { fetchWeather } from './actions/weatherActions';
import Loader from './Loader';

class LandingPage extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    isLoading: false,
  }

  componentDidMount() {
    this.props.onFetchWeather();
  }

  render() {
    const {isLoading, hasError} = this.props;
  
    return (
      <div>
        <div>content</div>
        <Loader show={isLoading} />
        {hasError ? <div>Error!</div> : null}
      </div>
    );
  }
}

export default connect(
  ({ weather: { isLoading, hasError }}) => ({ isLoading, hasError }),
  { onFetchWeather: fetchWeather }
)(LandingPage)
