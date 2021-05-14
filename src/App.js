import "./App.css";
import BooksList from "./components/BooksList";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md">
          <Switch>
            <Route path="/" component={BooksList} />
            <Route path="/books/:id" element={<h1>Book Details</h1>} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
