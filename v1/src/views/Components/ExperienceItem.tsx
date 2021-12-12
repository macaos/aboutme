import React, { Fragment } from "react";

interface Info {
  titleKo: string;
  titleEn: string;
  tag: string[];
  releaseYear: string;
  releaseMonth: string;
  client: string;
  url: string;
}
interface ExperienceItem {
  info: Info;
}

const ExperienceItem = (props: ExperienceItem) => {
  const {
    titleKo,
    titleEn,
    tag,
    releaseYear,
    releaseMonth,
    client,
    url
  } = props.info;

  return (
    <Fragment>
      <li className="experience-item">
        <div className="float-flex year">{releaseYear}</div>
        <div className="float-flex month">{releaseMonth}</div>
        <div className="float-flex">
          <div className="title">{titleKo}</div>
          <div className="category">{tag}</div>
          <div className="client">Client : {client}</div>
        </div>
      </li>
    </Fragment>
  );
};

export default ExperienceItem;
