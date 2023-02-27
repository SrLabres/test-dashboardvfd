import { Indicator } from "./components/indicator";
import React from 'react'
import { PieChart } from "./components/pieChart";
import BarChart from "./components/barChart";

const componentMap = {
  "indicator": Indicator,
  "pieChart": PieChart,
  "barChart": BarChart
  // Adicionar outros tipos de componentes aqui
}

export function ComponentSelector(props) {
  const { type} = props.props;
  const Component = componentMap[type] || null;
  return Component ? <Component {...props.props} /> : null;
}