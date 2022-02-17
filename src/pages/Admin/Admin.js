import { useEffect, useState } from 'react'

import { api } from '../../services/api'

import { Button } from '../../components/Button'
import { Documents } from '../../components/Documents'
import { FormGroup } from '../../components/FormGroup'
import { Input } from '../../components/Input'
import { Select } from '../../components/Select'

import * as S from './Admin.styles'

export function Admin(){
  const [documents, setDocuments] = useState([])

  useEffect(() => {
    (async () => {
      const response = await api.get('/documents')

      setDocuments(response.data)
    })()
  }, [])

  return (
    <S.Wrapper>
      <Documents data={documents} />

      <S.Form>
        <FormGroup>
          <Input name="" id="" placeholder="Nome" />
        </FormGroup>

        <FormGroup>
          <Select>
            <option value="">Todos</option>
          </Select>
        </FormGroup>

        <Button type="submit">Cadastrar</Button>
      </S.Form>
    </S.Wrapper>
  )
}
