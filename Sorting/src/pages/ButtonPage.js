import React from "react";
// import PropTypes from 'prop-types';
import className from 'classnames';

// const finalClassName= className({
// 'bg-blue-500': true,

// });


function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  onClick,
  ...rest
}) {
    const classes = classNames( rest.className ,' flex items-centre px-3 py-1.5 border',{
        'border-blue-500 bg-blue-500 text-white': primary,
        'border-gray-900 bg-gray-900 text-white': secondary,
        'border-yellow-500 bg-yellow-500 text-white': warning,
        'border-red-500 bg-red-500 text-white': danger,
        'border-green-500 bg-green-500 text-white': success,
        'rounded-full': rounded,
        'bg-white': outline,
        'text-blue-500': outline && primary,
        'text-gray-500': outline && secondary,
        'text-green-500': outline  && success,
        'text-yellow-500': outline  && warning,
        'text-red-500': outline && danger,
    });



  return (
    <button {...rest}  className={classes}>
      {children}
    </button>
  );
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!success) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        'Only one of primary, secondary, success, warning, danger can be true'
      );
    }
  },
};

export default Button;
