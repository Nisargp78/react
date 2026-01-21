import RightCardContent from "./RightCardContent";

const Rightcard = (props) => {
  return (
    <div className="h-145 w-66 shrink-0 overflow-hidden relative rounded-3xl bg-red-200">
      <img className="h-full object-cover" src={props.img} />
      <RightCardContent id={props.id} tag={props.tag} color={props.color} />
    </div>
  );
};

export default Rightcard;
