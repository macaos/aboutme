import React, { useState } from "react";

interface IMenuButtonMiniProps {
  label: string;
  activeName: string;
  clickHandler: (name: string) => void;
}
const MenuButtonMini = (props: IMenuButtonMiniProps) => {
  const [menuName, setMenuName] = useState(props.label);
  const activeClass = (() => {
    if (menuName.toLowerCase() === props.activeName.toLowerCase()) {
      return " active";
    } else {
      return "";
    }
  })();

  return (
    <div
      className={`text-label${activeClass}`}
      onClick={() => {
        props.clickHandler(props.label);
      }}
    >
      {props.label}
    </div>
  );
};

export default MenuButtonMini;
