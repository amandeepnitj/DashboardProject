import React, { useState } from "react";
import produce from 'immer';
const Notes = props => props.data.map(note => <div>{note.text}</div>);

export default function Todolist()
{
    const initialData = [{ text: '' }];
    const [data1, setData1] = useState(initialData);


    const handleClick = () => {
        const text = document.querySelector('#noteinput').value.trim();
        if (text) {
          const nextState = produce(data1, draftState => {
            draftState.push({ text });
          });
          document.querySelector('#noteinput').value = '';
          setData1(nextState);
        }
      };

      function Clear()
      {
          setData1(()=>[])
      }

    return(
        <>
        <div className="heading">ToDo App</div>
        <div className="details" style={{ marginTop: '20px' }}>
            <div className="form-center flex-down">
            <input id="noteinput" style={{ width: '80%' , height:"30px"}} type="text" placeholder="Enter a new note" />
        <button onClick={() => handleClick()} style={{width:'50%',margin:"10px"}}>Add note</button>
        <button onClick={() => Clear()} style={{width:'50%',margin:"10px"}}>Clear List</button>

        <Notes data={data1} />
            </div>
        </div>
        </>

    )

};
