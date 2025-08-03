// import { addAsync } from "./server";

// // Call the promise-based function
// addAsync(5, 10)
//   .then((result) => {
//     console.log("Sum is:", result);
//   })
//   .catch((err) => {
//     console.error("Error:", err);
//   });



import { createUser, getUsers, updateUser, deleteUser } from "./server";

async function runCRUD() {
  try {
    console.log(" Creating users...");
    await createUser({ id: 1, name: "Naomi", email: "naomi@email.com" });
    await createUser({ id: 2, name: "Soyinka", email: "soy@email.com" });

    console.log("Getting users:");
    const allUsers = await getUsers();
    console.log(allUsers);

    console.log("Updating user with ID 1...");
    await updateUser(1, { name: "Naomi Updated" });

    const updatedUsers = await getUsers();
    console.log(" After update:", updatedUsers);

    console.log(" Deleting user with ID 2...");
    await deleteUser(2);

    const finalUsers = await getUsers();
    console.log(" Final users list:", finalUsers);
  } catch (error) {
    console.error(" Error occurred:", error);
  }
}

runCRUD();
