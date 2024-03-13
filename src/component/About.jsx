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