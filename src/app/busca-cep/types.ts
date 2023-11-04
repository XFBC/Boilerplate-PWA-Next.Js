export type District = {
  id: number
  nome: string
  municipio: {
    id: number
    nome: string
    microrregiao: {
      id: number
      nome: string
      mesorregiao: {
        id: number
        UF: {
          id: number
          sigla: string
          nome: string
        }
      }
    }
  }
}
