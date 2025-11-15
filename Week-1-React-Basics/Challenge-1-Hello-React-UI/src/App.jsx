import './App.css';
import maleUserImg from './assets/male.jpg';
import femaleUserImg from './assets/female.jpg';
import ProfileCard from './components/ProfileCard';
function App() {

  let user1Details = { name: "Dhivakaran", city: "Pudukkottai", img: maleUserImg };
  let user2Details = { name: "Joyal", city: "Trichy", img: maleUserImg };
  let user3Details = { name: "Palani", city: "Thanjavur", img: maleUserImg };
  let user4Details = { name: "Dhivya", city: "Cuddalore", img: femaleUserImg };
  let user5Details = { name: "Dharani", city: "Dindigul", img: femaleUserImg };
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Profile Card</span>
        </div>
      </nav>
      <div className="container my-5">
        <div className="row justify-content-center g-3">
          <div className="col-md-3">
            <ProfileCard props={user1Details} />
          </div>
          <div className="col-md-3">
            <ProfileCard props={user2Details} />
          </div>
          <div className="col-md-3">
            <ProfileCard props={user3Details} />
          </div>
          <div className="col-md-3">
            <ProfileCard props={user4Details} />
          </div>
          <div className="col-md-3">
            <ProfileCard props={user5Details} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
