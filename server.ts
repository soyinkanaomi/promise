// import http, { IncomingMessage, ServerResponse } from "http"
// import os from "os"
// import fs from "fs"

// const server = http.createServer((req:IncomingMessage, res:ServerResponse) =>{
//         res.statusCode = 200;
//         res.setHeader("Content-type", "text/plain");
//         res.write("hello world");
//         res.end();

      
//       }
//     );
//     server.listen(8000, () => {
//       console.log("server is listening to http://localhost:8000");
//     });


// A simple module that exports a function returning a Promise
// export function addAsync(a: number, b: number): Promise<number> {
//   return new Promise((resolve, reject) => {
//     if (typeof a !== "number" || typeof b !== "number") {
//       reject("Inputs must be numbers.");
//     } else {
//       setTimeout(() => {
//         resolve(a + b);
//       }, 1000); // simulate async delay
//     }
//   });
// }


// Define a User interface
export interface User {
  id: number;
  name: string;
  email: string;
}

// In-memory "database"
let users: User[] = [];

// Create a user
export async function createUser(user: User): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      users.push(user);
      resolve();
    }, 300);
  });
}

// Get all users
export async function getUsers(): Promise<User[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(users);
    }, 300);
  });
}

// Update user by ID
export async function updateUser(id: number, newData: Partial<User>): Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = users.findIndex((user) => user.id === id);
      if (index === -1) {
        return reject("User not found");
      }
      users[index] = { ...users[index], ...newData };
      resolve();
    }, 300);
  });
}

// Delete user by ID
export async function deleteUser(id: number): Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exists = users.some((u) => u.id === id);
      if (!exists) return reject("User not found");
      users = users.filter((u) => u.id !== id);
      resolve();
    }, 300);
  });
}
