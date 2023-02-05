import { parseISO } from "date-fns"

export type AuthorDTO = {
    name: string,
    email: string,
    date: string,
}

export type CommitDTO = {
    author: AuthorDTO,
    message: string,
}

export type CommitInfoDTO = {
    commit: CommitDTO,
}
export type Author= {
    name: string,
    email: string,
    date: Date,
}

export type Commit = {
    author: Author,
    message: string,
}

export type CommitInfo = {
    commit: Commit,
}

export function toCommitInfo(x: CommitInfoDTO): CommitInfo{
    return {
        commit: {
            author: {
                name: x.commit.author.name,
                email: x.commit.author.email,
                date: parseISO(x.commit.author.date),
            },
            message: x.commit.message
        }
    };
};