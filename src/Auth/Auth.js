import auth0 from "auth0-js";

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: "nelson05.auth0.com",
    clientID: "uQ5o4rqtYqb3s99gTq5E4DrYtgepNSKl",
    redirectUri: "http://localhost:3000/callback",
    responseType: "token id_token",
    scope: "openid"
  });

  handleAuthentication = () => {
    this.auth0.parseHash((err, authResults) => {
      this.setSession(authResults);
    });
  };
  setSession = authResults => {
    localStorage.setItem('isLoggedIn', tre)
  };

  login = () => {
    this.auth0.authorize();
  };
}
