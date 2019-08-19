import { Dialog, Classes } from '@blueprintjs/core';
import React from 'react';
import styled from 'styled-components';
import { size } from '../utils/devices.js';

const Row = styled.div`
  display: flex;
  margin-top: 10px;

  @media screen and (max-width: ${size.mobileL}){
    flex-direction: column;
  }
`;

const Column = styled.div`
  flex: ${props => props.col || 1};
`

export function DialogCharacter({ character, open, onClose }) {
  return (
    <Dialog
      icon="user"
      isOpen={open}
      canEscapeKeyClose={true}
      onClose={() => onClose()}
      canOutsideClickClose={true}
      title={character.name || 'Sem nome'}
    >
      <div className={Classes.DIALOG_BODY}>
        <Row>
          <Column col={6}>
            <b>Nome</b>
            <p>{character.name}</p>
          </Column>
          <Column col={6}>
            <b>Altura</b>
            <p>{character.height}</p>
          </Column>
        </Row>
        <Row>
          <Column col={4}>
            <b>Peso</b>
            <p>{character.mass}</p>
          </Column>
          <Column col={4}>
            <b>Cor do Cabelo</b>
            <p>{character.hair_color}</p>
          </Column>
          <Column col={4}>
            <b>Cor da Pele</b>
            <p>{character.skin_color}</p>
          </Column>
        </Row>
        <Row>
          <Column col={6}>
            <b>Data de Nascimento</b>
            <p>{character.birth_year}</p>
          </Column>
          <Column col={6}>
            <b>Gênero</b>
            <p>{character.gender}</p>
          </Column>
        </Row>
        <Row>
          <Column col={6}>
            <b>Criado em</b>
            <p>{character.created}</p>
          </Column>
          <Column col={6}>
            <b>Editado em</b>
            <p>{character.edited}</p>
          </Column>
        </Row>
      </div>
    </Dialog >
  )
}