import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import logo from '../logo.svg';
import * as service from '../api/starwars';
import { ListCharacter } from '../components/ListCharacter';
import { Button, ButtonGroup, Spinner } from '@blueprintjs/core';


const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

const PaginationContainer = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`

export function Home() {
  const [list, setList] = useState([]);
  const [loadingList, setLoadingList] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getPage(currentPage);
  }, [currentPage])

  function getPage(page = 1) {
    setLoadingList(true)
    service.getPeople(page).then(data => {
      setList(data.results);
    }).finally(() => setLoadingList(false))
  }

  function mountList(list) {
    return (
      <>
        <ListCharacter list={list} />
        <PaginationContainer>
          <ButtonGroup>
            <Button icon="arrow-left" onClick={()=>setCurrentPage(currentPage - 1)}>Anterior</Button>
            <Button icon="arrow-right" onClick={()=>setCurrentPage(currentPage + 1)}>Próximo</Button>
          </ButtonGroup>
        </PaginationContainer>
      </>
    )
  }

  function mountLoading() {
    return (
      <Spinner/>
    )
  }

  return (
    <>
      <Container>
        {loadingList ? mountLoading() : mountList(list)}
      </Container>
    </>
  )
}