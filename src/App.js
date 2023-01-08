import "./App.css";
import { AppRouter } from "./components/Router";

function App() {
  return (
    <div className="container mt-4">
      <h1 className="display-4 text-center">JWT Authentication</h1>;
      <AppRouter />
    </div>
  );
}

export default App;
