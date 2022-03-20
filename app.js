const git = new github;
const ui = new UI;

const user = document.getElementById('searchUser');

user.addEventListener('keyup', (e) => {
    const input = e.target.value;

    if (input !== '') {
        git.get(input).then(data => {
            if (data.profile.message == 'Not Found') {
                document.querySelector('.err').style.display = 'block'
            } else {
                ui.showProfile(data.profile, data.repo);
            }
        })
    } else {
        ui.hideProfile();
    }
})