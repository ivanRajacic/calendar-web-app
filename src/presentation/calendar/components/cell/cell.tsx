import { useState } from "react";
import './cell.css'
import EventDetailsModdal from "./components/event-details-modal";
import { CommitInfo } from "../../../../data/models/commit.model";
import { format, parseISO } from "date-fns";


interface Props extends React.PropsWithChildren {
    className?: string,
    index?: number,
    event?: CommitInfo,
};

const Cell: React.FC<Props> = ({ index, className, event: commit }) => {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);

    return (
        <div className={className}>
            <div className="date-cell">
                <div className="cell-top-part">
                    {index && <div className="date">{index}</div>}
                </div>
                {commit &&
                    <div className="cell-bottom-part" onClick={() => setShowModal(true)}>
                        <div className="event">
                            <div className="event-title">{commit?.commit.message}</div>
                            <div className="event-desc">{format(commit?.commit.author.date, 'dd-MM-yyyy')}</div>
                        </div>
                    </div>}
                {commit && <EventDetailsModdal event={commit} handleClose={handleClose} showModal={showModal} />}
            </div>
        </div>);
};

export default Cell;