import ProfileFunctionalComponent from "./Profile";
import ProfileClass from "./ProfileClass"

const About = () => {
    return (
      <div>
        <h1>About Us Page</h1>
        <p>
          {" "}
          This is the Namaste React Live Course Chapter 07 - Finding the Path 🚀
        </p>
        <ProfileClass key="value" />
        <ProfileFunctionalComponent key1 = "value1"/>
      </div>
    );
  };
  
export default About;
  