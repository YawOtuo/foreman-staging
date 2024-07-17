// let url = "http://127.0.0.1:8000/";

let url = "https://foreman-backend-bb5c83b1ef78.herokuapp.com/"

// Check if running in production
if (process.env.NODE_ENV === 'production') {
  url = "https://foreman-backend-bb5c83b1ef78.herokuapp.com/";
}

export { url };
