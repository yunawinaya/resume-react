import "./App.css";

function Experience(props) {
  return (
    <div className="experience">
      <h3 className="mb-3">{props.title}</h3>
      <h4>{props.company}</h4>
      <p>{props.description}</p>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <div className="header">
        <h1 className="mt-5">Yuna Winaya</h1>
        <h2>Software Developer</h2>
      </div>
      <div className="content">
        <div className="row">
          <div className="col-md-4">
            <div className="sidebar">
              <h4>Personal Information</h4>
              <p>Address: Bali, Indonesia</p>
              <p>Email: gedeyuna@gmail.com</p>
              <p>Phone: (60) 123-4567</p>
            </div>
          </div>
          <div className="col-md-8">
            <div className="main">
              <h3>Experience</h3>
              <Experience
                title="Software Developer"
                company="Sigma Lab Sdn Bhd"
                description="I am currently pursuing the acquisition of full-stack software development skills through enrollment in Sigma School, a co-learning coding institution. The school emphasizes collaborative learning and real-world projects to ensure graduates are job-ready upon completion of the program. The curriculum consists of four core modules: Coding Fundamentals, Frontend Development, Backend Development, and Mobile App Development."
              />
              <Experience
                title="Special Projects and Operations Manager"
                company="Mimpi Sleep"
                description="Established and manage strong rapport with 2 shipment partners which result in optimized logistic operation and costs (i.e. received priority shipment and 15% preferential rates) within 2 months. Expanded shipping coverage by creating 2 new warehouses within certain areas which result in reducing 20% operational cost within 3 months. Built relationship with certain parties (1 per month) and joint collaboration of various campaigns/promotions (occasionally) to increase brand awareness and 10% purchase intention. Communicated progress and roadblocks to stakeholders including executive management and made proactive recommendations to remove roadblocks leading to the on-time and on-budget delivery of the project. Met 100% of deadlines and project goals resulting in a promotion offer upon successful completion of the project."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
