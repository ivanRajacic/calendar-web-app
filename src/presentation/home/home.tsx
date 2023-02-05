import { format } from "date-fns";
import { Navigate } from "react-router-dom";

const Home = () => {
    const currentDate = '/' + format(new Date(), 'MM-yyyy')

    return (<Navigate to={currentDate} />);

}

export default Home;