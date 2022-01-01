/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import "./Pattern02.scss";
import data from '../../store/Data';
import classNames from 'classnames';

import { css } from '@emotion/react';
import ArtUtils from '../ArtUtils';

const makeBlankArr = (num: number) => {
    let r = [];
    let n = 0;

    while (n < num) {
        n++;
        r.push('a');
    }
    return r;
}

const info = data.pattenInfo.Ptn01;
const colors = info.colors;
const cssRadius = [css`
border-radius: 50%;

`, css`
border-radius: 50%;
`, css`
border-radius: 50%;
`, css`
opacity: 0;
`];
const Pattern02 = () => {
    const [renderCnt, setRenderCnt] = useState(0);
    const CompItem = makeBlankArr(20).map((item, i: number) => {
        const randomColor = colors[parseInt(String(Math.random() * colors.length))];
        const borderW = ['2vw', '5vw', '10vw']
        const borderRandomW = borderW[parseInt(String(Math.random() * borderW.length))]
        return <div className="item" key={`PatternItem-${i}`}>

            <div className="item-cont bg-noise2" css={css`
                ${cssRadius[parseInt(String(Math.random() * cssRadius.length))]}
                box-shadow: 0 0 0 ${borderRandomW} ${randomColor} inset; 
                transform: translate(${ArtUtils.randomInt(-200, 200)}%, ${ArtUtils.randomInt(-200, 200)}%);
            `}></div>
        </div>
    })





    return (
        <div className="Pattern02 bg-noise2" css={css`
            background-color: ${info.bgColors};
        `}>
            <div className="main-canvas" onClick={() => {
                setRenderCnt(Math.random())
            }}>
                {CompItem}
            </div >
        </div>
    );
};

export default Pattern02;