// Using Async/Await and Generators, create separate functions and achieve the 
// samefunctionality.(3hours)
// Execute 3 callback functions asynchronously, 
// for example doTask1(), doTask2() and doTask3().
// Guidelines:
// 1.2 functions should be created. 
// One for Async/Await and the other one for Generators.
// 2.3rd party libraries should not be used.
// 3.Custom Function should carry a meaningful name.
// 4.The program should execute without errors.
// 5.The program should achieve the desired result.
// 6.The program should take care of all 3 states of a Promise.
// 7.Should be committed to Git with meaningful commit messages


async function executeTasksAsync() {
    try {
      const result1 = await doTask1();
      // console.log(result1);
      const result2 = await doTask2();
      // console.log(result2);
      const result3 = await doTask3();
      // console.log(result3);
    } catch (error) {
      console.error(error);
    }
    
  }
  
    
    async function doTask1() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve("Task 2 complete");
        }, 1000);
      });
    }
  
    
    async function doTask2() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve("Task 2 complete");
        }, 1500);
      });
    }
    
      
    async function doTask3() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve("Task 2 complete");
        }, 2000);
      });
    }
    
  function* executeTasksGenerator() {
    try {
      const result1 = yield doTask1();
      // console.log(result1);
      const result2 = yield doTask2();
      // console.log(result2);
      const result3 = yield doTask3();
      // console.log(result3);
    } catch (error) {
      console.error(error);
    }
  }
  
  function runTasksGenerator(generator) {
    const iterator = generator();
  
    function iterate(iteration) {
      if (iteration.done) {
        return Promise.resolve(iteration.value);
      }
      return Promise.resolve(iteration.value)
        .then(x => iterate(iterator.next(x)))
        .catch(x => iterate(iterator.throw(x)));
    }
  
    return iterate(iterator.next());
  }
  
  executeTasksAsync();
  
  console.log('Executeed with Generator')
  
  runTasksGenerator(executeTasksGenerator);
  