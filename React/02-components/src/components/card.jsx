const Card = () => {
  const user = "Nisarg Prajapati";
  const age = 21;

  return (
    <div className="Card">
      <h1>React.JS</h1>
      <h2>
        Welcome, {user.split(" ")[0]} {age}.
      </h2>
    </div>
  );
};

export default Card;
