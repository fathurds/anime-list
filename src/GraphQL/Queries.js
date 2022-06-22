import { gql } from "@apollo/client";

export const TOP_AIRING_ANIME = gql`
    query {
      Page (perPage: 10, page: 1) {
        pageInfo {
          total
          currentPage
          lastPage
          hasNextPage
          perPage
        }
        media(type: ANIME, sort: SCORE_DESC, isAdult: false, status: RELEASING) {
          id
          title {
            userPreferred
            romaji
            english
          }
            genres
            averageScore
            episodes
          coverImage {
            extraLarge
            large
            medium
            color
          }
        }
      }
    }
  `;

export const ANIME_DETAIL = (id) => {
    return gql`
        query {
        Media(type: ANIME, id: ${id}) {
            id
            title {
            userPreferred
            romaji
            english
            }
            genres
            averageScore
            studios {
            nodes {
                name
                isAnimationStudio
            }
            }
            episodes
            duration
            status
            format
            startDate {
            year
            month
            day
            }
            endDate {
            year
            month
            day
            }
            description
            coverImage {
              large
            }
            bannerImage
            characters (sort: ID role: MAIN, perPage: 6) {
            edges {
                voiceActors (language: JAPANESE) {
                name {
                    full
                }
                image {
                    medium
                }
                }
                node {
                name {
                    full
                }
                image {
                    medium
                }
                }
            }
            }
        }
    }
    `;
}