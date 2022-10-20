import React, { useMemo } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, useLocation, useNavigate } from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params'
import App from './App'
import './index.css'

const RouteV6Adapter: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const navigate = useNavigate()
  const location = useLocation()

  const adaptedHistory = useMemo(
    () => ({
      // @ts-ignore
      push: ({ search, state }: Location) => navigate({ search }, { state }),
      // @ts-ignore
      replace: ({ search, state }: Location) =>
        navigate({ search }, { replace: true, state }),
    }),
    [navigate]
  )

  // @ts-ignore
  return children({ history: adaptedHistory, location })
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryParamProvider ReactRouterRoute={RouteV6Adapter}>
        <App />
      </QueryParamProvider>
    </BrowserRouter>
  </React.StrictMode>
)
