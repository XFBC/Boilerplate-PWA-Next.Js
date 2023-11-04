'use client'
import { District } from '../types'
import { getDistricts } from '../api'
import { useEffect, useState } from 'react'

export default function Districts() {
  const [districts, setDistricts] = useState<District[]>([])
  const [filteredDistricts, setFilteredDistricts] = useState<District[]>([])
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    getDistricts()
      .then((data: District[]) => {
        setDistricts(data)
      })
      .catch((error: Error) => console.error(error))
  }, [])

  const handleSearch = () => {
    const query = searchQuery.trim().toLowerCase()
    if (query === '') {
      setFilteredDistricts([])

      return
    }

    const filtered = districts.filter(district =>
      district.municipio.nome.toLowerCase().includes(query)
    )
    setFilteredDistricts(filtered)
  }

  return (
    <>
      <div className="mt-2">
        <div className="flex flex-row gap-2 items-center">
          <input
            type="text"
            className="input input-bordered w-full max-w-xs bg-transparent"
            placeholder="Insira o nome da cidade"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          <button
            className="group flex flex-row gap-2 items-center px-2 py-1 border border-slate-200 dark:border-slate-200/5 rounded-md"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        <div>
          {/* <p>
            {filteredDistricts.length > 0
              ? `Municipalities found: ${filteredDistricts.length}`
              : ''}
          </p> */}
          <ul>
            {filteredDistricts.map(district => (
              <li key={district.municipio.id}>
                {district.municipio.nome},{' '}
                {district.municipio.microrregiao.mesorregiao.UF.sigla}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
