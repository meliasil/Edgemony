import { useRouteError } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();

    return (
        <div className="flex flex-col item-center justify-center w-full">
            <h1 className="text-bold">Sorry!</h1>
            <p>An unexpected error has occurred.</p>
            <i>{error.statusText}</i>
        </div>
    )
}


export default ErrorPage;