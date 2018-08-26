import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { fetchWeather } from './actions/weatherActions';
import Loader from './Loader';

class LandingPage extends Component {
  static propTypes = {
    hasError: PropTypes.bool,
    isLoading: PropTypes.bool.isRequired,
    temperature: PropTypes.number,
  }

  static defaultProps = {
    hasError: false,
    isLoading: false,
    temperature: 0,
  }

  componentDidMount() {
    this.props.onFetchWeather();
  }

  render() {
    const {isLoading, hasError, temperature} = this.props;
  
    // improve here to use render props pattern?
    return (
      <div>
        {isLoading ? (
          <Loader />
        ): (
          hasError ? (
            <div>Error!</div>
          ) : (
            <div>
              <b>Temperature: </b>
              <span>{temperature}</span>
            </div>
          )
        )}
      </div>
    );
  }
}

export default connect(
  ({ weather }) => ({ ...weather }),
  { onFetchWeather: fetchWeather }
)(LandingPage)
