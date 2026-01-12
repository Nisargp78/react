import Bookmark from "lucide-react/dist/esm/icons/bookmark";
const card = (props) => {
  return (
    <div className="card">
      <div>
        <div className="top">
          <img src={props.brandLogo} alt="hi" />
          <button>
            Save <Bookmark />
          </button>
        </div>
        <div className="center">
          <h3>
            {props.company} <span>{props.date}</span>
          </h3>
          <h2>{props.post}</h2>
          <div className="tag">
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div>
          <div>
            <h3>{props.pay}</h3>
            <p>{props.location}</p>
          </div>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default card;
