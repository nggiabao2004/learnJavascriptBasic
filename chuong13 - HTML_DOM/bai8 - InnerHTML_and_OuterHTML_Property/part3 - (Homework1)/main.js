function render(html) {
    var ulElement = document.getElementById('course-list');
    ulElement.innerHTML = html;
}

// Xuất hiện trên website, hoặc kiểm tra ở Console trong trình duyệt
render(`
    <li>Khóa học HTML</li>
    <li>Khóa học JS</li>
    <li>Khóa học PHP</li>
`);
