import React from 'react';
import data from '../store/Data';
import { Tags } from './Experience';
import Header from './Header';


const About = () => {
    const CompItem = data.careerInfo.map((item: any, i: number) => {
        return <li className="item">
            <div className="name">
                <div>Samsung Fire</div>
            </div>
            <div className="part">{item.name}<span className="year">{item.period}</span></div>
            <div className="skill">
                <Tags type={'skill'} items={item.tags} />
            </div>
        </li>
    })
    return (
        <div>
            <Header />
            {CompItem}
        </div>
    );
};

export default About;