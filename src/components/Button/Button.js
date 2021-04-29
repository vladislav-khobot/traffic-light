import './Button.scss';

function Button(props) {
  const { name, onClick } = props;
  return (
    <button className="btn" onClick={onClick}>
      {name}
    </button>
  );
}

export { Button };