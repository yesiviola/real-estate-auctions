import { useNavigate, } from "react-router-dom";





const RequestInfo  = () =>  {


    const navigate = useNavigate();


    const handleRequestClick = () =>  {
        navigate.push('/request-information');
    };


    return (
        <section>
            <button onClick={handleRequestClick}>Request a visit/Information</button>
            <button onClick={handleRequestClick}>Live Video Walkthrough</button>
        </section>
    )
}




export default RequestInfo;