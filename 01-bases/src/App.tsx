import { AuthProvider } from './context/AuthContext';
import { BasicTypes } from './typescript/BasicTypes';
import { ObjectsLiterals } from './typescript/ObjectLiterals';
import { BasicFunctions } from './typescript/BasicFunctions';
import { Counter } from './typescript/Counter';
import { ContextDisplay } from './typescript/ContextDisplay';
import './App.css';



function App() {
  return (
    <AuthProvider>
      <h1>React + Typescript</h1>
      <BasicTypes />
      <ObjectsLiterals />
      <BasicFunctions />
      <Counter />
      <ContextDisplay />
    </AuthProvider>
  );
}

export default App;
