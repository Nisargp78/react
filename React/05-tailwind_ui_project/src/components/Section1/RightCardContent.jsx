const RightCardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full p-5 flex flex-col justify-between">
      <h2 className="h-12 w-12 bg-white rounded-full flex items-center justify-center text-xl font-semibold">
        {props.id + 1}
      </h2>
      <div>
        <p className="text-lg text-shadow-2xs leading-relaxed text-white mb-10">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
          distinctio voluptatum, fuga atque architecto amet unde!
        </p>
        <div className="flex justify-between">
          <button
            style={{ backgroundColor: props.color }}
            className="text-white font-medium px-8 py-2 rounded-full cursor-pointer"
          >
            {props.tag}
          </button>
          <i
            style={{ backgroundColor: props.color }}
            className="ri-arrow-right-line bg-blue-600 text-white px-3 py-1 text-lg rounded-full cursor-pointer"
          ></i>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
