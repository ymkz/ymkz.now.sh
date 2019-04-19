import React from 'react'
import { withRouter, WithRouterProps } from 'next/router'
import styled from '@emotion/styled'
import breakpoints from 'constants/breakpoints'
import Row from 'components/abstracts/row'
import NavLink from 'components/elements/nav-link'
import LogoIcon from 'components/elements/logo-icon'

const Container = styled.header`
  align-items: center;
  background-color: var(--base-background);
  display: flex;
  height: 64px;
  justify-content: space-between;
  padding: 0 48px;
  position: sticky;
  left: 0;
  top: 0;
  width: 100%;
  @media ${breakpoints.mobile} {
    padding: 0 16px;
  }
`

function Header({ router }: WithRouterProps) {
  return (
    <Container>
      <Row space={8}>
        <LogoIcon />
        <NavLink href="/" pathname={router && router.pathname}>
          ymkz
        </NavLink>
      </Row>
      <Row space={16}>
        <NavLink href="/about" pathname={router && router.pathname}>
          about
        </NavLink>
        <NavLink href="/work" pathname={router && router.pathname}>
          work
        </NavLink>
      </Row>
    </Container>
  )
}

export default withRouter(Header)
