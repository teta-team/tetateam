function User({image,name, about, skills}) {
  const skillsList = ["HTML", "Css", "JavaScript", "PHP", "SQL", "Server", "WordPress", "SEO"]
  return (
    <div className="user">
      <div className="right">
        <img src={image} alt=""></img>
        <h2>{name}</h2>
      </div>
      <div className="left">
        <p className="about">{about}</p>
        <div id="skills">
          {skillsList.map((skill, index) => (
            <div className="skill-box" key={index}>
              <h3>{skill}</h3>
              <div className="fill-box">
                <div className="fill" style={{ width: `${skills[index]}%` }}>
                  <p>{`${skills[index]}%`}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default User