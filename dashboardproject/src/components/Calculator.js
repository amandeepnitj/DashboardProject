import React, { useState } from "react";
import '../helper/calculator.css'

export default function Calculator()
{

    const [calc,setCalc] = useState("");
    const [res,setRes]= useState("");
    const ops = ['/','*','+','-','.']

    const updateCalc = value =>{
        if(ops.includes(value) && calc === '' ||
        ops.includes(value) && ops.includes(calc.slice(-1)))
        {
            return;
        }
        setCalc(calc + value)
        if(!ops.includes(value))
        {
            setRes(eval(calc+value).toString())
        }
    }
    const createDigits=()=>{
        const digits = [];
        for (let i=1;i<10;i++)
        {
            digits.push(
                <button onClick={()=>{updateCalc(i.toString())}} className="button" key={i}>{i}</button>
            )
        }
        return digits;
    }

    const calculate = () =>{
        setCalc(eval(calc).toString());
    }

    const deleteLast = () =>{
        if(calc!= '')
        {
            const value = calc.slice(0,-1);
            setCalc(value)
        }
    }
    return(
        <>
        <div className="app_cal">
            <div className="calculator">
                <div className="display">
                   {res ? <span>({res})</span> : ""} 
                   {calc || "0"}
                </div>

                <div className="operators">
                    <button onClick={()=>{updateCalc('/')}} className="button">/</button>
                    <button onClick={()=>{updateCalc('*')}} className="button">*</button>
                    <button onClick={()=>{updateCalc('+')}} className="button">+</button>
                    <button onClick={()=>{updateCalc('-')}} className="button">-</button>
                    <button onClick={deleteLast} className="button">DEL</button>
                </div>

                <div className="digits">
                    {createDigits()}
                <button onClick={()=>{updateCalc('0')}}  className="button">0</button>
                <button onClick={()=>{updateCalc('.')}} className="button">.</button>
                <button onClick={calculate} className="button">=</button>
                </div>
            </div>
        </div>
        </>
    )
}