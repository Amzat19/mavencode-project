const Button = ({ children, onClick, className, ...restProps }) => {
  return (
    <button onClick={onClick} className={className} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
