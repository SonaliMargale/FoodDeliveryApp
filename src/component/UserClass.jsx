import React from 'react';

class UserClass extends React.Component {
    constructor(props){
        super(props)
        console.log(props);
     //console.log(this.props.name,"Child user")

    this.state = {
    userInfo:{
        name:"dummy",
        location:"default",
        avatar_url: "https://avatars.githubusercontent.com/u/12824231?v=4"

    }
    }
}
   async componentDidMount() {
    console.log(this.props.name,"child component didMount")
    const data = await fetch("https://api.github.com/users/akshaymarch7")
    const json = await data.json();

    this.setState({
        userInfo:json
    })
    console.log(json)
   }

   componentDidUpdate() {
    console.log("component didupdate")
   }
    render() {
        console.log(this.props.name,"child Render")
        //const{name, location, contact} = this.props;
       // const {count, count2} = this.state;

       const {name, location, avatar_url} = this.state.userInfo
        return(
            <div className="user-card">
              {/* <h2>count:{count}</h2>
              <button onClick={() => {
                //now we need to update count by count 1
                // we cant update variable directly
                // this.state.count = this.state.count+1; these is not correct way 
                this.setState({
                    count:this.state.count+1,
                    count2:this.state.count+2       //here i will update what we gave not all it will update
                })
              }}>

              </button> */}
              {/* <h2>count:{count2}</h2> */}
              <h2>Name:{name}</h2>
              <h2>avatar_url:{avatar_url}</h2>
              <h3>Location:{location}</h3>
              <h4>Contact:akshaymarch7</h4>
            </div>
        )
    }
}
export default UserClass;