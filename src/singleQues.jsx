import { useState } from "react";
import {Link, useLocation} from "react-router-dom";
import { questions } from "./questions";
import './singleQues.css';

export default function SingleQues()
{

    const data=useLocation().state;
    const [index, setIndex]=useState(data.first);
    const [done, setDone]=useState([data.first]);
    const [count, setCount]=useState(0);
    const [score, setScore]=useState(0);
    const [selected, setSelected]=useState('');
    const [active, setActive]=useState('');

    const randomQues=()=>{
        if(selected==questions[index].correct)
        {
            setScore(score+1);
        }
        const rand=Math.floor(Math.random()*(questions.length));
        if(done.includes(rand))
        {
            randomQues();
        }
        else{
            setIndex(rand);
            done.push(rand);
            setDone(done);
            setCount(count+1);
        }
    }

    const set=(id)=>{
            setSelected(questions[index].options[id]);
            setActive(questions[index].options[id]);
    }

    return(
            <div className="singleQues">
                {(!(count==data.num))?
                    <div className="ques-content">
                        <span className="score">Score: {score}</span>
                        <div className="ques">{questions[index].statement}</div>
                            {questions[index].options.map((op, id)=>
                            (<p className="options" style={{backgroundColor: active===op?'#3e9f5a':'#abfcc2'}} onClick={()=>set(id)} >{op}</p>))}
                        <div>
                            <button className="btn" onClick={randomQues}>Next</button>
                            <Link className="btn" style={{alignSelf:"flex-start"}} to="/"><button>Quit</button></Link>
                        </div>
                    </div>
                    :
                    <div className="result">
                        <div className="photo">
                            <img src="final.png" alt="" />
                        </div>
                        <div className="desc">
                            <p>Your Score: {score}/{data.num}</p>
                            <Link to="/"><button>Go Back</button></Link> 
                        </div>
                    </div>}
            </div>
        )
}