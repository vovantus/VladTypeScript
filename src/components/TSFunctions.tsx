function TSFunctions() {
  function processValue(arg: number | string | string[]): number | string {
    let result: number | string = "";
    switch (typeof arg) {
      case "string":
        result = arg.split("").reverse().join("");
        break;
      case "number":
        result = arg * arg;
        break;
      default:
        if (Array.isArray(arg)) {
          const allStringsArray = arg.map((el) => el.toString());
          result = allStringsArray.join("");
        }
    }

    return result;
  }

  console.log(processValue("hello")); // Output: olleh
  console.log(processValue(5)); // Output: 25
  console.log(processValue(["apple", "orange", "banana"]));

  function findMax<T>(arg: T[]): T | undefined {
    if (arg.length > 0) {
      let result: T = arg[0];
      for (const el of arg) {
        if (el > result) {
          result = el;
        }
      }
      return result;
    } else {
      return undefined;
    }
  }

  console.log(findMax([3, 8, 1, 6])); // Output: 8
  console.log(findMax(["apple", "orange", "banana"])); // Output: orange
  console.log(findMax([true, false, true])); // Output: true
  console.log(findMax([])); // Output: undefined

  return <></>;
}

export { TSFunctions };
