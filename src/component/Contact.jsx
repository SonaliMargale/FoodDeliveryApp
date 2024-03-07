import User from "./User";
import UserClass from "./UserClass";

const Contact = () => {
    return (
      <div>
        <p>Hey!! welcome to contact page</p>
        <User name={"sonali"}/>

        <UserClass name={"sonali"} location={"Bangalore"} contact={"@sonali1234"} />
      </div>
    )
}
export default Contact;