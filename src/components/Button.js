import './Button.css';

function Button(props){

  return(
    <button
      onClick={props.onClick}
      className={`btn btn-calculator btn-${props.type ?? 'default'}`}
    >
      {props.children}
    </button>
  );
} export default Button;