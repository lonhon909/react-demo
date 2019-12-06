import React, { useContext } from 'react';
import { TitleContext } from './App';

export default function Child() {
  return (
    <Uit />
  )
}

function Uit() {
  // const { title } = useContext(TitleContext);
  
  return (
    <TitleContext.Consumer>
      {
        ({ title: name }) => (
          <div>
            {name}
          </div>
        )
      }
    </TitleContext.Consumer>
  )
}