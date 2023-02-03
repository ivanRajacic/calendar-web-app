export type Author = {
    name: string,
    email: string,
    date: string,
}

export type Commit = {
    author: Author,
    message: string,
}

export type GitCommitInfo = {
    commit: Commit,
}