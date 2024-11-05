import style from "./Form.module.css"
import {useContextApp} from "../contexts/ContextApp.jsx";

export default function Form() {
    const {
        inputDay,
        inputMonth,
        inputYear,
        errorDay,
        errorMonth,
        errorYear,
        dispath
    } = useContextApp();
    return <form className={style.form} onSubmit={(e) => {
        e.preventDefault();
        dispath({
            type: 'submitForm'
        })
    }}>
            <div className={style.inputBox}>
                <label htmlFor="inputDay" style={(errorDay) ? {color: 'red'} : null}>DAY</label>
                <input style={(errorDay) ? {borderColor: 'red'} : null} type="text" id='inputDay' placeholder='DD' value={inputDay} onChange={(e) => dispath({
                    type: 'changeDay',
                    payload: e.target.value,
                })}/>
                {errorDay && <p style={{color: 'red'}}>{errorDay}</p>}
            </div>
            <div className={style.inputBox}>
                <label htmlFor="inputMonth" style={(errorMonth) ? {color: 'red'} : null}>MONTH</label>
                <input style={(errorMonth) ? {borderColor: 'red'} : null} type="text" id='inputMonth' placeholder='MM' value={inputMonth} onChange={(e) => dispath({
                    type: 'changeMonth',
                    payload: e.target.value
                })}/>
                {errorMonth && <p style={{color: 'red'}}>{errorMonth}</p>}
            </div>
            <div className={style.inputBox}>
                <label htmlFor="inputYear" style={(errorYear) ? {color: 'red'} : null}>YEAR</label>
                <input style={(errorYear) ? {borderColor: 'red'} : null} type="text" id='inputYear' placeholder='YYYY' value={inputYear} onChange={(e) => dispath({
                    type: 'changeYear',
                    payload: e.target.value
                })}/>
                {errorYear && <p style={{color: 'red'}}>{errorYear}</p>}
            </div>
        <button>↓</button>
        </form>
}