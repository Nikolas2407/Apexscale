import '../../App.css'

function Button({ children, fontSize, backgroundColor, onClick, className = '', ...props }) {
  return (
    <button
      className={className}
      style={{ fontSize, backgroundColor }}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button