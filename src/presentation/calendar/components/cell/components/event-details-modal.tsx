import { Modal } from "react-overlays";
import './event-details-modal.css';
import { GitCommitInfo } from '../../../../../data/models/commit.model';

interface Props extends React.PropsWithChildren {
    handleClose: () => void,
    showModal: boolean,
    event: GitCommitInfo,
};

const EventDetailsModdal: React.FC<Props> = ({ handleClose, showModal, event }) => {
    const renderBackdrop = (props: object) => <div className="backdrop" {...props} />;

    return (<div>
        <Modal className="event-details" show={showModal} onHide={handleClose} renderBackdrop={renderBackdrop}>
            <div className="event-details-container">
                <div className='event-top-bar'>
                    <div className="title">{event?.commit.message}</div>
                    <div className='close-button' onClick={handleClose}>X</div>
                </div>
                <div className="desc">
                    <div className="event-date">{event?.commit.author.date}</div>
                    <div className="author">{event?.commit.author.name}</div>
                </div>
            </div>
        </Modal>
    </div>)
};

export default EventDetailsModdal;