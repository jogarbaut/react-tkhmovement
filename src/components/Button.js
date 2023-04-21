import classNames from 'classnames'

const Button = ({ 
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest // take in other props that were passed (i.e. event handlers)
}) => {

  const classes = classNames(rest.className, 'px-3 py-1.5 border flex items-center gap-3', {
    'border-blue-500 bg-blue-500 text-white': primary,
    'border-gray-900 bg-gray-900 text-white': secondary,
    'border-green-500 bg-green-500 text-white': success,
    'border-yellow-400 bg-yellow-400 text-white': warning,
    'border-red-500 bg-red-500 text-white': danger,
    'bg-white': outline, // later class names overrides earlier (i.e. bg-white will override previous colors)
    'rounded-full': rounded,
    'text-blue-500': outline && primary,
    'text-gray-900': outline && secondary,
    'text-green-500': outline && success,
    'text-yellow-500': outline && warning,
    'text-red-500': outline && danger
  })

  return (
    <button {...rest} className={classes}>{children}</button>
  )
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count = Number(!!primary)
    + Number(!!secondary)
    + Number(!!warning)
    + Number(!!success)
    + Number(!!danger)

    if (count > 1) {
      return new Error('Only one of primary, secondary, success, warning, danger can be true')
    }
  }
}

export default Button