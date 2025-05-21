var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java'];

function render(courses) {
    var ulElement = document.querySelector('.courses-list');
    
    var html = courses.map(function(course){
        return `<li>${course}</li>`;
    }).join('');
    
    ulElement.innerHTML = html;
}

// Xuất hiện trên website, hoặc kiểm tra ở Console trong trình duyệt
render(courses);
