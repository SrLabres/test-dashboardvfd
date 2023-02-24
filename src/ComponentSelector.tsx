import { Indicator } from "./indicator";
import React from 'react'

const componentMap = {
  "indicator": Indicator,
  // Adicionar outros tipos de componentes aqui
}

export function ComponentSelector(props) {
  const { type} = props.props;
  const Component = componentMap[type] || null;
  return Component ? <Component {...props.props} /> : null;
}