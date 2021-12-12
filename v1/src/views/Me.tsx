import React, { useState, useEffect } from "react";
import classnames from "classnames";

const Me = () => {
  const [isOn, setIsOn] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsOn(true);
    }, 500);
  }, []);
  return (
    <ul className={classnames(["depth1 view-Me", { on: isOn }])}>
      <h2>안녕하세요. 저는 UI/UX Developer JayKim(macaos)입니다. </h2>
      {/* Hello. I'm UI/UX Developer JayKim(macaos). */}
      <h3>현재.</h3>
      삼성화재 다이렉트 온라인보험의 Front End 구조를 설계하고 사용자를 위한
      UI를 개선해 나가는 일을 하고 있습니다. 현재 내가 만드는 아키텍쳐는 주로
      보험을 쉽게 만들기 위한 프레임워크입니다.
      <h3>생각해.</h3>
      저는 UI 인터렉션을 좋아하고 인터렉션을 통해 어떻게 사용자의 이해를 높일 수
      있을지를 고민합니다. 나는 UI 움직임과 사용성에 집착하는 사람들과 함께
      일하길 원합니다. 사용자를 중심에 두고 UI를 고민하는 사람들을 좋아합니다.
      <h3>사용해.</h3>
      Front End 기술들을 받아들이는 것에 거부감은 없습니다. 주로 Javascript,
      Typescript, React, nodejs에 익숙합니다. 그밖에 vue, React Native, Swift,
      PHP 등을 경험하였고 AfterEffect, Flash, SilverLight, Photoshop등 프로덕트
      레벨의 그래픽 & 모션작업도 경험하였습니다.
      <div>[깃헙링크] [코드펜] [링크드인]</div>
    </ul>
  );
};

export default Me;
