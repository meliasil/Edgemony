import "./Button.css";

function Button(props) {
  const {children, type} = props;

  return <button type={type} className="btn">{children}</button>;
}

export { Button };
