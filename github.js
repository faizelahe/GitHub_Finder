class github {
    constructor() {
        this.client_id = 'a096a14896b39dd7a1d7';
        this.client_secret = 'f4af8f618c442dfe288ba04e1cfd09cf2b20282f';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async get(user) {
        const profiles = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repos = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profiles.json();
        const repo = await repos.json();

        return {
            profile,
            repo
        }
    }
}