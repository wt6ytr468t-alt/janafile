function calculateDose() {

    // Get input values
    const age = parseFloat(document.getElementById("age").value);
    const weight = parseFloat(document.getElementById("weight").value);

    // Selected concentration in mg per 5 mL
    const concentration = parseFloat(
        document.getElementById("concentration").value
    );

    const result = document.getElementById("result");

    // Validate inputs
    if (
        !Number.isFinite(age) ||
        !Number.isFinite(weight) ||
        age < 0 ||
        age >= 18 ||
        weight <= 0 ||
        weight > 300
    ) {
        result.classList.remove("hidden");

        result.innerHTML = `
            <h3>Invalid Input</h3>
            <p>Please enter a valid pediatric age and weight.</p>
        `;

        return;
    }

    // DEMONSTRATION ONLY — NOT A CLINICAL DOSING RULE
    const demonstrationFactor = 10;

    // Calculate illustrative amount in mg
    const doseMg = weight * demonstrationFactor;

    // Convert concentration from mg/5mL to mg/mL
    const concentrationMgPerMl = concentration / 5;

    // Convert illustrative amount to mL
    const doseMl = doseMg / concentrationMgPerMl;

    // Display result
    result.classList.remove("hidden");

    result.innerHTML = `
        <h3>Educational Calculation</h3>

        <p><strong>Age:</strong> ${age} years</p>

        <p><strong>Weight:</strong> ${weight} kg</p>

        <p><strong>Concentration:</strong>
        ${concentration} mg / 5 mL</p>

        <hr>

        <p><strong>Illustrative amount:</strong>
        ${doseMg.toFixed(1)} mg</p>

        <p><strong>Equivalent volume:</strong>
        ${doseMl.toFixed(2)} mL</p>

        <p style="font-size:12px; margin-top:10px;">
            Demonstration output only. Not a validated
            or recommended dose for this child.
        </p>
    `;
}
