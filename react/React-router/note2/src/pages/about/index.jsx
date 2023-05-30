import { Outlet } from "react-router-dom";
import MyNavLink from "../../components/MyNavLink"

export default function About(){
    return (
      <div>
        <div>about...</div>
        <div className="list">
            <ul>
                <li>
                    <MyNavLink className="list-group-home" to="/about/news">
                    News
                    </MyNavLink>
                </li>
                <li>
                    <MyNavLink className="list-group-home" to="/about/message">
                    Message
                    </MyNavLink>
                </li>
            </ul>
        </div>
        <Outlet />
      </div>
    );
}