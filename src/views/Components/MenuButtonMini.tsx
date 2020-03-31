import React, { useState, useEffect } from "react";
import classnames from "classnames";
import EventEmitter, { Event } from "../../utils/EventEmitter";

interface IMenuButtonMiniProps {
  label: string;
  activeName: string;
  clickHandler: (name: string) => void;
}

const MenuButtonMini = (props: IMenuButtonMiniProps) => {
  const [menuName, setMenuName] = useState(props.label);

  const isActive: boolean =
    menuName.toLowerCase() === props.activeName.toLowerCase();
  const { label } = props;
  return (
    <div className="button">
      <div
        className={classnames(["label-header", { active: isActive }])}
        onClick={() => {
          props.clickHandler(props.label);
        }}
      >
        {label}
      </div>
    </div>
  );
};

export default MenuButtonMini;
