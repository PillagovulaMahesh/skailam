document.getElementById('createNewProject').addEventListener('click', function() {
    document.querySelector('.modal').classList.remove('hidden');
});

document.getElementById('cancel').addEventListener('click', function() {
    document.querySelector('.modal').classList.add('hidden');
    document.getElementById('projectName').value = '';
    document.getElementById('error-message').classList.add('hidden');
});

document.getElementById('create').addEventListener('click', function() {
    const projectName = document.getElementById('projectName').value;
    if (projectName.trim() === '') {
        document.getElementById('error-message').classList.remove('hidden');
    } else {
        // Add project to the project list
        const projectList = document.querySelector('.project-list');
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectCard.innerHTML = `<div class="project-name">${projectName}</div>`;
        projectList.appendChild(projectCard);

        document.querySelector('.modal').classList.add('hidden');
        document.getElementById('projectName').value = '';
        document.getElementById('error-message').classList.add('hidden');

        // Switch to the projects section
        document.querySelector('.new-project').classList.add('hidden');
        document.querySelector('.projects').classList.remove('hidden');
    }
});
