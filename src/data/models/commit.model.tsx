export type Author = {
    name: string,
    email: string,
    date: string,
}

export type Commit = {
    author: Author,
    message: string,
}

export type GithubCommitInfo = {
    commit: Commit,
}