// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBs5HAeKd4BJVe73HNuAUgbMXZsywXlvMk",
  authDomain: "save-feedback.firebaseapp.com",
  databaseURL: "https://save-feedback-default-rtdb.firebaseio.com",
  projectId: "save-feedback",
  storageBucket: "save-feedback.appspot.com",
  messagingSenderId: "892913337670",
  appId: "1:892913337670:web:555b299ff99f7bd79b5147",
  measurementId: "G-6REBBM5ZE6"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Reference to your Firebase database
const database = firebase.database();
const feedbackRef = database.ref("feedback");

function submitFeedback() {
    const name = document.getElementById('name').value;
    const feedback = document.getElementById('feedback').value;

    saveFeedback(name, feedback);

    // Clear form fields
    document.getElementById('name').value = '';
    document.getElementById('feedback').value = '';

    // Show success message or perform other actions
    alert("Feedback submitted successfully!");
}

function saveFeedback(name, feedback) {
    feedbackRef.push({
        name: name,
        feedback: feedback
    });
}

function showFeedbackModal() {
    const modal = document.getElementById('feedbackModal');
    modal.style.display = 'block';
    // Trigger animation for input fields
    document.getElementById('name').style.transform = 'translateX(0)';
    document.getElementById('feedback').style.transform = 'translateX(0)';
}

// Call the showFeedbackModal function when the page loads
window.onload = showFeedbackModal;
