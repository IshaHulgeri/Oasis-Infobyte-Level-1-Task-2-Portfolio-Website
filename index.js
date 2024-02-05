document.getElementById('downloadResume').addEventListener('click', function() {
    var link = document.createElement('a');
    link.href = 'Isha Hullgeri Resume (without details).pdf';  
    link.download = 'Your_Name_Resume.pdf';  
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});