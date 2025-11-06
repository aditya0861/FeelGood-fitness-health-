document.getElementById('moodForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevents form from submitting normally
    
    // Get the selected mood
    const selectedMood = document.getElementById('mood').value;
    
    // Define the redirect page based on the mood selected
    let moodPage = '';
    
    switch(selectedMood) {
        case 'happy':
            moodPage = 'happy.html';
            break;
        case 'stressed':
            moodPage = 'stressed.html';
            break;
        case 'tired':
            moodPage = 'tired.html';
            break;
        case 'sad':
            moodPage = 'sad.html';
            break;
        case 'anxious':
            moodPage = 'anxious.html';
            break;
        case 'excited':
            moodPage = 'excited.html';
            break;
        default:
            moodPage = ''; // If no mood is selected
    }
    
    // If mood is selected, redirect to the respective page
    if (moodPage !== '') {
        window.location.href = moodPage;
    } else {
        alert('Please select a mood');
    }
});
