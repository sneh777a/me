// ========== RECOMMENDATION FORM FUNCTIONALITY ==========

// Get references to recommendation form elements
const recommendationForm = document.getElementById('recommendation-form');
const recommendationInput = document.getElementById('recommendation-input');
const recommendationButton = document.getElementById('recommendation-button');
const recommendationList = document.getElementById('recommendation-list');

// Add recommendation on button click
recommendationButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent form from submitting

    const recommendationText = recommendationInput.value.trim(); // Get input value

    if (recommendationText !== '') {
        // Create new list item
        const newRecommendation = document.createElement('li');
        newRecommendation.innerHTML = `
            <img src="recommendation-image.jpg" alt="Recommendation Image" style="width: 100px; height: auto; border-radius: 8px;">
            <p>${recommendationText}</p>
        `;
        recommendationList.appendChild(newRecommendation); // Add to the list

        recommendationInput.value = ''; // Clear input field

        alert('Recommendation added successfully!');
    } else {
        alert('Please enter a recommendation!');
    }
});


// ========== SKILL FORM FUNCTIONALITY ==========

// Get references to skill form elements
const skillForm = document.getElementById('skill-form');
const skillInput = document.getElementById('skill-input');
const skillList = document.getElementById('skill-list');

// Add skill on form submit
skillForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page reload

    const inputValue = skillInput.value.trim(); // Get input value

    if (inputValue !== '') {
        const newSkill = document.createElement('li');
        newSkill.textContent = inputValue;

        skillList.appendChild(newSkill); // Add to the list

        skillInput.value = ''; // Clear input
    } else {
        alert('Please enter a skill!');
    }
});
