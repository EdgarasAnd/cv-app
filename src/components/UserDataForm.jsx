function UserDataForm(props) {
  return (
    <>
      <form>
        <div>
          <h1>Input form</h1>
        </div>
        <div>
          <label>
            First Name:
            <input
              name="firstName"
              type="text"
              value={props.firstName}
              onChange={props.handleChange}></input>
          </label>
        </div>
        <div>
          <label>
            Last Name:
            <input
              name="lastName"
              type="text"
              value={props.lastName}
              onChange={props.handleChange}></input>
          </label>
        </div>
        <div>
          <label>
            Age:
            <input
              name="age"
              type="number"
              value={props.age}
              onChange={props.handleChange}></input>
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              name="email"
              type="email"
              value={props.email}
              onChange={props.handleChange}></input>
          </label>
        </div>
        <div>
          <label>
            Image url:
            <input
              name="image"
              type="text"
              value={props.image}
              onChange={props.handleChange}></input>
          </label>
        </div>
      </form>
      
    </>
  );
}

export default UserDataForm;
