import React, { useState } from 'react';
import './form.scss'

const Button = (props) => {
  return (
    <button 
    type={props.type}>
      {props.text}
      </button>
  )
}

const Input = ({ inputValue, setInputValue }) => {
  return(
      <div className="form-group col-md-4">
        <label>Comma separated values</label>
        <input
          type="text"
          className="form-control"
          value={inputValue}
          onChange={event => setInputValue(event.target.value)}
        />
      </div>
  )
}

const Select = ({ selectValue, setSelectValue }) => {
  const availableOptions = [
    "apple",
    "orange",
    "grape",
    "cherry",
    "peach",
    "pear"
  ];
  return (
    <div className="form-group  col-md-4">
      <label className="label-control">Multi select change</label>
        <select
        className="custom-select" multiple
        onChange={event => setSelectValue(event.target.value)}
      >
        {availableOptions.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  )
}

const Textarea = ({ textareaValue, setTextValue }) => {
  return(
    <div className="form-group  col-md-4">
      <label className="label-control">Multi lines values</label>
      <textarea
        value={textareaValue}
        onChange={event => setTextValue(event.target.value)}
        className="form-control"
      />
    </div>
  )
}


const Form = (props) => {
  const [textareaValue, setTextValue] = React.useState('');
  const [selectValue, setSelectValue] = React.useState('');
  const [inputValue, setInputValue] = React.useState('');

  const showInputs = (e) => {
    e.preventDefault();
    console.log({
      textareaValue,selectValue,inputValue
    });
  }

  return(
    <>
     <div className="container">
       {/* <form onSubmit={this.handleSubmit}> */}
       <form onSubmit={showInputs}>
          <div className="row">
            <Input inputValue={inputValue} setInputValue={setInputValue}/>
            <Textarea textareaValue={textareaValue} setTextValue={setTextValue}/>
            <Select selectValue={selectValue} setSelectValue={setSelectValue}/>
            <Button type="submit" text='Click!' />
          </div>
        </form>
      </div>
    </>
  )
 
}

// class Form extends React.Component {
//   // static availableOptions = [
//   //   "apple",
//   //   "orange",
//   //   "grape",
//   //   "cherry",
//   //   "peach",
//   //   "pear"
//   // ];

  // handleCommaSeperatedChange = e => {
  //   console.log("Handle comma separated");
  // };

  // handleMultipleChange = e => {
  //   console.log("Handle multiline");
  // };

  // handleMultiSelectChange = e => {
  //   console.log("Handle multiselect");
  // };

//   render() {
//     return (
//       <div className="container">
//         <form onSubmit={this.handleSubmit}>
//           <div className="row">
//             <div className="form-group col-md-4">
//               <label>Comma separated values</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 onChange={this.handleCommaSeperatedChange}
//               />
//             </div>

//             <div className="form-group  col-md-4">
//               <label className="label-control">Multi lines values</label>
//               <textarea
//                 rows={Form.availableOptions.length}
//                 onChange={this.handleMultipleChange}
//                 className="form-control"
//               />
//             </div>

//             <div className="form-group  col-md-4">
//               <label className="label-control">Multi select change</label>
//               <select
//                 className="custom-select"
//                 multiple
//                 size={Form.availableOptions.length}
//                 onChange={this.handleMultiSelectChange}
//               >
//                 {Form.availableOptions.map(item => (
//                   <option key={item} value={item}>
//                     {item}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>
//           <Button/>
//         </form>
//       </div>
//     );
//   }
// }

export default Form;