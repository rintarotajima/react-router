import { Link, Outlet } from "react-router-dom";
export const Page1 = () => {
    return (
        <div>
            <h1>Page1ページです</h1>
            <Link to="detailA">DetailAページ</Link>
            <br />
            <Link to="detailB">DetailBページ</Link>
            <Outlet />
        </div>
    );
}