import React, { Fragment, useState } from "react";
import NewForm from "./NewForm";
import "./Form.css";
import { v4 as uuidv4 } from 'uuid';

const Form = () => {
  const [Data, SetData] = useState({
    totalLot: "1",
    position: "sell",
    optionType: "call",
    expiry: "weekly",
    selectStrikeCriteria: "strikeType",
  });
  const [newData,setNewData]= useState([])

  const ChangeHandler = (e) => {
    SetData({ ...Data, [e.target.name]: e.target.value });
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    
    setNewData([...newData,Data])
console.log(newData)

  };

  const copyHandler = (data)=>{
setNewData([data,...newData])
  }
  const deleteHandler=(id)=>{
const newFilterData = newData.filter((val,ind)=>{
  return id !== ind
})
setNewData(newFilterData)
  }

  return (
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
            value={Data.totalLot}
          />

          <label htmlFor="Position">Position:</label>
          <select className="forminputs" id="Position"  onChange={ChangeHandler} name="position">
            <option value="sell">Sell</option>
            <option value="buy">Buy</option>
          </select>

          <label htmlFor="OptionType">Option Type:</label>
          <select className="forminputs" id="OptionType" onChange={ChangeHandler} name="optionType">
            <option value="call">Call</option>
            <option value="put">Put</option>
          </select>

          <label htmlFor="Expiry">Expiry:</label>
          <select className="forminputs" id="Expiry" onChange={ChangeHandler} name="expiry">
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>

          <label htmlFor="SelectStrikeCriteria">Select Strike Criteria:</label>
          <select
          className="forminputs"
            id="SelectStrikeCriteria"
            onChange={ChangeHandler}
            name="selectStrikeCriteria"
          >
            <option value="strikeType">Strike Type</option>
            <option value="premiumRange">Premium Range</option>
          </select>

          <input className="btn" type="submit"/>
          <button className="btn" type="reset">Cancel</button>
        </form>

        {
          newData.map((form,ind) => {
            return <NewForm key={ind} ind={ind} data={form} copyHandler={copyHandler} deleteHandler={deleteHandler}/>;
          })}
      </div>

      
    </div>
  );
};

export default Form;
