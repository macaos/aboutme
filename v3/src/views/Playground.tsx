import React from 'react';
import Header from './Header';
import data from '../store/Data'
import { Tags } from './Experience';

const Playground = () => {
    const CompItem = data.playgroundInfo.map((item: any, i: number) => {
        return <li onClick={() => {
            window.location.href = item.link;
        }} className="plays-item" key={`playground-item-${i}`}>
            <Tags type={"skill"} items={item.tags} />
            {item.name}
            <i className="xi-long-arrow-right"></i>
        </li>
    })
    return (
        <div className="view-playground">
            <Header />
            <h2 className="page-tit">☕ Playground</h2>
            <ul>
                {CompItem}
            </ul>
        </div>
    );
};

export default Playground;