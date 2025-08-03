import { addAsync } from "./server";

// Call the promise-based function
addAsync(5, 10)
  .then((result) => {
    console.log("Sum is:", result);
  })
  .catch((err) => {
    console.error("Error:", err);
  });
