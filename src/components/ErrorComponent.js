import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1> OOOPS, something went wrong!! </h1>
            <div>{err.status}</div>
        </div>
    )
}

export default ErrorComponent;