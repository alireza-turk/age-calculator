import style from "./App.module.css";
import Form from "./components/Form.jsx";
import Answer from "./components/Answer.jsx";
import {ContextApp} from "./contexts/ContextApp.jsx";

export default function App() {
    return <div className={style.appContainer}>
      <div className={style.appBox}>
          <ContextApp>
            <Form/>
            <Answer/>
          </ContextApp>
      </div>
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.Coded by <a href="#">Your Name Here</a>.
      </div>
    </div>
}