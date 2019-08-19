import { Card, Button } from '@blueprintjs/core';
import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  margin-top: 5px;
`

const CardContent = styled.div`
  display:flex;
  justify-content: space-between;
`

export function ListCharacter(props) {
  return (
    <>
      {props.list.map(item => (
        <CardContainer key={item.name}>
          <Card>
            <CardContent>
              <span>{item.name}</span>
              <Button icon="eye-open" />
            </CardContent>
          </Card>
        </CardContainer>
      ))}
    </>
  )
}