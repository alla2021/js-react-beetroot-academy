// import React, {useState} from 'react';
// import './form.scss'



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

// export default Form;