document.getElementById('citButton').addEventListener('click', function () {
    loadStudents('CIT');
});

document.getElementById('busButton').addEventListener('click', function () {
    loadStudents('BUS');
});

function loadStudents(major) {
    fetch('cit5students.json')
        .then(response => response.json())
        .then(data => {
            const filteredStudents = data.filter(student => student.major === major);
            renderStudents(filteredStudents);
        });
}

function renderStudents(students) {
    fetch('students-template.hbs')
        .then(response => response.text())
        .then(template => {
            const compiledTemplate = Handlebars.compile(template);
            const html = compiledTemplate({ students });
            document.getElementById('studentTable').innerHTML = html;
        });
}
