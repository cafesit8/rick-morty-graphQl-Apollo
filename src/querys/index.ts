import { gql } from '@apollo/client'

export const CHARACTERS = gql`
  query getCharacters($page: Int) {
    characters(page: $page) {
      results {
        id
        name
        image
      }
    }
  }
`

export const CHARACTER_SELECTED = gql`
  query getCharacter($id: ID!) {
    character(id: $id) {
      name
      status
      species
      gender
      image
      location {
        name
        dimension
        created
      }
      origin {
        name
        type
        dimension
        created
        residents {
          name
          image
        }
      }
    }
  }
`
export const FIND_CHARACTER = gql`
  query findCharacter($name: String!) {
    characters(filter: {name: $name}) {
      results {
        id
        name
        image
      }
    }
  }
`
