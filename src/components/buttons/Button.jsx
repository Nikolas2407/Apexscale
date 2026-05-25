import '../../App.css'

function Button({
  children,
  fontSize,
  backgroundColor,
  onClick,
  className = '',
  link,
  ...props
}) {



  if (link) {
    return (
      <a
        href={link}
        className={className}
        style={{
          fontSize,
          backgroundColor
        }}
        {...props}
      >
        {children}
      </a>
    )
  }



  return (
    <button
      className={className}
      style={{
        fontSize,
        backgroundColor
      }}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button