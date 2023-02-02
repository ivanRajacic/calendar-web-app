import { CSSProperties } from "react";
import './cell.css'
import { EventModel } from "../../../../data/models/event.model";


interface Props extends React.PropsWithChildren {
    className?: string,
    index?: number,
    event?: EventModel,
};

const Cell: React.FC<Props> = ({ index, className, children, event }) => {
    return (
        <div className={className}>
            <div className="date-cell">
                <div className="cell-top-part">
                    {index && <div className="date">{index}</div>}
                </div>
                {event && <div className="cell-bottom-part">
                    <div className="event">
                        <div className="event-title">{event?.name}</div>
                        <div className="event-desc">{event?.description}</div>
                    </div>
                </div>}
            </div>
        </div>);
};

export default Cell;