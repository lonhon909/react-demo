import React from 'react';
import PropTypes from 'prop-types';

const Link = function(props) {
  const { active, children, onClick } = props;
  if (active) {
    return <span>{children}</span>
  }
  const linkClick = e => {
    e.preventDefault();
    onClick()
  }
  return (
    <a href="" onClick={linkClick}>{children}</a>
  )
}

Link.propTypes = {

}

export default Link;