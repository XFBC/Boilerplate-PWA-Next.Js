// api.ts
import axios from 'axios'
import { District } from './types'


export async function getDistricts() {
  try {
    const response = await axios.get(
      'https://servicodados.ibge.gov.br/api/v1/localidades/distritos'
    )
    const data: District[] = response.data
    // console.log(data)
    return data
  } catch (error) {
    throw new Error('Erro ao buscar os distritos')
  }
}

export const fetchMunicipiosPorEstado = async (uf: string) => {
  try {
    const response = await axios.get(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`
    )
    return response.data.map((municipio: any) => municipio.nome)
  } catch (error) {
    throw error
  }
}
