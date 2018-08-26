import { FETCHING_WEATHER } from "../constants/weather";

export const fetchWeather = (stationName = 'aeropuertopalma', period = 'lastdata') =>
  dispatch => {
    const request = async () => {
      try {
        const response = await fetch(`http://api.oceandrivers.com:80/v1.0/getAemetStation/${stationName}/${period}`);
        return await response.json();
      } catch (err) {
        throw new Error(err);
      }
    }
    dispatch({
      type: FETCHING_WEATHER,
      payload: request,
    }).catch(err => {
      // this catch is only to prevent the error propagation to jest:
      // https://stackoverflow.com/questions/51760408/should-i-catch-redux-promise-errors-at-dispatch-or-just-handle-it-in-the-reducer
      console.log('err', err)
    });
  }
