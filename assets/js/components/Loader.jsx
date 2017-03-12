import React, { PropTypes } from 'react';

const style = {
  position: 'absolute',
  left: '42%',
  top: '35%',
};

const Loader = () => (
  <img alt="loading..." src="/images/spin.gif" style={style} />
);

// Loader.propTypes = {
//   connecting: PropTypes.bool.isRequired,
// };

export default Loader;
