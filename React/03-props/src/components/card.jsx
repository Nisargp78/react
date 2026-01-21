const Card = (props) => {
  return (
    <div className="app">
      <div className="card">
        <img src={props.img} alt="" />
        <h1>
          {props.user}, {props.age}
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt.
        </p>
        <button>View Profile</button>
      </div>
    </div>
  );
};

export default Card;
