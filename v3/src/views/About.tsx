import React from 'react';
import data from '../store/Data';
import { Tags } from './Experience';
import Header from './Header';


const About = () => {
    const CompItem = data.careerInfo.map((item: any, i: number) => {
        return <li className="item">
            <div className="name">
                <div>{item.name}</div>
            </div>
            <div className="part">{item.part}<span className="year">{item.period}</span></div>
            <div className="skill">
                <Tags type={'skill'} items={item.tags} />
            </div>
        </li>
    })

    const CompSkillItem = data.skillsInfo.map((item: any, i: number) => {
        return <li className="item">
            <div className="name">
                <div>{item.name}</div>
            </div>
            <div className="skill">
                <Tags type={'skill'} items={item.tags} />
            </div>
        </li>
    })
    return (
        <div className="view-about">
            <Header />
            <div className="introduce">
                I AM UI/UX DEVELOPER
            </div>
            <h2 className="page-tit">🧗 Career</h2>
            <ul className="items">
                {CompItem}
            </ul>

            <h2 className="page-tit">🧗 Skill</h2>
            <ul className="items">
                {CompSkillItem}
            </ul>

        </div>
    );
};

export default About;