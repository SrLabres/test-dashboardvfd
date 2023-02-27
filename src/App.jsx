import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Dashboard from '../dashboard.json';

import { ComponentSelector } from './ComponentSelector';
import { Responsive, WidthProvider } from "react-grid-layout";
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import GridItem from './components/gridItem';


const ResponsiveGridLayout = WidthProvider(Responsive);

function App() {
  function loadDashboardData() {
    const storageData = localStorage.getItem('dashboardData');
    if (storageData) {
      return JSON.parse(storageData);
    } else {
      // Carrega o estado inicial do dashboard a partir do arquivo JSON
      return Dashboard
    }
  }
  
  // Define o estado inicial do dashboard com os componentes
  const [dashboardData, setDashboardData] = useState(loadDashboardData);
  const { components } = dashboardData;

  // Define uma função para atualizar a posição dos componentes no dashboard
  function updateComponentLayout(id, layout) {
    // Atualiza o estado do dashboard
    setDashboardData(prevData => {
      // Cria uma cópia do objeto do dashboard
      const newData = { ...prevData };
      // Encontra o componente com o ID correspondente
      const index = parseInt(id) - 1;
      const component = newData.components.find((_, i) => i === index);
      if (component) {
        // Atualiza a posição do componente
        component.gridPosition = layout;
        // Atualiza a posição do componente no array
        newData.components[index] = component;
      }
      // Salva o novo estado do dashboard no armazenamento local
      localStorage.setItem('dashboardData', JSON.stringify(newData));
      // Retorna o novo estado do dashboard
      return newData;
    });
    // Imprime o estado atual do dashboard no console (para fins de depuração)
    console.log(dashboardData)
  }

 
  // Cria um array com os layouts dos componentes no dashboard
  const layout = components.map((component, index) => (component.gridPosition));

  // Renderiza o componente do dashboard com os componentes organizados em um grid
  return (
    <div className="App">
      <ResponsiveGridLayout
        className="layout"
        layouts={layout}
        breakpoints={dashboardData.layout.breakpoints}
        cols={dashboardData.layout.cols}
        onDragStop={(layout) => {
          // Atualiza a posição de cada componente no dashboard quando o layout é alterado
          layout.forEach((item) => {
            updateComponentLayout(item.i, {
              x: item.x,
              y: item.y,
              w: item.w,
              h: item.h,
            });
          });
        }}
        onResizeStop={(layout) => {
          // Atualiza a posição de cada componente no dashboard quando o layout é alterado
          layout.forEach((item) => {
            updateComponentLayout(item.i, {
              x: item.x,
              y: item.y,
              w: item.w,
              h: item.h,
            });
          });
        }}
      >
        {/* Renderiza cada componente do dashboard como um card */}
        {components.map((component, index) => (
          <div key={component.id} data-grid={layout[index]}>
                {/* Renderiza o componente selecionado dentro do card */}
                <GridItem>
                  <ComponentSelector props={component} />
                </GridItem>
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
}

export default App;