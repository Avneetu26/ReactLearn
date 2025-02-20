import UserComponent from "./UserComponent";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

const AboutComponent = () => {
    return (
        <div>
            <h1> This is About Page </h1>
            <div>
                <UserContext.Consumer>
                   { ({loggedInUser}) =>  (<h2>{loggedInUser} </h2>) }
                </UserContext.Consumer>
            </div>
            <UserClass name={"Avneet Kaur"} 
                location={"New Jersey"} 
                contact={"6462767117"}
                email={"avneetu26@gmail.com"}
            />
        </div>
    )
}

export default AboutComponent;