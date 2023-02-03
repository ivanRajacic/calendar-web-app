import { EventModel } from '../../../../../data/models/event.model';
import { Modal } from "react-overlays";
import './event-details-modal.css';

interface Props extends React.PropsWithChildren {
    handleClose: () => void,
    showModal: boolean,
    event: EventModel,
};

const EventDetailsModdal: React.FC<Props> = ({ handleClose, showModal, event }) => {
    const renderBackdrop = (props: object) => <div className="backdrop" {...props} />;

    return (<div>
        <Modal className="event-details" show={showModal} onHide={handleClose} renderBackdrop={renderBackdrop}>
            <div className="event-details-container">
                <div className='event-top-bar'>
                    <div className="title">{event?.name}</div>
                    <div className='close-button' onClick={handleClose}>X</div>
                </div>
                <div className="desc">{event?.description}</div>
            </div>
        </Modal>
    </div>)
};

export default EventDetailsModdal;