import ProfilePic from "../../assets/profilePic.webp"

const App = () => {
  return (
    <main className="main">
      <div className="home-wrapper">
        <h1 className="headTitle">Ingrid Seurin, Développement web</h1>
        <img className="profile_IS" src={ProfilePic} alt="" />
        <div className="presentation-text">
          Bienvenue !<br /> Je suis Ingrid Seurin, développeuse web passionnée par la création d'expériences numériques intuitives. Bien que mon parcours en développement soit récent, mon sens du détail et ma créativité, cultivés par mon goût pour le dessin sur tablette, me permettent de concevoir des sites qui allient esthétique et fonctionnalité.
        </div>
      </div>
    </main>
  )
}

export default App
