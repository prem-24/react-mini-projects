import propTypes from "prop-types"

let userData = 
[
    {
      "name": "John Doe",
      "city": "New York",
      "profile": "Front-end Developer",
      "skills": [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Bootstrap",
        "Node.js",
        "MongoDB"
      ],
      "online": true,
      "profilee": "../src/unsplash_3TLl_97HNJo.png"
    },
    {
      "name": "Jane Smith",
      "city": "San Francisco",
      "profile": "UI/UX Designer",
      "skills": [
        "Sketch",
        "Adobe XD",
        "Figma",
        "HTML",
        "CSS"
      ],
      "online": false,
      "profilee": "../src/unsplash_iFgRcqHznqg.png"
    },
    {
      "name": "Alice Johnson",
      "city": "London",
      "profile": "Full-stack Developer",
      "skills": [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node.js",
        "Express",
        "MongoDB"
      ],
      "online": true,
      "profilee": "../src/unsplash_rDEOVtE7vOs.png"
    }
  ]
  




function User(props){
return(
    <div className="container">
<span className={props.online ? "status online":"status offline"}>ONLINE</span>
<img className="imgg" src={props.profilee} alt="" width={200} />
<h2 className="full-name">{props.name}</h2>
<h1 className="city">{props.city}</h1>
<p className="profile-view">{props.profile}</p>
<div className="buttons">
    <button>message</button>
    <button>following</button>
</div>

<div className="skills-wrapper">
    <h6 className="skills-titile">skills</h6>
    <ul className="skillset">
       {props.skills.map((skill,index)=>{
            return <li key={index}>{skill}</li>
       })}
    </ul>
</div>

</div>
);
}

export const Usercard = () => {
    return (
      <div className="wrapper-cont">
        {userData.map((user, index) => {
          return (
            <User
              key={index}
              name={user.name}
              city={user.city}
              profile={user.profile}
              online={user.online}
              profilee={user.profilee}
              skills={user.skills}
            />
          );
        })}
      </div>
    );
  };
  
  


{/* <div className="wrapper-cont">
<User name = "veeny" city = "Los Angelse"profile = "front-end-developer" skills = {["html","css","javascript","git","bootstrap","nodejs","java","dsa"]} online ={false} profilee ="../src/unsplash_3TLl_97HNJo.png"/>


</div> */}


User.propTypes={
  name:propTypes.string.isRequired,
  city:propTypes.string.isRequired,
  profile:propTypes.string.isRequired,
  online:propTypes.bool.isRequired,
  profilee:propTypes.string.isRequired,
  skills:propTypes.arrayOf(propTypes.string).isRequired


}