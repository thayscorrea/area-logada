import { Link } from 'react-router-dom'

import { Container } from '../../components/Container'
import { Button } from "../../components/Button"
import { FormGroup } from "../../components/FormGroup"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Label } from '../../components/Label'
import { UploadFile } from "../../components/UploadFile"

import * as S from './SendDocuments.styles'

export function SendDocuments(){
  return (
    <S.Wrapper>
      <Header />

      <Container maxWidth={800}>
        <S.Title>Seus dados</S.Title>
        <S.Description>
          Valide seus dados para agilizar em futuras compras.
        </S.Description>

        <S.Tabs defaultValue="Pessoais">
          <S.TabsList>
            <S.TabsTrigger value="Pessoais">Pessoais</S.TabsTrigger>
            <S.TabsTrigger value="Finance">Finance</S.TabsTrigger>
            <S.TabsTrigger value="Telco">Telco</S.TabsTrigger>
            <S.TabsTrigger value="Health">Health</S.TabsTrigger>
          </S.TabsList>
          <S.TabsContent value="Pessoais">
            <S.Form>
              <FormGroup>
                <Label>Nome</Label>
                <Input type="text" name="name" placeholder='John Doe' />
              </FormGroup>

              <FormGroup>
                <Label>E-mail</Label>
                <Input type="email" name="email" placeholder='contato@johndoe.com.br' />
              </FormGroup>

              <FormGroup>
                <Label>Telefone Celular</Label>
                <Input type="text" name="file" placeholder="(11) 99999-9999" />
              </FormGroup>

              <FormGroup>
                <UploadFile label="Frente do RG" />
              </FormGroup>

              <FormGroup>
                <UploadFile label="Verso do RG" />
              </FormGroup>

              <Link to="/listar-documentos">
                <Button type="submit">Enviar</Button>
              </Link>
            </S.Form>
          </S.TabsContent>
          <S.TabsContent value="Finance">
            <S.Form>
              <FormGroup>
                <UploadFile label="Documento" />
              </FormGroup>

              <FormGroup>
                <UploadFile label="Documento" />
              </FormGroup>

              <Link to="/listar-documentos">
                <Button type="submit">Enviar</Button>
              </Link>
            </S.Form>
          </S.TabsContent>
          <S.TabsContent value="Telco">
            <S.Form>
              <FormGroup>
                <UploadFile label="Documento" />
              </FormGroup>

              <Link to="/listar-documentos">
                <Button type="submit">Enviar</Button>
              </Link>
            </S.Form>
          </S.TabsContent>
          <S.TabsContent value="Health">
            <S.Form>
              <FormGroup>
                <UploadFile label="Documento" />
              </FormGroup>

              <Link to="/listar-documentos">
                <Button type="submit">Enviar</Button>
              </Link>
            </S.Form>
          </S.TabsContent>
        </S.Tabs>
      </Container>
    </S.Wrapper>
  )
}
