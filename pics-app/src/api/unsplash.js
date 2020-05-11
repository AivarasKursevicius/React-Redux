import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 5hIuHx0UiU46TLFuIta4CZrcZ6y0QzbSCq4KBJJmFS8",
  },
});
