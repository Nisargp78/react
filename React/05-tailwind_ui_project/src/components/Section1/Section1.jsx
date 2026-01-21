import Navbar from "./Navbar.jsx";
import PageContent from "./PageContent.jsx";

const Section1 = (props) => {
  return (
    <div className="h-screen w-screen">
      <Navbar />
      <PageContent users={props.users} />
    </div>
  );
};

export default Section1;
