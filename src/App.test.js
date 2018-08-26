import React from 'react';
import {render, wait} from 'react-testing-library';
import App from './App';

import fetch from 'fetch-mock'

test('wat', () => {
  const container = document.createElement('div');
  function App() {
    setTimeout(() => {
      throw new Error('hi');
    }, 100)
    return null
  }
  expect(() => {
    ReactDOM.render(<App />, container);
  }).toThrow();
});


// it('renders without crashing', async () => {
//   fetch.once('*', { data: '12345' })
  
//   const {getByText, queryByText} = render(<App />);
//   expect(getByText('Loading')).toBeInTheDocument()
//   // await wait(() => expect(queryByText('Loading')).not.toBeInTheDocument())
//   await wait(() => expect(queryByText('Loading')).toBeNull())
// });

// it.skip('crashing', async () => {
//   fetch.once('*', { data: '12345' })

//   const {getByText} = render(<App />);
//   expect(getByText('Loading')).toBeInTheDocument()
//   // await wait(() => expect(queryByText('Loading')).not.toBeInTheDocument())
//   await wait(() => expect(getByText('Error!')).toBeInTheDocument())
// });
