function Breakfast(props) {
    console.log(props);
  return (
    <div>
      <h2>Breakfast</h2>
      <p>Food: {props.food}</p>
    </div>
  );
}

export default Breakfast;
