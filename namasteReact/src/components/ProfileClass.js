import React from 'react';


class ProfileClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userInfo: "Test userName",
            location: "Test location"
        }
    }

    componentDidMount(){
        // this.timer = setInterval(() => {
        //     console.log("printing using componentDidMount");
        // }, 2000)
    }

    componentDidUpdate(prevProps, prevState){
        if(this.state.count !== prevState.count){

        }
        if(this.state.count2 !== prevState.count2){

        }
    }

    componentWillMount(){
        const {count} = this.state;
    }

    render(){
        return(
            <div>
                <h1> ProfileClass</h1>
                <h2>Props Value: {this.props.key}</h2>
                <p>
                    {this.state.userInfo}
                    <br/>
                    {this.state.location}
                </p>
            </div>


        )
    }
}

export default ProfileClass;