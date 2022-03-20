class UI {

  async showProfile(profile, repos) {
    let profileOutput = '';
    let repoOutput = '';
    console.log(profile)

    document.querySelector('.err').style.display = 'none';

    profileOutput += `
        <div class="card card-body mb-3">
          <div class="row">
              <div class="col-md-3">
                <img src="${profile.avatar_url}" class="card-img" />
                <a href="${profile.html_url}" class="btn btn-primary btn-block rounded-pill">View Profile</a>
              </div>  
                  <div class="col-md-9">
                    <span class="p-2 badge badge-primary">Public Repos: ${profile.public_repos}</span>
                    <span class="p-2 badge badge-secondary">Public Gists: ${profile.public_gists}</span>
                    <span class="p-2 badge badge-success">Followers : ${profile.followers}</span>
                    <span class="p-2 badge badge-info mb-4">Following: ${profile.following}</span>
                    <ul class="list-group">
                      <li class="list-group-item">Company: ${profile.company}</li>
                      <li class="list-group-item">Website: ${profile.blog}</li>
                      <li class="list-group-item">Location: ${profile.location}</li>
                      <li class="list-group-item">Member Since: ${profile.created_at}</li>
                    </ul>
                  </div>   
              </div>
        </div>

        <h2>Latest Repos</h2>
    `;

    repos.forEach(repo => {
      repoOutput += `
      <div class="card card-body mb-2">
      <div class="row">
        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
        <div class="d-flex flex-align-right">
            <span class="badge p-2 mx-1 badge-primary">Stars: ${repo.stargazers_count}</span>
            <span class="badge p-2 mx-1 badge-secondary">Watchers: ${repo.watchers_count}</span>
            <span class="badge p-2 mx-1 badge-success">Forks: ${repo.forks}</span>
        </div>
      </div>
      </div>
      `
      document.getElementById("profile").innerHTML = profileOutput;
      document.getElementById("repos").innerHTML = repoOutput;
    })
  }

  async hideProfile() {
    document.querySelector('#profile').innerHTML = '';
    document.querySelector('#repos').innerHTML = '';
  }
}
