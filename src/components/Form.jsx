const Form = () => {
  return (
      <form name="form">
        <div>
          <label htmlFor="username">Username</label>
          <input type='text' name='username' id='username'/>
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email'/>
        </div>
        <div>
          <label htmlFor="firstname">First Name:</label>
          <input type='text' id='firstname' />
        </div>
        <div>
          <label htmlFor="lastname">Last Name:</label>
          <input type='text' id='lastname' />
        </div>
        <button>Sign Up</button>
      </form>
  )
}

export default Form;
