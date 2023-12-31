//Invoking functions individually
function func1() {
    console.log("Hi");
  }
  
  function func2() {
    console.log("Goodbye!");
  }
  
  func1();
  func2();
  

  //Invoking a function as a callback
  function func3 (callback) {   // The `callback` parameter represents a function 
    console.log("Hallo");
    
    callback();
  }
   
  function func4() {  
    console.log("Tot ziens!");
  }
   
  func3(func4);


//   const directions = [
//     "Starting point: Ironhack Miami",
//     "↑ Head east on SW 8th St/Carlos Arboleya toward SW 1st Avenue",
//     "➔ Turn right onto S Miami Ave",
//     "* Chipotle Mexican Grill 891 S Miami Ave, Miami"
//   ];
  
//   //Too many callbacks - Callback Hell
//   function getDirections(step, callback, errorCallback) {
//      setTimeout(() => {
//       console.log( directions[step] );
      
//       if (!directions[step]) errorCallback("Instructions not found.");
//       else callback();
//      }, 2000); 
//   }
  
// //   // Single callback
// //   getDirections(0, ()=> {
// //     getDirections(1, () => {});
// //   });
  
// // // Callbacks in sequence
// getDirections(0, () => {
//     getDirections(1, () => {
//       getDirections(2, () => {
//         getDirections(3, () => {
          
//           console.log("You arrived at your destination!");
//           // getDirections(4, () => {}, (err) => console.log(err) ) ;
//         }, (err) => console.log(err));
//       }, (err) => console.log(err));
//     }, (err) => console.log(err));
//   }, (err) => console.log(err));

  // Simulated getDirections function
// function getDirections(destination, onSuccess, onError) {
//     setTimeout(() => {
//       const errorProbability = Math.random();
  
//       if (errorProbability < 0.2) {
//         onError(`Error: Unable to get directions to destination ${destination}`);
//       } else {
//         onSuccess(`Directions to destination ${destination} received.`);
//       }
//     }, 2000); 
//   }
  
//   getDirections(0, () => {
//     console.log("You arrived at your destination 0!");
//   }, (err) => {
//     console.log(err);
//   });
  
//   getDirections(1, () => {
//     console.log("You arrived at your destination 1!");
//   }, (err) => {
//     console.log(err);
//   });
  


  //Using promises
  const directions = [
    "Starting point: Ironhack Madrid",
    "➔ Turn right toward P. de la Chopera",
    "← At the roundabout, take the 1st exit onto P. de la Chopera",
    "* Lune Creperie P. de la Chopera 33, Madrid"
  ];
  
  
  function obtainDirections(step) {
    return new Promise ((resolve, reject) => {
       setTimeout(() => {
        console.log( directions[step] );
  
        if (!directions[step]) reject("Instructions not found.")
        else resolve();
       }, 2000); 
      
    })
  };
  
  obtainDirections(0)
    .then(() => obtainDirections(1) )
    .then(() => obtainDirections(2) )
    .then(() => obtainDirections(3) )
    .then(() => console.log("You arrived at your destination!") )
    .catch((err) => console.log(err));
  
    //.then()
    const pr1 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("JavaScript");
      }, 9000);
    });
    
    pr1
      .then((val) => console.log("Resolved with: ", val));
    

    //.catch()
    const pr2 = new Promise((resolve, reject) => {
      setTimeout(() => {
          reject("Rejected!"); // <== This value will be passed to catch()
      }, 2000);
    });
     
    pr2
      .then((value) => console.log("Resolved with: ", val)) //none value using "val" instead of 'value'
      .then((value) => console.log("Resolved with: ", value)) //Resolved with JavaScript
      .catch((err) => console.log("catch() -> ", err)); //catch() "Rejected!"


      const pr3 = new Promise((resolve, reject) => {
        throw new Error("Rejected by throwing an Error!");
    });
    
    
    pr3
      .then((value) => console.log("Resolved with: ", value))
      .catch((err) => console.log("catch() -> ", err));
    

      const pr4 = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Ironhack"), 2000);
      });
      
      //Errors
      pr4
        .then(() => {
          console.log("1. then()");
        })
        .then(() => {
          console.log("2. then()");
          throw new Error("Something went wrong");     // <= Throw an Error
        })
        .then(() => {                                  // <= This block is skipped
          console.log("3. then()");
        })
        .catch((err) => console.log("catch() -> ", err));
      
        //Multiple .then() blocks
      const pr5 = new Promise((resolve, reject) => {
        setTimeout(() => resolve("A"), 10000);
      });
      
      pr5
        .then((value1) => {
          console.log("value1:", value1);
          return "B";
        })
        .then((value2) => {
          console.log("value2:", value2);
          return "C";
        })
        .then((value3) => {
          console.log("value3:", value3);
          return "D";
        })
        .then((value4) => {
          console.log("value4:", value4);
          return "A, B, C, D";
        })
        .then((value5) => {
          console.log("value5:", value5);
        })
      
        //Multiple .catch() blocks
        const pr7 = new Promise((resolve, reject) => {
          setTimeout(() => resolve("A"), 12000);
        });
        
        
        pr7
          .then((value1) => {
            console.log("1. then(): ", value1);  
            throw new Error("FIRST ERROR");
          })
          .catch((err) => {
            console.error("1. catch(): ", err);
            return "Hello from catch";
          })
          .then((value2) => {
            console.log("2. then(): ", value2);
            throw new Error("SECOND ERROR");
          })
          .catch((err) => {
            console.error("2. catch(): ", err);
          });
        
          //,finally()
          const pr8 = new Promise((resolve, reject) => {
            setTimeout(() => resolve("A"), 13000);
          });
          
          pr8
            .then((value1) => console.log("1. then()"))
            .then((value2) => console.log("2. then()"))
            .finally(() => {
              console.log("finally()");
            });
          

          //Example 2
          const pr9 = new Promise((resolve, reject) => {
            setTimeout(() => resolve("Ironhack"), 14000);
          });
          
          
          pr9
            .then(() => console.log("1. then()") )
            .then(() => Promise.reject("Oops!") )      
            .then(() => console.log("3. then()") )       
            .catch((err) => {
              console.log("catch()", err) 
            throw err;
            })
            .finally(() => console.log("finally()"));

          //Promised.all()
          const p11 = new Promise((resolve, reject) => {
            setTimeout(() => resolve("foo"), 15000);
          });
          const p22 = new Promise((resolve, reject) => {
            setTimeout(() => resolve(1337), 16000);
          });
          const p33 = new Promise((resolve, reject) => {
            setTimeout(() => resolve( { name: "Bob" } ), 20000);
          });
          
          Promise.all( [p11, p22, p33] )
            .then((values) => console.log("values", values));
          

          //Rejection
          const p1 = new Promise((resolve, reject) => {
            setTimeout(() => resolve("foo"), 21000);
          });
          
          const p2 = new Promise((resolve, reject) => {
            setTimeout(() => resolve(1337), 22000);
          });
          
          const p3 = new Promise((resolve, reject) => {
            setTimeout(() => reject("Something went wrong"), 24000); // <= Reject the promise
          });
          
          Promise.all([p1, p2, p3])
            .then((values) => console.log("values", values))
            .catch((err)=> console.log("catch()", err));
          

            