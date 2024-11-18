import "./App.scss";
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  return (
    <div className="App">
      <section className="landingPage">
        <div className="headerBlock">
          <div className="headerDescription">
            <h1 className="introduction">Hi I'm <b>YVERT GLYNN SORIANO</b></h1>
            <p className="subHeader">WELCOME TO MY PORTFOLIO</p>
            <button className="btn btn-primary w-25">Read More</button>
          </div>
          <div className="headerImage"></div>
        </div>
      </section>
      <section className="aboutSection">
        <h1>About Section</h1>
      </section>
      <section className="projectSection">
        <h1>Project Section</h1>
      </section>
      <section className="footerSection">
        <h1>Wants to Connect?</h1>
      </section>
    </div>
  );
}

export default App;
