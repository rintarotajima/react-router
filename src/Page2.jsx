import { Link } from "react-router-dom";

export const Page2 = () => {
    return (
        <div>
            <h1>Page2ページです</h1>
            <Link to="/page2/100">URLParameter</Link>
            <br />
            <Link to="/page2/100/?name=hogehoge">QueryParameter</Link>
        </div>
    );
}