class Registration {
  constructor() {

  }

  render() {
    return (
      `<div class="login__container">
        <div>Commuter: Registration</div>
        <div class="login__section">
          <div class="login__header">REGISTER WITH APP</div>
          <div class="login__credential">
            <div class="login__area">
              <form action="/action_page.php">
                <label for="fname">Full Name:</label><br>
                <input type="text" id="fname" name="fname" value="John"><br>
                <label for="lname">Emailid:</label><br>
                <input type="text" id="lname" name="lname" value="Doe"><br><br>
                <label for="lname">Mobile Number:</label><br>
                <input type="text" id="lname" name="lname" value="Doe"><br><br>
                <label for="lname">Password:</label><br>
                <input type="text" id="lname" name="lname" value="Doe"><br><br>
                <label for="lname">Re-Enter Password:</label><br>
                <input type="text" id="lname" name="lname" value="Doe"><br><br>
                <label for="lname">Re-Enter Password:</label><br>
                <input type="text" id="lname" name="lname" value="Doe"><br><br>
                <input type="submit" value="Submit">
              </form>
            </div>
            <div>Don't have an account? REGISTER NOW</div>
          </div>
        </div>
      </div>`
    )
  }
}

const RegistrationComponent = (new Registration).render();



export default RegistrationComponent;