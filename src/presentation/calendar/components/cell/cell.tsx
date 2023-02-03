import { useState } from "react";
import './cell.css'
import { EventModel } from "../../../../data/models/event.model";
import EventDetailsModdal from "./components/event-details-modal";


interface Props extends React.PropsWithChildren {
    className?: string,
    index?: number,
    event?: EventModel,
};

const Cell: React.FC<Props> = ({ index, className, event }) => {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);

    return (
        <div className={className}>
            <div className="date-cell">
                <div className="cell-top-part">
                    {index && <div className="date">{index}</div>}
                </div>
                {event &&
                    <div className="cell-bottom-part" onClick={() => setShowModal(true)}>
                        <div className="event">
                            <div className="event-title">{event?.name}</div>
                            <div className="event-desc">{event?.description}</div>
                        </div>
                    </div>}
                {event && <EventDetailsModdal event={event} handleClose={handleClose} showModal={showModal} />}
            </div>
        </div>);
};

export default Cell;