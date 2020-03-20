import React, { Fragment, useRef, useEffect } from "react";
import { Cubic, TweenLite } from "gsap";
import EventEmitter, { Event } from "../../utils/EventEmitter";
import { useHistory } from "react-router-dom";

interface TextLabelProps {
  letter: string;
  hidelabel?(): void;
}

const TextLabel = (props: TextLabelProps) => {
  useEffect(() => {
    attachEvent();
  }, []);

  const { letter } = props;
  const letterList = [];
  let refList: any[] = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null)
  ];
  refList.length = letter.length;
  let i: number = 0;
  for (i = 0; i < letter.length; i++) {
    letterList.push(
      <div className="letter-unit" key={i} ref={refList[i]}>
        {letter[i]}
      </div>
    );
  }

  function attachEvent() {
    EventEmitter.subscribe(Event.CHANGE_NAV_STATE, (isShow: boolean) => {
      if (isShow) {
        show();
      } else {
        hide();
      }
    });
  }

  function show() {
    let i: number = 0;
    for (i = 0; i < refList.length; i++) {
      const t: number = +(2 * Math.random()).toFixed(1) + 1.5;
      TweenLite.to(refList[i].current, t, {
        y: 0,
        alpha: 1,
        rotationZ: "0deg",
        ease: Cubic.easeInOut
      });
    }
  }

  function hide(isActive: boolean = false) {
    let i: number = 0;
    for (i = 0; i < refList.length; i++) {
      const oddN: number = Math.random() - 0.5 > 0 ? 1 : -1;
      const t: number = +(2 * Math.random()).toFixed(1) + 1.5;
      const posY: number = +(200 * Math.random()).toFixed(0) + 400;
      const rotZ: number = (+(200 * Math.random()).toFixed(0) + 400) * oddN;
      TweenLite.to(refList[i].current, t, {
        y: posY,
        rotationZ: rotZ + "deg",
        alpha: 0,
        ease: Cubic.easeInOut
      });
    }
  }

  return <Fragment>{letterList}</Fragment>;
};

export default TextLabel;
