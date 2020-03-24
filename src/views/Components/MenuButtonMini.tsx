import React, { useState } from "react";

interface IMenuButtonMiniProps {
  label: string;
  activeName: string;
  clickHandler: (name: string) => void;
}
const MenuButtonMini = (props: IMenuButtonMiniProps) => {
  const [menuName, setMenuName] = useState(props.label);
  const activeClass = (() => {
    console.log(
      "menuName",
      menuName.toLowerCase(),
      "props.activeName",
      props.activeName.toLowerCase()
    );
    if (menuName.toLowerCase() === props.activeName.toLowerCase()) {
      return " active";
    } else {
      return "";
    }
  })();
  //   console.log("activeClass", activeClass);
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
