import React from "react";
import { Link } from "react-router-dom";

interface Info {
  title: string;
  tag: string[];
  detail: string;
  key: string;
}
interface IPlaygroundItemProps {
  info: Info;
  key: string;
}

const PlaygroundItem = (props: IPlaygroundItemProps) => {
  const { title, tag, detail, key } = props.info;
  return (
    <div className="view-PlaygroundItem" key={key}>
      <div className="tag">#{tag}</div>
      <Link to={`/playground/${key}`} className="title">
        {title}
      </Link>
    </div>
  );
};

export default PlaygroundItem;
