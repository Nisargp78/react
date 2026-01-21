import Rightcard from "./Rightcard";

const ImageContainer = (props) => {
  return (
    <div
      id="right"
      className="h-full w-3/4 overflow-x-auto flex flex-nowrap gap-10"
    >
      {props.users.map(function (elem, idx) {
        return (
          <Rightcard
            key={idx}
            id={idx}
            img={elem.img}
            tag={elem.tag}
            color={elem.color}
          />
        );
      })}
    </div>
  );
};

export default ImageContainer;
