import PropTypes from 'prop-types';

const taskShape = PropTypes.shape({
  uid: PropTypes.string.isRequired,
  task: PropTypes.string.isRequired,
})

export default { taskShape };