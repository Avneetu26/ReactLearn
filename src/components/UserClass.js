import React from "react"

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: "dummy",
                location: "default",
                bio: "About the team member"
            }
        }
    }

    async componentDidMount() {
        // Always make API calls here
        const data = await fetch("https://api.github.com/users/Avneetu26");
        const json = await data.json();
        this.setState({
            userInfo: json
        })
    }

    render() {

        const { name, location, bio } = this.state.userInfo;
        return (
            <div className="user-card">
                <div className="user-details">
                    <h2>{name}</h2>
                    <h3>{location}</h3>
                    <h4>{bio}</h4>
                </div>
            </div>
        )
    }

    // async componentDidMount() {
    //     // Always make API calls here
    //     const data = await fetch("https://api.github.com/users/Avneetu26");
    //     const json = await data.json();
    //     console.log(json);

    //     const {name, location, bio} = json;
    // }
}

export default UserClass;