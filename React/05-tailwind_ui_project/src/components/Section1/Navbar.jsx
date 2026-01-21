const Navbar = () => {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between px-14 py-8 ">
        <h4 className="flex items-center justify-center rounded-full border-2 w-42 h-9 uppercase bg-gray-900 text-white text-sm font-medium">
          Target Audience
        </h4>
        <button className="flex items-center justify-center uppercase text-m tracking-widest cursor-pointer">
          <i className="ri-corner-down-right-line px-2"></i>
          Digital Banking Platform
        </button>
      </div>
    </div>
  );
};

export default Navbar;
