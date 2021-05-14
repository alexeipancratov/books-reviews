import "./App.css";
import BooksList from "./components/BooksList";
import { Switch, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h2 className="text-center">Welcome to Books Reviews</h2>
        <div className="row">
          <div className="col-md">
            <Switch>
              <Route path="/" component={BooksList} />
              <Route path="/books/:id" element={<h1>Book Details</h1>} />
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
