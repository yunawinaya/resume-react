import "./App.css";

function Experience1() {
  return (
    <div className="experience">
      <h3>Software Developer</h3>
      <h4>Sigma Lab Sdn Bhd</h4>
      <p>
        I am currently pursuing the acquisition of full-stack software
        development skills through enrollment in Sigma School, a co-learning
        coding institution. The school emphasizes collaborative learning and
        real-world projects to ensure graduates are job-ready upon completion of
        the program. The curriculum consists of four core modules: Coding
        Fundamentals, Frontend Development, Backend Development, and Mobile App
        Development.
      </p>
    </div>
  );
}

function Experience2() {
  return (
    <div className="experience">
      <h3>Special Projects and Operations Manager</h3>
      <h4>Mimpi Sleep</h4>
      <ul>
        <li>
          Established and manage strong rapport with 2 shipment partners which
          result in optimized logistic operation and costs (i.e. received
          priority shipment and 15% preferential rates) within 2 months.
        </li>
        <li>
          Expanded shipping coverage by creating 2 new warehouses within certain
          areas which result in reducing 20% operational cost within 3 months.
        </li>
        <li>
          Built relationship with certain parties (1 per month) and joint
          collaboration of various campaigns/promotions (occasionally) to
          increase brand awareness and 10% purchase intention.
        </li>
        <li>
          Communicated progress and roadblocks to stakeholders including
          executive management and made proactive recommendations to remove
          roadblocks leading to the on-time and on-budget delivery of the
          project.
        </li>
        <li>
          Met 100% of deadlines and project goals resulting in a promotion offer
          upon successful completion of the project.
        </li>
      </ul>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <div className="header">
        <h1>Yuna Winaya</h1>
        <h2>Software Developer</h2>
      </div>
      <div className="content">
        <div className="sidebar">
          <h4>Personal Information</h4>
          <p>Address: Bali, Indonesia</p>
          <p>Email: gedeyuna@gmail.com</p>
          <p>Phone: (60) 123-4567</p>
        </div>
        <div className="main">
          <h3>Experience</h3>
          <Experience1 />
          <Experience2 />
        </div>
      </div>
    </div>
  );
}

export default App;
