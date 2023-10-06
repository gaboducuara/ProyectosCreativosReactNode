import { AuthProvider } from './auth/index'
import { AppRouter } from "./router/AppRouter"

export const HeroesApp = () => {
  return (
    <AuthProvider>

        <AppRouter />

    </AuthProvider>
  )
}
