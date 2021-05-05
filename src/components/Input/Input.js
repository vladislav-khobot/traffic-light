import './Input.scss';

function Input(props) {
  const { value, onChange } = props;
  
  return (
    <span>
      <p>Set timeout (sec):</p>
      <input type="number" value={value} onChange={onChange} />
    </span>
  );
}

export { Input };