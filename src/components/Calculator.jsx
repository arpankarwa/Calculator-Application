import React, { useState } from 'react';
import './Calculator.css';

export default function Calculator() {

    const [result, setResult] = useState("");


    const clearScreen = () => {

        setResult("");
    }

    const reverse = () => {

        setResult(result.slice(0, -1));
        // console.log(setResult(result.slice(0, -1)));
    }

    const handleClick = (e) => {

        setResult(result.concat(e.target.name));
        // console.log(setResult(result.concat(e.target.name)));
    }

    const finalCalculate = () => {

        try {
            setResult(eval(result).toString());
            // console.log(setResult(eval(result).toString()));
        }
        catch {
            setResult("pass 1 op only");
            // console.log(setResult("pass 1 op only"));
        }
    }


    return (
        <>
            <div className='container'>
                <form className='newForm'>
                    <input type="text" value={result} />
                </form>

                <div className='keypadForCalculator'>
                    <button id='clearScreen' onClick={clearScreen}>Clear</button>
                    <button id='reverse' onClick={reverse}>C</button>
                    <button className='highlight' name='/' onClick={handleClick}>&divide;</button>

                    <button name='7' onClick={handleClick}>7</button>
                    <button name='8' onClick={handleClick}>8</button>
                    <button name='9' onClick={handleClick}>9</button>
                    <button className='highlight' name='*' onClick={handleClick}>*</button>

                    <button name='4' onClick={handleClick}>4</button>
                    <button name='5' onClick={handleClick}>5</button>
                    <button name='6' onClick={handleClick}>6</button>
                    <button className='highlight' name='-' onClick={handleClick}>-</button>

                    <button name='1' onClick={handleClick}>1</button>
                    <button name='2' onClick={handleClick}>2</button>
                    <button name='3' onClick={handleClick}>3</button>
                    <button className='highlight' name='+' onClick={handleClick}>+</button>

                    <button name='0' onClick={handleClick}>0</button>
                    <button name='.' onClick={handleClick}>.</button>
                    <button id='equals' onClick={finalCalculate}>=</button>
                </div>
            </div>
        </>
    )
}
