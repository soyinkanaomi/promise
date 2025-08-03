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
export function addAsync(a: number, b: number): Promise<number> {
  return new Promise((resolve, reject) => {
    if (typeof a !== "number" || typeof b !== "number") {
      reject("Inputs must be numbers.");
    } else {
      setTimeout(() => {
        resolve(a + b);
      }, 1000); // simulate async delay
    }
  });
}
