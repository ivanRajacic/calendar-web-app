import { startOfMonth, endOfMonth, differenceInDays, format } from 'date-fns';
import { arrayBuffer } from 'stream/consumers';
import './calendar.css'
import Cell from './cell';
import EmptyCell from './empty-cell';

const daysOfTheWeek = [
    "Monday", "Tuesday", "Wendsday", "Thursday", "Friday", "Saturday", "Sunday",
];

interface Props {
    value?: Date;
    onChange?: (value: Date) => void;
}

const Calendar: React.FC<Props> = ({ value = new Date(), onChange }) => {
    const startDate = startOfMonth(value);
    const endDate = endOfMonth(value);
    const numberOfDays = differenceInDays(endDate, startDate) + 1;

    const prefixDays = startDate.getDay();
    const suffixDays = 6 - endDate.getDay();

    const month = format(value, 'LLLL');
    const year = value.getFullYear();

    return (
        <div className='calendar-page'>
            <div className='container'>
                <div className='top-bar'>
                    <div className='month-year'>{month} {year}</div>
                    <div className='navigation'>
                        <div className='nav-button'><div>{'<'}</div></div>
                        <div className='nav-button'><div>{'>'}</div></div>
                    </div>
                </div>
                <div className="calendar-container">
                    <div className="calendar-grid">
                        {daysOfTheWeek.map((day, index) => {
                            var className = null;
                            if (index == 0) {
                                className = 'monday'
                            } else if (index == 6) {
                                className = 'sunday'
                            }
                            return (<EmptyCell key={day} className={className ?? 'days'} >{day}</EmptyCell>);
                        })}


                        {Array.from({ length: prefixDays }).map((_, index) => (<Cell key={index} className='dates'></Cell>))}
                        {Array.from({ length: numberOfDays }).map((_, index) => (<Cell key={index} index={index + 1} className='dates'></Cell>))}
                        {Array.from({ length: suffixDays }).map((_, index) => (<Cell key={index} className='dates'></Cell>))}
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Calendar;