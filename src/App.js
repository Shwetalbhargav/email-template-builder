import logo from './logo.svg';
import './App.css';
import TemplateEditor from './components/TemplateEditor';
import ControlPanel from './components/ControlPanel';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Email Template Builder</h1>
      <TemplateEditor />
    </div>
  );
}

export default App;
