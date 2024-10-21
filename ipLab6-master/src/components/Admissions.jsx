import React, { useState } from 'react';

const Admission = () => {
  const [showAdmissionProcess, setShowAdmissionProcess] = useState(false);
  const [showApplicationProcess, setShowApplicationProcess] = useState(false);
  const [showVacancySchedule, setShowVacancySchedule] = useState(false);
  const [showMeritList, setShowMeritList] = useState(false);
  const [showFees, setShowFees] = useState(false);
  const [showSanctionedIntake, setShowSanctionedIntake] = useState(false);
  const [showEligibility, setShowEligibility] = useState(false);
  const [showFaq, setShowFaq] = useState(false);
  const [showImportantLinks, setShowImportantLinks] = useState(false);

  const admissionProcessInfo = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  `;

  const applicationProcessInfo = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  `;

  const vacancyScheduleInfo = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam, quis nostrud exercitation ullam co laboris nisi ut aliquip ex ea commodo consequat. 
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  `;

  const meritListInfo = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  `;

  const feesInfo = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  `;

  const sanctionedIntakeInfo = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  `;

  const eligibilityInfo = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  `;

  const faqInfo = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  `;

  const importantLinksInfo = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  `;

  return (
    <div>
      <div className="card">
        <h2>Admission Process</h2>
        <p onClick={() => setShowAdmissionProcess(!showAdmissionProcess)}>+</p>
        {showAdmissionProcess && <p>{admissionProcessInfo}</p>}
      </div>

      <div className="card">
        <h2>Application Process</h2>
        <p onClick={() => setShowApplicationProcess(!showApplicationProcess)}>+</p>
        {showApplicationProcess && <p>{applicationProcessInfo}</p>}
      </div>

      <div className="card">
        <h2>Vacancy Schedule</h2>
        <p onClick={() => setShowVacancySchedule(!showVacancySchedule)}>+</p>
        {showVacancySchedule && <p>{vacancyScheduleInfo}</p>}
      </div>

      <div className="card">
        <h2>Merit List</h2>
        <p onClick={() => setShowMeritList(!showMeritList)}>+</p>
        {showMeritList && <p>{meritListInfo}</p>}
      </div>

      <div className="card">
        <h2>Fees</h2>
        <p onClick={() => setShowFees(!showFees)}> +</p>
        {showFees && <p>{feesInfo}</p>}
      </div>

      <div className="card">
        <h2>Sanctioned Intake</h2>
        <p onClick={() => setShowSanctionedIntake(!showSanctionedIntake)}>+</p>
        {showSanctionedIntake && <p>{sanctionedIntakeInfo}</p>}
      </div>

      <div className="card">
        <h2>Eligibility</h2>
        <p onClick={() => setShowEligibility(!showEligibility)}>+</p>
        {showEligibility && <p>{eligibilityInfo}</p>}
      </div>

      <div className="card">
        <h2>FAQ</h2>
        <p onClick={() => setShowFaq(!showFaq)}>+</p>
        {showFaq && <p>{faqInfo}</p>}
      </div>

      <div className="card">
        <h2>Important Links</h2>
        <p onClick={() => setShowImportantLinks(!showImportantLinks)}>+</p>
        {showImportantLinks && <p>{importantLinksInfo}</p>}
      </div>
    </div>
  );
};

export default Admission;