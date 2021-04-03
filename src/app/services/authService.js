import Amplify, { Auth } from "aws-amplify";

export function initAuthService() {
  Amplify.configure({
    Auth: JSON.parse(process.env.REACT_APP_AMPLIFY_CONFIG),
  });
}

export async function login(email, password) {
  try {
    return await Auth.signIn(email, password);
  } catch (error) {
    return error;
  }
}

export async function register(forename, surname, email, password) {
  try {
    return await Auth.signUp({
      username: email,
      password,
      attributes: {
        family_name: surname,
        name: forename,
      },
    });
  } catch (error) {
    try {
      return await Auth.resendSignUp(email);
    } catch (err) {
      return err;
    }
  }
}

export async function resetPassword(email, code, newPassword) {
  return Auth.forgotPasswordSubmit(email, code, newPassword)
    .then((data) => data)
    .catch((err) => err);
}

export async function forgotPassword(email) {
  return Auth.forgotPassword(email)
    .then((data) => data)
    .catch((err) => err);
}

export async function logout() {
  try {
    return await Auth.signOut();
  } catch (error) {
    return error;
  }
}

export async function changePassword(oldPassword, newPassword) {
  return await Auth.currentAuthenticatedUser()
    .then((user) => {
      return Auth.changePassword(user, oldPassword, newPassword);
    })
    .then((data) => data)
    .catch((err) => err);
}

export async function changeEmail(newEmail) {
  let user = await Auth.currentAuthenticatedUser();

  let res = await Auth.updateUserAttributes(user, {
    email: newEmail,
  })
    .then((data) => data)
    .catch((err) => {
      console.log(err);
      return err;
    });
  return res;
}

export async function getCurrentSession() {
  let userId = "";
  let jwt = "";

  try {
    const currentSession = await Auth.currentSession().then((data) => data);
    // .catch(err => {console.log(err); return err});

    userId = currentSession.getIdToken().payload.sub;
    jwt = currentSession.getIdToken().getJwtToken();
  } catch (e) {
    // Do nothing
  }

  return {
    userId,
    jwt,
  };
}

export async function getJwt() {
  const res = await getCurrentSession();
  return res.jwt;
}

export async function getUserId() {
  const res = await getCurrentSession();
  return res.userId;
}

export async function ionViewCanEnter(){
  return await Auth.currentAuthenticatedUser()
    .then(() => { return true; })
    .catch(() => { return false; });
}
