import './empty-cell.css'

interface Props extends React.PropsWithChildren {
    className?: string,
};

const EmptyCell: React.FC<Props> = ({ className, children }) => {
    return (<div className={className}>{children}</div>);
};

export default EmptyCell;