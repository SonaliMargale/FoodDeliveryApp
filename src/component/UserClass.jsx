import React from 'react';

class UserClass extends React.Component {
    constructor(props){
        super(props)
        console.log(props);
    

    this.state = {
     count:0,
     count2:2
    }
}
    
    render() {
        const{name, location, contact} = this.props;
        const {count, count2} = this.state;
        return(
            <div className="user-card">
              <h2>count:{count}</h2>
              <h2>count:{count2}</h2>
              <h2>Name:{name}</h2>
              <h3>Location:{location}</h3>
              <h4>Contact:{contact}</h4>
            </div>
        )
    }
}
export default UserClass;