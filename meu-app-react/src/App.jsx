import { useEffect, useState } from 'react'
import { supabase } from './supabaseClient'

function App() {
  const [dados, setDados] = useState([])

  useEffect(() => {
    async function buscar() {
      const { data, error } = await supabase.from('processos').select('*')
      if (error) console.error('Erro:', error)
      else setDados(data)
    }

    buscar()
  }, [])

  return (
    <div>
      <h1>Dados do Supabase</h1>
      <ul>
        {dados.map((item, i) => (
          <li key={i}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
