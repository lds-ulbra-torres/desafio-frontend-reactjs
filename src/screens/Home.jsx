import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import * as service from '../api/starwars';
import { ListCharacter } from '../components/ListCharacter';
import { Button, ButtonGroup, Spinner } from '@blueprintjs/core';
import { EmptyCharacterList } from '../components/EmptyCharacterList';
import { DialogCharacter } from '../components/DialogCharacter';
import { AppToaster } from '../components/Toaster';

const Container = styled.div`
  max-width: 960px;
  margin: 10px auto 0 auto;
  padding: 5px;
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
  const [canBack, setCanBack] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const [character, setCharacter] = useState({});
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    getPage(currentPage);
  }, [currentPage])

  function getPage(page = 1) {
    setLoadingList(true)
    service.getPeople(page).then(data => {
      setCanNext(!!data.next)
      setCanBack(!!data.back)
      setList(data.results);
    })
      .catch((err) => {
        setCanNext(false);
        setCanBack(false);
        setList([]);
        AppToaster.show({
          intent: "danger",
          message: 'Houve algum problema ao pegar a listagem de personagens'
        });
      })
      .finally(() => setLoadingList(false))
  }

  function mountList(list, canBack, canNext) {
    return (
      <>
        {list.length === 0
          ? <EmptyCharacterList refresh={getPage.bind(this, currentPage)} />
          : <>
            <ListCharacter list={list} open={openDialog.bind(this)} />
            <PaginationContainer>
              <ButtonGroup>
                <Button disabled={!canBack} icon="arrow-left" onClick={() => setCurrentPage(currentPage - 1)}>Anterior</Button>
                <Button disabled={!canNext} icon="arrow-right" onClick={() => setCurrentPage(currentPage + 1)}>Próximo</Button>
              </ButtonGroup>
            </PaginationContainer>
          </>
        }
      </>
    )
  }

  function mountLoading() {
    return (
      <Spinner />
    )
  }

  function openDialog(url) {
    const [, id] = url.match(/\/(\d+)\//)
    setLoadingList(true);
    service.getPersonById(id).then(data => {
      setCharacter(data);
      setOpenModal(true);
    })
      .catch(() => {
        AppToaster.show({
          intent: "danger",
          message: 'Houve algum problema ao pegar as informações desse personagem'
        });
      })
      .finally(() => {
        setLoadingList(false);
      })
  }

  return (
    <>
      <DialogCharacter character={character} open={openModal} onClose={() => setOpenModal(false)} />
      <Container>
        {loadingList ? mountLoading() : mountList(list, canBack, canNext)}
      </Container>
    </>
  )
}