import './App.css';
import ForceGraph3D from 'react-force-graph-3d';
import SampleData from './data/data';

function App() {
  const myData = SampleData;
  const GROUPS = 12;


  return (
    <div className="App">
      <header className="App-header">
        <div>
          Test
        </div>
        <div>
        <ForceGraph3D
          graphData={myData}
          nodeAutoColorBy={d => d.id%GROUPS}
          nodeLabel="id"
          linkWidth={2}
          onNodeClick={(node) => {
            console.log(node);
          }}
        />
        </div>
      </header>
    </div>
  );
}

export default App;
