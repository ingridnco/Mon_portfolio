import yellowStar from "../../assets/yellow_star.webp"
import greyStar from "../../assets/grey_star.webp"

const SkillCard = ({ title, logo, level }) => {
    return (
      <div className="skill-card">
        <p className="skill-title">{title}</p>
        <img src={logo} alt="Skill logo" className="skill-logo" />
        <div className="stars">
          {[...Array(5)].map((_, i) => (
            <img key={i} src={i < level ? yellowStar : greyStar} alt="star" className="star" />
          ))}
        </div>
      </div>
    )
  }
  export default SkillCard