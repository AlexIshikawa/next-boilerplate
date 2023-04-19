import * as S from './styles'

const Main = ({
  title = 'React Avançado',
  description = 'Typescript, ReactJS, NextJs e Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo src="/img/logo.svg" alt="Logo React Avancado" />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="desenvolvedor de frente para uma tela com codigo"
    />
  </S.Wrapper>
)

export default Main
