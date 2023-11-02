// Logic to display machine learning algorithms and applications using loops
const mlAlgorithms = ['Supervised Learning', 'Unsupervised Learning', 'Reinforcement Learning'];
const mlApplications = ['Healthcare', 'Finance', 'Marketing', 'Robotics'];

const mlAlgorithmsList = document.getElementById('ml-algorithms');
const mlApplicationsList = document.getElementById('ml-applications');

// Display machine learning algorithms
mlAlgorithms.forEach(algorithm => {
    const li = document.createElement('li');
    li.textContent = algorithm;
    mlAlgorithmsList.appendChild(li);
});

// Display machine learning applications
mlApplications.forEach(application => {
    const li = document.createElement('li');
    li.textContent = application;
    mlApplicationsList.appendChild(li);
});

// Logic for dropdown and slider
const resourceDropdown = document.getElementById('resource-dropdown');
const resourceContent = document.getElementById('resource-content');

// Dropdown functionality
resourceDropdown.addEventListener('change', function() {
    const selectedResource = resourceDropdown.value;
    if (selectedResource === 'resource1') {
        resourceContent.innerHTML = '<p><a href="https://www.coursera.org/learn/machine-learning#syllabus">Coursera — Machine Learning (Andrew Ng)</a></p>';
    } else if (selectedResource === 'resource2') {
        resourceContent.innerHTML = '<p><a href="https://www.coursera.org/learn/neural-networks">Coursera — Neural Networks for Machine Learning (Geoffrey Hinton)</a></p>';
    } else if (selectedResource === 'resource3') {
        resourceContent.innerHTML = '<p><a href="https://classroom.udacity.com/courses/ud120">Udacity — Intro to Machine Learning (Sebastian Thrun)</a></p>';
    } else {
        resourceContent.innerHTML = '';
    }
});

// Simple slider functionality
let slideIndex = 0;
const slides = ['slide1.jpeg', 'slide2.jpeg', 'slide3.jpeg', 'slide4.jpeg']; // Replace with actual image paths
const slider = document.getElementById('slider');

function showSlides() {
    slider.innerHTML = `<img src="${slides[slideIndex]}" style="width:100%">`;
    slideIndex = (slideIndex + 1) % slides.length;
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

showSlides();
