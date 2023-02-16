import React, { useState } from "react";
import "./Form.css";
const NewForm = ({ data, ind,copyHandler,deleteHandler }) => {
   
  // UseStates
  const [Data, SetData] = useState({
    totalLot: "1",
    position: "sell",
    optionType: "call",
    expiry: "weekly",
    selectStrikeCriteria: "strikeType",
  });
  const [newData,setNewData]= useState([]);
  const [showInput, setShowInput]=useState([]);
  const [showInput2, setShowInput2]=useState([]);

  // Handlers
  const ChangeHandler = (e) => {
    SetData({ ...Data, [e.target.name]: e.target.value });
  };
  const SubmitHandler = (e) => {
    e.preventDefault();
    setNewData([...newData,Data])
    console.log(newData)
  };
  const FinalSubmitHandler =(e)=>{
    alert("Your Form Submitted Successfully");
    e.preventDefault();
    
  }
  const HandleChange = (e) => {
    const { value, checked } = e.target;
    console.log(`${value} is ${checked}`);

    if (checked) {
      setShowInput(false);
    }

    else {
      setShowInput(true);
    }
  }

  const HandleChange2 = (e) => {
    const { value, checked } = e.target;
    console.log(`${value} is ${checked}`);

    if (checked) {
      setShowInput2(false);
    }

    else {
      setShowInput2(true);
    }
  }

  return (
    <>
    <div className="newform">
    <div className="MainForm">
      <div className="Form">
        <form className="form" onSubmit={SubmitHandler}>
          <label htmlFor="TotalLot">Total Lot:</label>
          <input
            className="newformlots"
            type="number"
            name="totalLot"
            onChange={ChangeHandler}
            min={0}
            value={data.totalLot}
          />

          <select className="newformbuttons" id="Position"  onChange={ChangeHandler} name="position">
            <option value="sell">{data.position}</option>
          </select>

          
          <select className="newformbuttons" id="OptionType" onChange={ChangeHandler} name="optionType">
          <option value="call">{data.optionType}</option>
          </select>

          
          <select className="newformbuttons" id="Expiry" onChange={ChangeHandler} name="expiry">
            <option value="weekly">{data.expiry}</option>
          </select>

          <label htmlFor="SelectStrikeCriteria">Select Strike Criteria:</label>
          <select className="newformbuttons"
            id="SelectStrikeCriteria"
            onChange={ChangeHandler}
            name="selectStrikeCriteria"
          >
          <option value="strikeType">{data.selectStrikeCriteria}</option>  
          </select>  
          <button className="btn" onClick={()=>copyHandler(data)}>copy</button>
          <button className="btn" onClick={()=>deleteHandler(ind)}>Delete</button>     
        </form>
      </div>
     <div className="checkboxbtn"> <label>
        <input type="checkbox" name="simple" onChange={HandleChange}/>
        <span>Simple Momentum</span>
      </label>
      <label>
        <input type="checkbox" onChange={HandleChange2}/>
        <span>Trial Sl</span>
      </label></div>
    </div>
     <div className="bot">
     <div className="newformbutton">
          <select  disabled={showInput} className="newformbuttons"  name="pointsup">
            <option value="pointsup">Points Up</option>
          </select>
          <input   disabled={showInput}
           className="abc"
            type="number"
            min={0}
          />
    </div>
    <div className="newformbutton">
          <select  disabled={showInput2} className="newformbuttons"  name="pointsup">
            <option value="pointsup">Points</option>
          </select>
          <input disabled={showInput2}
           className="abc"
            type="number"
            min={0}
          />
    </div>
     </div>

     <div className="final"><button onClick={FinalSubmitHandler} id="ab" className="newformbuttons">Final Submit</button></div>
    </div>
    </>
  );
};

export default NewForm;

