import { ReactNode, createContext, useState, useMemo, useEffect } from 'react'
import { ApolloError, useLazyQuery } from '@apollo/client'
import { Root } from '../types'
import { CHARACTERS, FIND_CHARACTER } from '../querys'

interface ContextProps {
  children: ReactNode
}

interface ContentData {
  data: Root
  loading: boolean
  error: ApolloError | undefined
  nextPage: () => void
  previousPage: () => void
  setWord: (e: string) => void
  dataFind: Root
  loadingFind: boolean
  errorFind: ApolloError | undefined
  characterFound: Root | undefined
  word: string
}

export const ContextCharacter = createContext({} as ContentData)

export default function Context ({ children }: ContextProps) {
  const [paginationNumber, setPaginationNumber] = useState(1)
  const [getCharacters, { data, loading, error }] = useLazyQuery(CHARACTERS)
  const [findCharacter, { data: dataFind, loading: loadingFind, error: errorFind }] = useLazyQuery(FIND_CHARACTER)
  const [characterFound, setCharacterFound] = useState<Root>()
  const [word, setWord] = useState('')
  // eslint-disable-next-line no-trailing-spaces

  useMemo(() => {
    getCharacters({ variables: { page: paginationNumber } })
  }, [paginationNumber])

  useEffect(() => {
    findCharacter({ variables: { name: word } })
    if (word !== '') {
      if (JSON.stringify(dataFind) !== JSON.stringify(data)) {
        setCharacterFound(dataFind)
      }
    } else {
      setCharacterFound(data)
    }
  }, [word, dataFind])
  useEffect(() => {
    if (data) {
      setCharacterFound(data)
    }
  }, [data])

  const previousPage = () => paginationNumber !== 1 ? setPaginationNumber(paginationNumber - 1) : false
  const nextPage = () => paginationNumber <= 41 ? setPaginationNumber(paginationNumber + 1) : false
  return (
    <ContextCharacter.Provider value={{
      data,
      loading,
      error,
      nextPage,
      previousPage,
      setWord,
      dataFind,
      loadingFind,
      errorFind,
      characterFound,
      word
    }}>
      {children}
    </ContextCharacter.Provider>
  )
}
