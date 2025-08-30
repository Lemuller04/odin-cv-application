import { useState } from 'react'
import './styles/App.css'

import GeneralInfo from "./components/GeneralInfo.jsx";
import EducationInfo from "./components/EducationInfo.jsx";
import ExperienceInfo from "./components/ExperienceInfo.jsx";
import Preview from "./components/Preview.jsx";

function App() {
  let [isEditing, setIsEditing] = useState(false);
  let [activeForm, setActiveForm] = useState('general');

  let [cvData, setCvData] = useState({
    general: {
      name: 'Aurelia Voss',
      email: 'aurelia.voss@stellarnet.io',
      phone: '+1 (555) 867-5309',
      address: '42 Nebula Lane, Orbit City, Mars Colony 7',
    },
    education: [
      {
        school: 'Nova Academia of Interstellar Sciences',
        title: 'M.S. in Astroinformatics',
        eduFromDate: '2042-09-01',
        eduToDate: '2046-06-15',
      },
    ],
    experience: [
      {
        company: 'Stellarnet Systems',
        position: 'Lead Interface Engineer',
        description: 'Designed adaptive UI for zero-gravity environments. Led a team of 12 across orbital stations to deploy real-time holographic dashboards.',
        expFromDate: '2046-07-01',
        expToDate: '2050-03-15',
      },
      {
        company: 'ChronoTech Labs',
        position: 'Junior Temporal Analyst',
        description: 'Assisted in modeling causality loops for predictive simulations. Developed tools to visualize time-based anomalies in user behavior.',
        expFromDate: '2043-06-01',
        expToDate: '2046-06-30',
      },
    ],
  });

  return (
    <>
      <div className="form-container">
        <ul>
          <li>
            <button
              className={activeForm === 'general' ? 'active' : ''}
              onClick={() => {
                setActiveForm('general');
                setIsEditing(false);
              }}
            >
              Personal Info
            </button>
          </li>
          <li>
            <button
              className={activeForm === 'education' ? 'active' : ''}
              onClick={() => {
                setActiveForm('education');
                setIsEditing(false);
              }}
            >
              Education
            </button>
          </li>
          <li>
            <button
              className={activeForm === 'experience' ? 'active' : ''}
              onClick={() => {
                setActiveForm('experience');
                setIsEditing(false);
              }}
            >
              Experience
            </button>
          </li>
        </ul>

        {activeForm === 'general' && (
          <GeneralInfo
            isEditing={isEditing}
            info={cvData.general}
            setInfo={(newInfo) =>
              setCvData((prev) => ({ ...prev, general: newInfo }))
            }
          />
        )}

        {activeForm === 'education' && (
          <EducationInfo
            isEditing={isEditing}
            education={cvData.education}
            setEducation={(newEducation) =>
              setCvData((prev) => ({ ...prev, education: newEducation }))
            }
          />
        )}

        {activeForm === 'experience' && (
          <ExperienceInfo
            isEditing={isEditing}
            experience={cvData.experience}
            setExperience={(newExperience) =>
              setCvData((prev) => ({ ...prev, experience: newExperience }))
            }
          />
        )}

        <button
          className="save-button"
          onClick={() => setIsEditing((prev) => !prev)}
        >
          {isEditing ? 'Save' : 'Edit'}
        </button>
      </div>

      <Preview cvData={cvData} />
    </>
  )
}

export default App
