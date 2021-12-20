import React from 'react';
import Header from './Header';
import data from '../store/Data'
import classNames from 'classnames';

const worksInfo = data.worksInfo;

type TYearItem = {
    name: string,
    items: TMonthItem[],
}
type TMonthItem = {
    month: string,
    name: string,
    category: string[],
    skill: string[],
}

const Experience = () => {

    const CompYears = worksInfo.map((item: any, i: number) => {
        return <YearItem data={item} key={`yearitem${i}`} />
    });

    return (
        <div className="view-experience">
            <Header />
            <h2 className="page-tit">🧗 Experience</h2>
            <ul>
                {CompYears}
            </ul>
        </div>
    );
};



const YearItem = ({
    data
}: {
    data: TYearItem
}) => {
    const CompMonths = data.items.map((item: any, i: number) => {
        return <MonthItem data={item} key={`monthitem${i}`} />
    })
    return (<li className="group-year">
        <div className="year">{data.name}</div>
        <ul>
            {CompMonths}
        </ul>
    </li>)
}
const MonthItem = ({
    data
}: {
    data: TMonthItem
}) => {

    return (<li className="group-month">
        <div className="month">{data.month}</div>
        {
            data.category && <Tags type="category" items={data.category} />
        }
        {
            data.skill && <Tags type="skill" items={data.skill} />
        }
        <div className="title">{data.name}</div>
    </li>);
}

export const Tags = ({
    type,
    items
}: {
    type: 'category' | 'skill',
    items: string[]
}) => {
    const CompTags = items.map((item: string, i: number) => {
        return <span className={classNames(["btn-tag", "ko", { work: type === 'category' }])} key={`exptags${i}`}>{item}</span>
    })
    return (<>{CompTags}</>);
}

export default Experience;