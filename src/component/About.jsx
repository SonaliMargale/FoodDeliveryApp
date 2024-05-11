import UserContext from "../utils/userContext";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";



class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }
  componentDidMount() {
    console.log("parent didmount")
  }
  render() {
    console.log("Parent Render")
    return (
      <div>
        < UserContext.Consumer>
          {({loggedInUser}) => (
            <h1>{loggedInUser}</h1>
          )}
        </UserContext.Consumer>
      <h2>hello welcome to about Page</h2>
      {/* <User name={"sonali"}/> */}

      {/* <UserClass name={"sonali"} location={"Bangalore"} contact={"@sonali1234"} /> */}
      <UserClass name={"mayur"} location={"us"} contact={"@sonali1234"} />
    </div>
    )
  }
}
export default About;





// const About = () => {
//     return (
//       <div>
//         <h2>hello welcome to about Page</h2>
//         <User name={"sonali"}/>

//         <UserClass name={"sonali"} location={"Bangalore"} contact={"@sonali1234"} />
//       </div>
//     )
// }
// export default About;