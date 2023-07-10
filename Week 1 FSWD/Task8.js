function checkPositiveNumber(number) {
    if (number < 0) {
    throw new Error("Number must be positive.");
    }
    return number;
    }
    try {
    const inputNumber = -5; const result =
    checkPositiveNumber(inputNumber);
    console.log("Result:", result);
    } catch (error) { console.error("Error:",
    error.message);
    }