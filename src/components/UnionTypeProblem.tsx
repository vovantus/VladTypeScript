function UnionTypeProblem() {
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

  return <></>;
}

export { UnionTypeProblem };
