import { useReducer } from "react";
import studentReducer from "../../reducers/student-reducer";
import iStudent from "../../models/Student";
import { ShowAction } from "../../actions/Student-actions";
const Student = () => {
    const [Student,dispatch]=useReducer(studentReducer,[])

    const Click=()=>{
      dispatch(ShowAction());
    }
  return (
    <div>
      <h1>Student</h1>
      {Student.map((item)=><h2>
        {item.FirstName}
      </h2>)}
      <button onClick={Click}> click me</button>
    </div>
  );
};
export default Student;
