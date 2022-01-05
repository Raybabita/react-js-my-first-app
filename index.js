const element = (
  // Write your code here.
  <div className="Bg-container">
    <h1 className="heading">Congratulations</h1>
    <div className="sub-container">
      <img
        className="profile-pic"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
      />
      <h1 className="card-title">Kiran B</h1>
      <p className="card-description">
        Sigma Institute of Engineering, GTU Gujarat, Vadodara Gujarat
      </p>
      <img
        className="profile-pic"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
