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
    const response = await fetch("https://zww6v8jxvj.execute-api.eu-west-1.amazonaws.com/dev/posts");
    const posts = await response.json();
    return posts;
  }
}

export default Api
