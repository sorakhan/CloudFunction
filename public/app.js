document.addEventListener('DOMContentLoaded', function() {
    let app = firebase.app();
    fetch('http://localhost:5001/cloudfunctionl/us-central1/api/cat')
    .then(console.log);
});

// http://localhost:5001/cloudfunctionl/us-central1/api/cat