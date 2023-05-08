import Messages from "./Messages"
import News from "./News"
import './index.css'
import MyNayLink from '../../components/MyNavLink'
import { Redirect, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
export default function Home(){
    return (
      <div>
        <h3>我是home的内容</h3>
        <div className="list">
          <ul>
            <li>
              <MyNayLink className="list-group-home" to="/home/News">
                News
              </MyNayLink>
            </li>
            <li>
              <MyNayLink className="list-group-home" to="/home/Message">
                Message
              </MyNayLink>
            </li>
          </ul>
        </div>
        <div>
            <Switch>
                <Route path='/home/news' component={News} />
                <Route path='/home/message' component={Messages} />
                <Redirect to='/home/news' />
            </Switch>
        </div>
      </div>
    );
}