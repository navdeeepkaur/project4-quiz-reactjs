import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Start.css';

export default function Start(){

    const [num,setNum]=useState(1);
    const data={
        num:num,
        first:(Math.floor(Math.random()*19)),
    };
    const handleChange=(e)=>{
        setNum(e.target.value);
    }

    return(
        <div className="start">
            <div className="content">
                <div className="desc">
                    <p>GK QUIZ</p>
                    <span className='text'>Select no. of questions</span>
                    <select className='select-num' onChange={handleChange}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                    <Link to="/quiz" state={data}><button>Start</button></Link>
                </div>
                <div className="photo">
                    <img src="img.png" alt="" />
                </div>
            </div>
        </div>
    )
}