import React, { FC, useState } from 'react'

interface ITubavContext {
  avatarDataURL: string
  setAvatarDataURL: (dataURL: string) => void
}

const defaultState: ITubavContext = {
  avatarDataURL: '',
  setAvatarDataURL: () => {},
}

/**
 * Context of the TUBav app.
 */
export const TubavContext = React.createContext<ITubavContext>(defaultState)

type TubavContextProviderProps = { children?: React.ReactNode }

/**
 * Provides the context of the TUBav app.
 */
export const TubavContextProvider: FC<TubavContextProviderProps> = ({
  children,
}) => {
  const [avatarDataURL, setAvatarDataURL] = useState<string>('')

  return (
    <TubavContext.Provider value={{ avatarDataURL, setAvatarDataURL }}>
      {children}
    </TubavContext.Provider>
  )
}
