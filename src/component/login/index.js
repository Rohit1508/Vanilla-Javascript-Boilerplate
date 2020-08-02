class Login {
  constructor() {

  }

  render() {
    return (
      `<div class="login__container">
        <div>Commuter: Login</div>
        <div class="login__section">
          <div class="login__header">LOGIN TO APP</div>
          <div class="login__credential">
            <div class="login__area">
              <div>Username</div>
              <input placeholder="10-digit mobile number or email ID" />
              <div>password</div>
              <input placeholder="password" />
              <div>FORGOT PASSWORD?</div>
              <div><button>LOGIN</button></div>
            </div>
            <div>Don't have an account? REGISTER NOW</div>
          </div>
        </div>
      </div>`
    )
  }
}

const LoginComponent = (new Login).render();



export default LoginComponent;