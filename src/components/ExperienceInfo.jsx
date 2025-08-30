function ExperienceInfo({ isEditing, experience, setExperience }) {
  function handleChange(e, index) {
    const { name, value } = e.target;
    const updated = [...experience];
    updated[index][name] = value;
    setExperience(updated);
  }

  function addExperience() {
    setExperience([
      ...experience,
      {
        company: '',
        position: '',
        description: '',
        expFromDate: '',
        expToDate: '',
      }
    ])
  }

  function removeExperience(index) {
    const updated = experience.filter((_, i) => i !== index);
    setExperience(updated);
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <fieldset>
        <legend>Experience</legend>
        {experience.map((entry, index) => (
          <div key={index} className='experience-entry'>
            <p>
              <label htmlFor={`company-${index}`}>Company name: </label>
              <input
                type="text"
                name="company"
                id={`company-${index}`}
                value={entry.company}
                onChange={(e) => handleChange(e, index)}
                disabled={!isEditing}
              />
            </p>
            <p>
              <label htmlFor={`position-${index}`}>Position: </label>
              <input
                type="text"
                name="position"
                id={`position-${index}`}
                value={entry.position}
                onChange={(e) => handleChange(e, index)}
                disabled={!isEditing}
              />
            </p>
            <p>
              <label htmlFor={`description-${index}`}>Description: </label>
              <textarea
                name="description"
                id={`description-${index}`}
                value={entry.description}
                onChange={(e) => handleChange(e, index)}
                disabled={!isEditing}
              >
              </textarea>
            </p>
            <p>
              <label htmlFor={`expFromDate-${index}`}>From (date): </label>
              <input
                type="date"
                name="expFromDate"
                id={`expFromDate-${index}`}
                value={entry.expFromDate}
                onChange={(e) => handleChange(e, index)}
                disabled={!isEditing}
              />
            </p>
            <p>
              <label htmlFor={`expToDate-${index}`}>To (date): </label>
              <input
                type="date"
                name="expToDate"
                id={`expToDate-${index}`}
                value={entry.expToDate}
                onChange={(e) => handleChange(e, index)}
                disabled={!isEditing}
              />
            </p>
            {isEditing && (
              <button type='button' onClick={() => removeExperience(index)}>
                Remove
              </button>
            )}
            <hr />
          </div>
        ))}
        {isEditing && (
          <button type='button' onClick={addExperience}>
            Add Experience
          </button>
        )}
      </fieldset>
    </form>
  );
}

export default ExperienceInfo;
