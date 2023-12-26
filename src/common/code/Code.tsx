import Highlight from "react-highlight";
import "highlight.js/styles/default.css";
import "./codeStyle.css";

const Code = ({ data }: { data: string }): JSX.Element => {
  return <Highlight className="language-ts">{data}</Highlight>;
};

export default Code;
