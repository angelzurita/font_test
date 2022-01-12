
export class Users {

    constructor(
        public login: string,
        public avatar_url: string,
        public followers: number,
        public following: number,
        public public_repos: number,
        public html_url: string,
        public created_at: string,
        public updated_at: string,
        public name: string,
        public bio: string,
        public company: string,
        public blog: string,
        public location: string,
        public email: string,
        public hireable: string,
        public public_gists: number,
        public followers_url: string,
        public following_url: string,
        public starred_url: string,
        public subscriptions_url: string,
        public organizations_url: string,
        public repos_url: string,
        public events_url: string,
        public received_events_url: string,
        public type: string,
        public site_admin: string,
        public score: number
    ) {
        //     this.login = login;
        //     this.avatar_url = avatar_url;
        //     this.followers = followers;
        //     this.following = following;
        //     this.public_repos = public_repos;
        //     this.html_url = html_url;
        //     this.created_at = created_at;
        //     this.updated_at = updated_at;
        //     this.name = name;
        //     this.bio = bio;
        //     this.company = company;
        //     this.blog = blog;
        //     this.location = location;
        //     this.email = email;
        //     this.hireable = hireable;
        //     this.public_gists = public_gists;
        //     this.followers_url = followers_url;
        //     this.following_url = following_url;
        //     this.starred_url = starred_url;
        //     this.subscriptions_url = subscriptions_url;
        //     this.organizations_url = organizations_url;
        //     this.repos_url = repos_url;
        //     this.events_url = events_url;
        //     this.received_events_url = received_events_url;
        //     this.type = type;
        //     this.site_admin = site_admin;
        //     this.score = score;
        // }

        // public static fromJson(json: any): Users {
        //     return new Users(
        //         json.login,
        //         json.avatar_url,
        //         json.followers,
        //         json.following,
        //         json.public_repos,
        //         json.html_url,
        //         json.created_at,
        //         json.updated_at,
        //         json.name,
        //         json.bio,
        //         json.company,
        //         json.blog,
        //         json.location,
        //         json.email,
        //         json.hireable,
        //         json.public_gists,
        //         json.followers_url,
        //         json.following_url,
        //         json.starred_url,
        //         json.subscriptions_url,
        //         json.organizations_url,
        //         json.repos_url,
        //         json.events_url,
        //         json.received_events_url,
        //         json.type,
        //         json.site_admin,
        //         json.score
        //     );
        // }
    }
}