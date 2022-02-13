import Student from "../component/Student/Student";
import iStudent from "../models/Student";

let studentArray: iStudent[] = [
    { FirstName: "matan", LastName: "ysyas", Age: 25 },
    { FirstName: "lior", LastName: "yosef", Age: 24 },
  ];
 const studentReducer = (state:any, action:any):any => {

  switch (action.type) {
    case "show":
    return studentArray;
  
    default:
      return state;
  }
};


export default studentReducer;