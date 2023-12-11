import Star from "./Star";
import StarsProps from "../models/StarsProps";

function Stars(props: StarsProps) {
  const { count } = props;

  { if (count < 1 || count > 5) return <></> }
  return (
    <ul className="card-body-stars u-clearfix">
      {Array.from({length: count}).map(() => <Star />)}
    </ul>
  )
}

export default Stars;