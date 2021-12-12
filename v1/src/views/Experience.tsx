import React, { useState, useEffect } from "react";
import ExperienceItem from "./Components/ExperienceItem";
import classnames from "classnames";

const Experience = () => {
  const [isOn, setIsOn] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsOn(true);
    }, 500);
  }, []);
  const items = getExperienceList().map((item, i) => {
    return <ExperienceItem info={item} key={i} />;
  });
  return (
    <ul className={classnames(["depth1 view-Experience", { on: isOn }])}>
      {items}
    </ul>
  );
};

function getExperienceList(): any[] {
  return [
    {
      titleKo: "토스 실손보험",
      titleEn: "토스 실손보험",
      tag: ["INSURANCE", "WEB APPLICATION"],
      releaseYear: "2019",
      releaseMonth: "11",
      client: "삼성화재",
      url: ""
    },
    {
      titleKo: "이륜자동차보험 v4.0",
      titleEn: "이륜자동차보험 v4.0",
      tag: ["INSURANCE", "WEB APPLICATION"],
      releaseYear: "",
      releaseMonth: "7",
      client: "삼성화재",
      url: ""
    },
    {
      titleKo: "자동차보험 배서 v4.0",
      titleEn: "자동차보험 배서 v4.0",
      tag: ["INSURANCE", "WEB APPLICATION"],
      releaseYear: "",
      releaseMonth: "6",
      client: "삼성화재",
      url: ""
    },
    {
      titleKo: "자동차보험 v4.0",
      titleEn: "자동차보험 v4.0",
      tag: ["INSURANCE", "WEB APPLICATION"],
      releaseYear: "2018",
      releaseMonth: "10",
      client: "삼성화재",
      url: ""
    },
    {
      titleKo: "삼성화재 다이렉트 UI Framework v4.0",
      titleEn: "삼성화재 다이렉트 UI Framework v4.0",
      tag: ["INSURANCE", "WEB APPLICATION"],
      releaseYear: "",
      releaseMonth: "10",
      client: "삼성화재",
      url: ""
    },
    {
      titleKo: "여행자보험 광고 키오스크( 인천공항 )",
      titleEn: "여행자보험 광고 키오스크( 인천공항 )",
      tag: ["KIOSK", "INSURANCE"],
      releaseYear: "",
      releaseMonth: "2",
      client: "삼성화재",
      url: ""
    },
    {
      titleKo: "삼성화재 다이렉트 ERP",
      titleEn: "삼성화재 다이렉트 ERP",
      tag: ["INSURANCE", "WEB APPLICATION"],
      releaseYear: "2017",
      releaseMonth: "10",
      client: "삼성화재",
      url: "https://direct.samsungfire.com"
    },
    {
      titleKo: "해외여행보험 키오스크( 인천공항 보험 데스크 )",
      titleEn: "해외여행보험 키오스크( 인천공항 보험 데스크 )",
      tag: ["KIOSK", "INSURANCE"],
      releaseYear: "2016",
      releaseMonth: "5",
      client: "삼성화재",
      url: "offline"
    },
    {
      titleKo: "해외여행보험 가족형 v3.0",
      titleEn: "해외여행보험 가족형 v3.0",
      tag: ["INSURANCE", "WEB APPLICATION"],
      releaseYear: "",
      releaseMonth: "5",
      client: "삼성화재",
      url: "dead"
    },
    {
      titleKo: "TIMER iOS Application",
      titleEn: "TIMER iOS Application",
      tag: ["iOS", "iOS APPLICATION"],
      releaseYear: "",
      releaseMonth: "4",
      client: "내 작업",
      url: "dead"
    },
    {
      titleKo: "Voment iOS Photo Application",
      titleEn: "Voment iOS Photo Application",
      tag: ["iOS", "iOS APPLICATION"],
      releaseYear: "",
      releaseMonth: "3",
      client: "내 작업",
      url: "dead"
    },
    {
      titleKo: "Tilez iOS Pattern Maker Application",
      titleEn: "Tilez iOS Pattern Maker Application",
      tag: ["iOS", "iOS APPLICATION"],
      releaseYear: "",
      releaseMonth: "1",
      client: "내 작업",
      url: "dead"
    },
    //2015
    {
      titleKo: "무배당 연금보험 v3.0",
      titleEn: "10월 무배당연금 오픈",
      tag: ["INSURANCE", "WEB APPLICATION"],
      releaseYear: "2015",
      releaseMonth: "10",
      client: "삼성화재",
      url: ""
    },
    {
      titleKo: "해외/유학 여행보험 v3.0",
      titleEn: "해외/유학 여행 보험",
      tag: ["INSURANCE", "WEB APPLICATION"],
      releaseYear: "",
      releaseMonth: "6",
      client: "삼성화재",
      url: ""
    },
    {
      titleKo: "FFIN iOS Photo Application",
      titleEn: "7월 app-FFIN",
      tag: ["iOS", "iOS APPLICATION"],
      releaseYear: "",
      releaseMonth: "5",
      client: "내 작업",
      url: ""
    },
    {
      titleKo: "국내여행보험 v3.0",
      titleEn: "국내 여행자 보험",
      tag: ["INSURANCE", "WEB APPLICATION"],
      releaseYear: "",
      releaseMonth: "5",
      client: "삼성화재",
      url: ""
    },
    {
      titleKo: "삼성화재 다이렉트 이벤트 팩토리 시스템",
      titleEn: "보험 이벤트 팩토리 오픈",
      tag: ["INSURANCE", "WEB APPLICATION"],
      releaseYear: "",
      releaseMonth: "4",
      client: "삼성화재",
      url: ""
    },
    // 2014
    {
      titleKo: "보험 통합 소비자조사",
      titleEn: "보험 통합 소비자조사 오픈",
      tag: ["INSURANCE", "WEB APPLICATION"],
      releaseYear: "2014",
      releaseMonth: "10",
      client: "삼성화재",
      url: ""
    },
    {
      titleKo: "연금저축보험 v3.0",
      titleEn: "연금저축 보험",
      tag: ["INSURANCE", "WEB APPLICATION"],
      releaseYear: "",
      releaseMonth: "10",
      client: "삼성화재",
      url: ""
    },
    {
      titleKo: "이륜자동차보험 v3.0",
      titleEn: "8월 이륜차 보험 리뉴얼",
      tag: ["INSURANCE", "WEB APPLICATION"],
      releaseYear: "",
      releaseMonth: "8",
      client: "삼성화재",
      url: ""
    },
    {
      titleKo: "Photo9 iOS Photo Application",
      titleEn: "app - photo9",
      tag: ["iOS", "iOS APPLICATION"],
      releaseYear: "",
      releaseMonth: "8",
      client: "내 작업",
      url: ""
    },
    {
      titleKo: "자동차보험 배서 v3.0",
      titleEn: "7월 배서리뉴얼",
      tag: ["INSURANCE", "WEB APPLICATION"],
      releaseYear: "",
      releaseMonth: "7",
      client: "삼성화재",
      url: ""
    },
    {
      titleKo: "자동차보험 일괄 v3.0",
      titleEn: "6월 일괄리뉴얼",
      tag: ["INSURANCE", "WEB APPLICATION"],
      releaseYear: "",
      releaseMonth: "6",
      client: "삼성화재",
      url: ""
    },
    {
      titleKo: "자동차보험 v3.0",
      titleEn: "4월 자동차 리뉴얼",
      tag: ["INSURANCE", "WEB APPLICATION"],
      releaseYear: "",
      releaseMonth: "4",
      client: "삼성화재",
      url: ""
    },
    {
      titleKo: "삼성화재 다이렉트 Flash Framework v3.0",
      titleEn: "삼성화재 다이렉트 Flash Framework v3.0",
      tag: ["INSURANCE", "WEB APPLICATION"],
      releaseYear: "",
      releaseMonth: "3",
      client: "삼성화재",
      url: ""
    },
    //2013
    {
      titleKo: "실손보험 v2.0",
      titleEn: "7월 실손 오픈",
      tag: ["INSURANCE", "WEB APPLICATION"],
      releaseYear: "2013",
      releaseMonth: "7",
      client: "삼성화재",
      url: ""
    },
    // 2012
    {
      titleKo: "자동차보험 모바일 배서 v1.0",
      titleEn: "3월~4월 모바일배서",
      tag: ["INSURANCE", "WEB APPLICATION"],
      releaseYear: "2012",
      releaseMonth: "4",
      client: "삼성화재",
      url: ""
    },
    {
      titleKo: "네이버앱스 자동차보험",
      titleEn: "3월~4월 네이버앱스",
      tag: ["INSURANCE", "WEB APPLICATION"],
      releaseYear: "",
      releaseMonth: "4",
      client: "Naver",
      url: ""
    },
    {
      titleKo: "이륜자동차보험 v2.0",
      titleEn: "10월 이륜차 ",
      tag: ["INSURANCE", "WEB APPLICATION"],
      releaseYear: "",
      releaseMonth: "10",
      client: "삼성화재",
      url: ""
    },
    // 2011
    {
      titleKo: "자동차보험 배서 v2.0",
      titleEn: "10월~11월 삼성화재 배서",
      tag: ["INSURANCE", "WEB APPLICATION"],
      releaseYear: "2011",
      releaseMonth: "11",
      client: "삼성화재",
      url: ""
    },
    {
      titleKo: "스위트홈 v2.0",
      titleEn: "MY SWEET HOME HOMEOWNERS INSURANCE",
      tag: ["INSURANCE", "WEB APPLICATION"],
      releaseYear: "",
      releaseMonth: "10",
      client: "삼성화재",
      url: ""
    },
    // 2010
    {
      titleKo: "계원예술대학교 디지털미디어디자인과 외래교수( 2009~2010 )",
      titleEn: "2009년 7월~ 계원조형예술대 멀티미디어디자인과 강의",
      tag: ["LECTURE"],
      releaseYear: "2010",
      releaseMonth: "",
      client: "계원예술대학교",
      url: ""
    },
    {
      titleKo: "EVERYTHING FALLS iPad & iPhone APP",
      titleEn: "EVERYTHING FALLS IPAD & IPHONE APP",
      tag: ["iOS", "iOS APPLICATION"],
      releaseYear: "",
      releaseMonth: "9",
      client: "Woongjin Thinkbig",
      url: ""
    },
    {
      titleKo: "ARI-UL BRAND TEASER SITE",
      titleEn: "ARI-UL BRAND TEASER SITE",
      tag: ["WEB"],
      releaseYear: "",
      releaseMonth: "2",
      client: "Moiem",
      url: ""
    },
    {
      titleKo: "운전자보험 v1.0",
      titleEn: "ANYHOME INSURANCE",
      tag: ["INSURANCE", "WEB APPLICATION"],
      releaseYear: "",
      releaseMonth: "1",
      client: "삼성화재",
      url: ""
    },
    // 2009
    {
      titleKo: "애니홈 v1.0",
      titleEn: "ANYHOME INSURANCE",
      tag: ["INSURANCE", "WEB APPLICATION"],
      releaseYear: "2009",
      releaseMonth: "10",
      client: "삼성화재",
      url: ""
    },

    {
      titleKo: "자동차보험 법인용 v1.0",
      titleEn: "AUTO INSURANCE IN BULK",
      tag: ["INSURANCE", "WEB APPLICATION"],
      releaseYear: "",
      releaseMonth: "8",
      client: "삼성화재",
      url: ""
    },

    {
      titleKo: "Adobe webiner 강의",
      titleEn: "2009년 4월~2009년5월 Adobe webiner 강의",
      tag: ["LECTURE"],
      releaseYear: "",
      releaseMonth: "5",
      client: "Adobe"
    },
    // 2008
    {
      titleKo: "월간웹 플래시 테크닉북 PV3D 기고",
      titleEn: "2008년 9월~2009년3월 월간웹 플래시 테크닉북 PV3D 기고",
      tag: ["BOOK"],
      releaseYear: "",
      releaseMonth: "3",
      client: "웹스미디어",
      url: ""
    },
    {
      titleKo: "마이애니카 개인자동차보험 v1.0",
      titleEn: "2008년 9월 ~ 2009년 3월 마이애니카개인자동차보험",
      tag: ["INSURANCE", "WEB APPLICATION"],
      releaseYear: "",
      releaseMonth: "3",
      client: "삼성화재",
      url: ""
    },
    {
      titleKo: "SAMSUNG Mobile M-8800",
      titleEn: "SAMSUNG MOBILE M8800",
      tag: ["MOTION GRAPHIC"],
      releaseYear: "2008",
      releaseMonth: "9",
      client: "삼성전자",
      url: ""
    },
    {
      titleKo: "SK ISF Animation presentation",
      titleEn: "I-PROJECT INSTRUCTIONAL MATERIALS",
      tag: ["ANIMATION"],
      releaseYear: "",
      releaseMonth: "7",
      client: "SK Telecom",
      url: ""
    },
    {
      titleKo: "넥슨강의(디자이너를 위한 MicroSoft Express Blend)",
      titleEn:
        "2008년 4월4일 넥슨 강의(디자이너를 위한 MicroSoft Express Blend)",
      tag: ["LECTURE"],
      releaseYear: "",
      releaseMonth: "4",
      client: "MicroSoft",
      url: ""
    },
    {
      titleKo: "JUSTGO Web & RIA System",
      titleEn: "JUSTGO WEB & RIA SYSTEM",
      tag: ["RIA", "WEB APPLICATION"],
      releaseYear: "",
      releaseMonth: "4",
      client: "시공사",
      url: ""
    },
    // 2007
    {
      titleKo: "MicroSoft eko360 by SilverLight(MIME TRACKING)",
      titleEn: "EKO360 MIME TRACKING BY SILVERLIGHT",
      tag: ["WEB APPLICATION"],
      releaseYear: "",
      releaseMonth: "2",
      client: "Microsoft Korea",
      url: ""
    },

    {
      titleKo: "GS XI IN SUNGBOK OFFICIAL WEB SITE",
      titleEn: "GS XI IN SUNGBOK OFFICIAL WEB SITE",
      tag: ["WEB"],
      releaseYear: "2007",
      releaseMonth: "10",
      client: "Eleven D&C",
      url: ""
    },

    {
      titleKo: "Media Samsung SBC Intranet System",
      titleEn: "MEDIA SAMSUNG SBC INTRANET SYSTEM",
      tag: ["WEB"],
      releaseYear: "",
      releaseMonth: "10",
      client: "Cheil Worldwide",
      url: ""
    },
    {
      titleKo: "CREPOT V2 Web site, Trailer Motion Graphic",
      titleEn: "CREPOT V2 Web site, RIA, Trailer",
      tag: ["WEB", "WEB APPLICATION", "MOTION GRAPHIC"],
      releaseYear: "",
      releaseMonth: "9",
      client: "Crepot",
      url: ""
    },
    {
      titleKo: "삼성 CEBIT 2007 마이크로 사이트",
      titleEn: "SAMSUNG CEBIT 2007 CAMPAIGN MICRO SITE",
      tag: ["WEB"],
      releaseYear: "",
      releaseMonth: "3",
      client: "Samsung Electronics",
      url: ""
    },
    {
      titleKo: "웅진씽크빅 오피셜 웹사이트",
      titleEn: "WOONGJIN THINKBIG OFFICIAL WEB SITE",
      tag: ["WEB"],
      releaseYear: "",
      releaseMonth: "2",
      client: "Woongjin Thinkbig",
      url: ""
    }
  ];
}

export default Experience;
