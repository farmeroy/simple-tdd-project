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
        <button>Login</button>
      </form>
  )
}

export default Form;
