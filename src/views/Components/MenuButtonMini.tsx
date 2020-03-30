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
  const [isShowAll, setIsShowAll] = useState(false);
  useEffect(() => {
    EventEmitter.subscribe(Event.CLICK_NAV_MINI, (name: string) => {
      setIsShowAll(true);
      setTimeout(() => {
        setIsShowAll(false);
      }, 3000);
    });
  }, []);

  const isActive: boolean =
    menuName.toLowerCase() === props.activeName.toLowerCase();
  const { label } = props;
  console.log("isShowAll", label, isShowAll);
  return (
    <div className={classnames(["button", { "show-all": isShowAll }])}>
      <div
        // className={`text-label${activeClass}`}
        className={classnames(["label-header", { active: isActive }])}
        onClick={() => {
          props.clickHandler(props.label);
        }}
      >
        {label.substr(0, 1)}
      </div>
      <div className={classnames(["label-body"])}>{label.substring(1)}</div>
    </div>
  );
};

export default MenuButtonMini;
