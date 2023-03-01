const { foodDistribution } = require("./index")

test("foodDistribution function input A", () =>{
    const inputArray = [5,3,1,2,1]
    const result = foodDistribution(inputArray);
    expect(result).toEqual(0);
})
test("foodDistribution function input B", () =>{
    const inputArray = [4,5,2,3,1,0]
    const result = foodDistribution(inputArray);
    expect(result).toEqual(2);
})
test("foodDistribution function input C", () =>{
    const inputArray = [5,2,2,2,2,2]
    const result = foodDistribution(inputArray);
    expect(result).toEqual(0);
})
test("foodDistribution function input D", () =>{
    const inputArray = [5,2,3,4,5]
    const result = foodDistribution(inputArray);
    expect(result).toEqual(1);
})
test("foodDistribution function input E", () =>{
    const inputArray = [3,2,1,0,4,1,0]
    const result = foodDistribution(inputArray);
    expect(result).toEqual(4);
})
test("foodDistribution function input F", () =>{
    const inputArray = [4,5,4,5,2,3,1,2]
    const result = foodDistribution(inputArray);
    expect(result).toEqual(3);
})
test("foodDistribution function input G", () =>{
    const inputArray = [7,5,4,3,4,5,2,3,1,4,5]
    const result = foodDistribution(inputArray);
    expect(result).toEqual(6);
})
test("foodDistribution function input H", () =>{
    const inputArray = [7,1,1,1,1,1]
    const result = foodDistribution(inputArray);
    expect(result).toEqual(0);
})