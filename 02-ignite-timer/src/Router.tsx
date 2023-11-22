import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { History } from './pages/History/History'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        {/* Para que seja aplicado em todas as rotas(paginas) */}
        <Route path="/" element={<Home />} />
        {/* path = é para escolher qual o caminho para aquela rota(pagina), elemento = para onde aquele caminho digitado ira dar */}
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}
