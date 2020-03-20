import React, { Fragment } from "react";

interface ICareerItem {
  year: string;
  companyname: string[];
  part: string;
  doit: string[];
}
interface ICareerProps {
  data: any;
}

const CareerItem = (props: ICareerProps) => {
  const { terms, companyname, part, doit } = props.data;
  const companynames = companyname.map((item: string, idx: number) => {
    return <div key={`cn${idx}`}>{item}</div>;
  });
  const doitLen = doit.length;
  const doits = doit.map((item: string, idx: number) => {
    // last
    let divideStr = " / ";
    if (doitLen === idx + 1) {
      divideStr = "";
    }
    return (
      <Fragment key={`doit${idx}`}>
        <span>{item}</span>
        {divideStr}
      </Fragment>
    );
  });
  return (
    <Fragment>
      <li className="view-CareerItem">
        <div className="year">{terms}</div>
        <div className="companyname">{companynames}</div>
        <div className="part">{part}</div>
        <div className="skill">{doits}</div>
      </li>
    </Fragment>
  );
};

export default CareerItem;
