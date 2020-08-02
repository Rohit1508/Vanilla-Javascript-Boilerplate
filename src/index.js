import LoginComponent from './component/login/index.js'
import RegistrationComponent from './component/Registration/index.js'
import CabRide from './component/FindPool/index.js'

const root = document.getElementById('root');

new CabRide(root);

const loginData = [{username: "rohit", password: 123}];

loginData.forEach((cred) => {
  localStorage.setItem('cred', JSON.stringify(cred));
})
