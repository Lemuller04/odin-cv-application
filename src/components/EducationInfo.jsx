function EducationInfo({ isEditing, education, setEducation }) {
  function handleChange(e, index) {
    const { name, value } = e.target;
    const updated = [...education];
    updated[index][name] = value;
    setEducation(updated);
  }

  function addEducation() {
    setEducation([
      ...education,
      {
        school: '',
        title: '',
        eduFromDate: '',
        eduToDate: '',
      },
    ]);
  }

  function removeEducation(index) {
    const updated = education.filter((_, i) => i !== index);
    setEducation(updated);
  }

  return (
      <form onSubmit={(e) => e.preventDefault()}>
        <fieldset>
          <legend>Education</legend>
          {education.map((entry, index) => (
            <div key={index} className='education-entry'>
              <p>
                <label htmlFor={`school-${index}`}>School name: </label>
                <input
                  type="text"
                  name="school"
                  id={`school-${index}`}
                  value={entry.school}
                  onChange={(e) => handleChange(e, index)}
                  disabled={!isEditing}
                />
              </p>
              <p>
                <label htmlFor={`title-${index}`}>Title: </label>
                <input
                  type="text"
                  name="title"
                  id={`title-${index}`}
                  value={entry.title}
                  onChange={(e) => handleChange(e, index)}
                  disabled={!isEditing}
                />
              </p>
              <p>
                <label htmlFor={`eduFromDate-${index}`}>From (date): </label>
                <input
                  type="date"
                  name="eduFromDate"
                  id={`eduFromDate-${index}`}
                  value={entry.eduFromDate}
                  onChange={(e) => handleChange(e, index)}
                  disabled={!isEditing}
                />
              </p>
              <p>
                <label htmlFor={`eduToDate-${index}`}>To (date): </label>
                <input
                  type="date"
                  name="eduToDate"
                  id={`eduToDate-${index}`}
                  value={entry.eduToDate}
                  onChange={(e) => handleChange(e, index)}
                  disabled={!isEditing}
                />
              </p>
              {isEditing && (
                <button type='button' onClick={() => removeEducation(index)}>
                  Remove
                </button>
              )}
              <hr />
            </div>
          ))}
          {isEditing && (
            <button type='button' onClick={addEducation}>
              Add Education
            </button>
          )}
        </fieldset>
      </form>
  );
}

export default EducationInfo;
