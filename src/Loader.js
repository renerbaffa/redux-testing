import React from 'react'

const Loader = ({show, ...props}) =>
  show ? <div {...props}>Loading</div> : null

export default Loader
