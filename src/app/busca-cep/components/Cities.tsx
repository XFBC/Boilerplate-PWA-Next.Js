import React, { useState, useEffect } from 'react'
import { fetchMunicipiosPorEstado } from '../api'

export default function Cities() {
  const [uf, setUf] = useState<string>('')
  const [municipios, setMunicipios] = useState<string[]>([])

  const estados = [
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MT',
    'MS',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO'
  ]

  useEffect(() => {
    if (uf) {
      fetchMunicipiosPorEstado(uf)
        .then(municipiosData => {
          setMunicipios(municipiosData)
        })
        .catch(error => {
          console.error('Error fetching data:', error)
        })
    } else {
      setMunicipios([])
    }
  }, [uf])
  return (
    <>
      <label className="mr-4">Selecione um estado (UF):</label>
      <select
        className="select input-bordered w-full max-w-xs bg-transparent"
        onChange={e => setUf(e.target.value)}
      >
        <option className="bg-zinc-700" value="">
          Selecione um estado
        </option>
        {estados.map(estado => (
          <option className="bg-zinc-700" key={estado} value={estado}>
            {estado}
          </option>
        ))}
      </select>

      {municipios.length > 0 && (
        <div>
          <p>Total de Municípios: {municipios.length}</p>
          <ul>
            {municipios.map((municipio, index) => (
              <li key={index}>{municipio}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}
