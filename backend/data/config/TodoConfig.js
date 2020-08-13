const result = dotenv.config()

if (result.error) {
  throw result.error
}

console.log(result.parsed)
 
 
module.exports = {
 db: {
    production: "mongodb://user:pass@example.com:1234/todo-prod",
    development: "mongodb://localhost:27017/todo-dev",
    test: "mongodb://localhost:27017/todo-test",
  }
};
