// Callback
function fetchData(callback) {
  setTimeout(() => {
    const data = "Fetched data!";
    callback(data);
  }, 2000);
}

fetchData((result) => {
  console.log(result);
});