import './Circle.scss';

function Circle(props) {
  let { color } = props;
  if (!color) color = 'black';

  return (
    <div className={`circle ${color}`} />
  );
}

export { Circle };