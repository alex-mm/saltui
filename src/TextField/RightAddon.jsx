import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { prefixClass } from '../Context';

const RightAddon = props => (
  <div
    className={classnames({
      [prefixClass('text-field-right-addon')]: true,
    })}
  >
    {props.children}
  </div>
);

RightAddon.defaultProps = {};
RightAddon.propTypes = {
  focus: PropTypes.bool,
  hover: PropTypes.bool,
  children: PropTypes.any,
};
RightAddon.displayName = 'RightAddon';

export default RightAddon;
