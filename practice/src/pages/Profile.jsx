import {useParams} from "react-router-dom";

const data = {
  professor: {
    name: "Hyunju Park",
    description: "Professor",
  },
  doctor: {
    name: "Hyeonsig Jeon",
    description: "Doctor",
  },
  
};


export default function Profile() {
  const params = useParams();
  const profile = data[params.username];
  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필</p>
      )}
    
    < /div>
  );
};
