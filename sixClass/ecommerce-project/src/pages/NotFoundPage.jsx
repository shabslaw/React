import Header from "../components/Header";
import "./NotFoundPage.css"

function NotFoundPage(){
    return(
        <>
            <title>404 (Not Found)</title>
            <Header />

            <h1 className="not-found">Page Not Found.</h1>
        </>
    );
};

export default NotFoundPage;