/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import "./Pattern01.scss";
import data from '../../store/Data';
import classNames from 'classnames';

import { css } from '@emotion/react';

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

`, css`
border-top-left-radius: 50%;
`, css`
border-top-right-radius: 50%;
`, css`
border-bottom-left-radius: 50%;
`, css`
border-bottom-left-radius: 50%;
border-bottom-right-radius: 50%;
`, css`
border-radius: 50%;
`];
const Pattern01 = () => {
    const [renderCnt, setRenderCnt] = useState(0);
    const CompItem = makeBlankArr(20).map((item, i: number) => {
        return <div className="item" key={`PatternItem-${i}`}>
            <div className="item-cont bg-noise3" css={css`
                ${cssRadius[parseInt(String(Math.random() * 6))]}
                background-color: ${colors[parseInt(String(Math.random() * colors.length))]}
            `}></div>
        </div>
    })

    return (
        <div className="Pattern01 bg-noise2" css={css`
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

export default Pattern01;