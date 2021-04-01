import { getJwt } from "./authService";

export class Api {
  instance = null;
  config = null;

  constructor(config) {
    this.config = config;
  }

  static getInstance() {
    if (!Api.instance) {
      Api.instance = new Api();
    }

    return Api.instance;
  }

  async retrievePostsRequest() {
    const authJwt = await getJwt();
    console.log(authJwt);
    const response = await fetch(process.env.REACT_APP_LAMBDA_URL + "/posts", {
      method: "get",
      headers: {
        Authorization: authJwt,
      },
    });
    const posts = await response.json();
    return posts;
  }
}

export default Api;
