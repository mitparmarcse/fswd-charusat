function calculateOperations(num1, num2) {
    var sum = num1 + num2; var difference =
    num1 - num2; var product = num1 * num2;
    var quotient = num1 / num2;
    return {
    sum: sum,
    difference: difference,
    product: product,
    quotient: quotient
    };
    }
// Example usage var n1 = 10; var n2 =
375.2; var result =
calculateOperations(n1, n2);
console.log("Sum:", result.sum);
console.log("Difference:",
result.difference);
console.log("Product:", result.product);
console.log("Quotient:",
result.quotient);
