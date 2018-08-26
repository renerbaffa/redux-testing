import React from 'react';
import {render, wait} from 'react-testing-library';
import App from './App';

import fetch from 'fetch-mock'

describe('Landing page tests', () => {
  afterEach(() => {
    fetch.restore()
  })

  it('renders without crashing', async () => {
    fetch.once('*', { data: '12345' })
    
    const {getByText, queryByText} = render(<App />);
    expect(getByText('Loading')).toBeInTheDocument()
    await wait(() => expect(queryByText('Loading')).not.toBeInTheDocument())
  });
  
  // need to find out why the test is breaking
  it('crashing', async () => {
    fetch.once('*', {status: 500})
  
    const {getByText, queryByText} = render(<App />);
    expect(getByText('Loading')).toBeInTheDocument()
    await wait(() => expect(getByText('Error!')).toBeInTheDocument())
  });
})
