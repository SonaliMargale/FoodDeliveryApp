import { useState } from "react";
import { useActionData } from "react-router-dom";

const User = ({name}) => {
    const[count] = useState(0);
    const[count1] = useState(1)
    return (
     <div className="user-card">
        <h2>count:{count}</h2>
        <h2>count1:{count1}</h2>
        <h2>Name:{name}</h2>
        <h3>Location:Bangalore</h3>
        <h4>Contact:@akshay123</h4>
     </div>
    )
}
export default User;