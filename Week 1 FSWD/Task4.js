function minMaxSalary(salaries) {
    if (salaries.length === 0) {
    return [null, null]; // Return [null, null] if the array is empty
    }
    let minSalary = maxSalary = salaries[0]; // Initialize minSalary and maxSalary
    with the first element
    
    for (let i = 1; i < salaries.length; i++) {
    if (salaries[i] < minSalary) {
    minSalary = salaries[i];
    } else if (salaries[i] > maxSalary) {
    maxSalary = salaries[i];
    }
    }
    return [minSalary, maxSalary];
    }
    const salaries = [50000, 60000, 45000, 70000, 55000]; const [minimum,
    maximum] = minMaxSalary(salaries); console.log("Minimum salary:", minimum);
    console.log("Maximum salary:", maximum);