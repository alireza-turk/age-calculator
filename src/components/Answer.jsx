import style from "./Answer.module.css"
import {useContextApp} from "../contexts/ContextApp.jsx";

export default function Answer() {
    const {answerDate} = useContextApp();
    const date = answerDate?.split("/");
    const [year, month, day] = date || [null, null, null]

    return <div className={style.answerContainer}>
        <p><span>{year || '--'}</span> years</p>
        <p><span>{month || '--'}</span> months</p>
        <p><span>{day || '--'}</span> days</p>
    </div>
}