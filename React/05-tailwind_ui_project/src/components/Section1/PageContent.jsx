import LeftContainer from "./LeftContainer.jsx";
import RightContainer from "./RightContainer.jsx";

const PageContent = (props) => {
  return (
    <div className="pb-7 pt-6 px-14 flex items-center gap-10 h-[85.8vh]">
      <LeftContainer />
      <RightContainer users={props.users} />
    </div>
  );
};

export default PageContent;
