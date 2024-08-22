function processForm(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const preferredCandidate = document.getElementById('poll1').value;
    const candidateRating = document.getElementById('poll2').value;
    const importantIssues = document.getElementById('poll3').value;
    const state = document.getElementById('poll4').value;
    const additionalComments = document.getElementById('poll5').value;

    // Create summary HTML
    const summaryHTML = `
        <h1>Summary</h1>
        <div class="summary">
            <h2>Your Responses</h2>
            <p><strong>Preferred Candidate:</strong> ${preferredCandidate}</p>
            <p><strong>Candidate Rating:</strong> ${candidateRating}</p>
            <p><strong>Important Issues:</strong> ${importantIssues}</p>
            <p><strong>State:</strong> ${state}</p>
            <p><strong>Additional Comments:</strong> ${additionalComments}</p>
        </div>
    `;

    // Display summary HTML
    document.body.innerHTML = summaryHTML;

    return false; // Prevent the default form submission
}
