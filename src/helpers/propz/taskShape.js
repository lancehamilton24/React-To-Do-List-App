import PropTypes from 'prop-types';

const taskShape = PropTypes.shape({
  uid: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
})

export default { taskShape };