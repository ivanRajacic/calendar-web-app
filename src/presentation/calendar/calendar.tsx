import { startOfMonth, endOfMonth, differenceInDays, format, addMonths } from 'date-fns';
import { parse } from 'date-fns/esm';
import { useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { AxiosInstance } from '../../data/axios/axios-instance';
import { GitCommitInfo } from '../../data/models/commit.model';
import './calendar.css'
import Cell from './components/cell/cell';
import EmptyCell from './components/empty-cell/empty-cell';


const daysOfTheWeek = [
    "Monday",
    "Tuesday",
    "Wendsday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];


const Calendar = () => {
    const navigate = useNavigate();
    const params = useParams();
    const formatString = 'MM-yyyy';
    const gitFormatString = "yyyy-MM-dd'T'HH:mm:ss'Z'";
    const [commits, setCommits] = useState<GitCommitInfo[]>();

    const currentDate = '/' + format(new Date(), formatString)

    useEffect(() => {
        AxiosInstance.get('/repos/ivanRajacic/calendar-web-app/commits',
            { params: { sha: 'develop' }, })
            .then(res => {
                if (res.data !== undefined) {
                    const comms = res.data as GitCommitInfo[];
                    const filteredCommits = comms.filter((e) =>
                        parse(e.commit.author.date, gitFormatString, new Date()).getMonth() === date.getMonth()
                    );
                    // let x = parse(filteredCommits[0].commit.author.date, gitFormatString, new Date());
                    // console.log(filteredCommits[0]);
                    // console.log(x);
                    // console.log(x.getDay());
                    setCommits(filteredCommits);
                }
            })
            .catch(err => console.log(err))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [navigate]);


    if (params.date === undefined) {
        return (<Navigate to={currentDate} />);
    }

    const date = parse(params.date, formatString, new Date());

    if (isNaN(date.getTime())) {
        return (<Navigate to={currentDate} />);
    }

    const startDate = startOfMonth(date);
    const endDate = endOfMonth(date);
    const numberOfDays = differenceInDays(endDate, startDate) + 1;

    const prefixDays = startDate.getDay();
    const suffixDays = 6 - endDate.getDay();

    const month = format(date, 'LLLL');
    const year = date.getFullYear();


    return (
        <div className='calendar-page'>
            <div className='container'>
                <div className='top-bar'>
                    <div className='month-year'>{month} {year}</div>
                    <div className='navigation'>
                        <div className='nav-button' onClick={() => {
                            setCommits([]);
                            return navigate("/" + format(addMonths(date, -1), formatString));
                        }}><div>{'<'}</div></div>
                        <div className='nav-button' onClick={() => {
                            setCommits([]);
                            return navigate("/" + format(addMonths(date, 1), formatString));
                        }}><div>{'>'}</div></div>
                    </div>
                </div>
                <div className="calendar-container">
                    <div className="calendar-grid">
                        {daysOfTheWeek.map((day, index) => {
                            var className = null;
                            if (index === 0) {
                                className = 'monday'
                            } else if (index === 6) {
                                className = 'sunday'
                            }
                            return (<EmptyCell key={day} className={className ?? 'days'} >{day}</EmptyCell>);
                        })}


                        {Array.from({ length: prefixDays }).map((_, index) => (<Cell key={index} className='dates'></Cell>))}
                        {Array.from({ length: numberOfDays }).map((_, index) => (<Cell key={index} index={index + 1} className='dates' event={commits?.filter((gitCommit) => parse(gitCommit.commit.author.date, gitFormatString, new Date()).getDay() - 2 === index + 1)[0]}></Cell>))}
                        {Array.from({ length: suffixDays }).map((_, index) => (<Cell key={index} className='dates'></Cell>))}
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Calendar;