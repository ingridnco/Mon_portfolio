import "../../styles/index.scss"

const Card = ({ imgSrc, title, description, onCardClick, skills }) => {
  return (
    <div className="card" onClick={onCardClick}>
      <img className="img" src={`${process.env.PUBLIC_URL}/${imgSrc}`} alt={title} />
      <h3 className="noDeco">{title}</h3>
      <div className="card__logos">
        {skills.map((skill, index) => (
          <img key={index} className="card__logo" src={`${process.env.PUBLIC_URL}/${skill}`} alt={`Logo ${index + 1}`} />
        ))}
      </div>
      <p className="noDeco">{description}</p>
    </div>
  )
}

export default Card
