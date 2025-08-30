function GeneralInfo({ isEditing, info, setInfo }) {
  function handleChange(e) {
    const { name, value } = e.target;
    setInfo(prevInfo => ({
      ...prevInfo,
      [name]: value,
    }));
  }

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <fieldset>
          <legend>Personal Info</legend>
          <p>
            <label htmlFor="name">Full name: </label>
            <input
              type="text"
              name="name"
              id="name"
              value={info.name}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </p>
          <p>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              id="email"
              value={info.email}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </p>
          <p>
            <label htmlFor="phone">Phone: </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={info.phone}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </p>
          <p>
            <label htmlFor="address">Address: </label>
            <input
              type="text"
              name="address"
              id="address"
              value={info.address}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </p>
        </fieldset>
      </form>
    </>
  )
}

export default GeneralInfo;
