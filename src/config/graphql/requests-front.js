import {gql} from "@apollo/client";

//HEADER
export const FAV = gql`
    query GetFav($id: String) {
        users(where: {id_eq: $id}) {
            id,
            username
            favorites {
                id,
                book {
                    id,
                    title,
                    author,
                    thumbnail {
                        url
                    }
                }
            }
        }
    }
`;

//HOMEPAGE
export const HOME = gql`
    query GetPosts {
        books(sort: "created_at:desc", limit: 4) {
            title,
            author,
            id,
            thumbnail {
                id,
                url
            }
            categories {
                id,
                name
            }
        }
        articles(sort: "created_at:desc", limit: 3) {
            id,
            title,
            excerpt,
			created_at,
            thumbnail {
                id,
                url,
            }
        }
    }
`;

//SLIDER
export const SLIDER = gql`
    query GetPosts {
        books(sort: "created_at:desc", limit: 6) { title, author, id, thumbnail { id, url } }
    }
`;

// ALLBOOKS
export const BOOKS = gql`
    query GetBooks {
        books {
            title,
            author,
            id,
            thumbnail {
                id,
                url
            },
            categories {
                id,
                name
            }
        }
    }
`;

// ALL BLOG
export const BLOG = gql`
    query GetPosts {
        articles {
            id,
            title,
            content,
            excerpt,
            created_at,
            thumbnail {
                id,
                url
            },
        }
    }
`;

// ALL BLOG
export const SINGLE_BLOG = gql`
    query GetSingleBlog($id: ID!) {
        article(id: $id) {
            title,
            content,
            excerpt,
            created_at,
            thumbnail {
                id,
                url
            },
        }
    }
`;
