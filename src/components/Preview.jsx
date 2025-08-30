import "../styles/preview.css";

function Preview({ cvData }) {
  const {general, education, experience } = cvData;

  return (
    <div className="preview">
      <div className="a4-paper">
        <header>
          <h1>{general.name}</h1>
          <p>{general.email} | {general.phone}</p>
          <p>{general.address}</p>
        </header>

        <section>
          <h2>Education</h2>
          {education.map((edu, index) => (
            <div key={index} className='preview-section'>
              <h3>{edu.school}</h3>
              <p>{edu.title}</p>
              <p>{edu.eduFromDate} - {edu.eduToDate}</p>
            </div>
          ))}
        </section>

        <section>
          <h2>Experience</h2>
          {experience.map((exp, index) => (
            <div key={index} className='preview-section'>
              <h3>{exp.company}</h3>
              <p><strong>{exp.position}</strong></p>
              <p>{exp.expFromDate} - {exp.expToDate}</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}

export default Preview;
