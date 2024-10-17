function add(numbers) {
    if (numbers === "") {
        return 0;
    }

    let delimiter = ",";

    if (numbers.startsWith("//")) {
        let parts = numbers.split("\n", 2);
        delimiter = parts[0].substring(2);
        numbers = parts[1];
    }

    numbers = numbers.replace(/\n/g, delimiter);
    let numList = numbers.split(delimiter).map(Number);

    // Check for negative numbers
    let negatives = numList.filter(num => num < 0);
    if (negatives.length > 0) {
        throw new Error("negative numbers not allowed: " + negatives.join(","));
    }

    return numList.reduce((sum, num) => sum + num, 0);
}
console.log(add(""));           
console.log(add("1"));          
console.log(add("1,5"));        
console.log(add("1\n2,3"));     
console.log(add("//;\n1;2"));   