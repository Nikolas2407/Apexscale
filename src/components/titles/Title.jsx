import '../../App.css'

function Title({ children, size = 'h1', fontSize, className = '', ...props }) {
  const Tag = size

  return (
    <Tag
      className={`h1 ${className}`}
      style={{ fontSize }}
      {...props}
    >
      {children}
    </Tag>
  )
}

export default Title