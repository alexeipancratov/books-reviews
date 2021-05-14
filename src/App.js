import "./App.css";
import BooksList from "./components/BooksList";

import BookDetails from "./components/BookDetails";
import { Switch, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h2 className="text-center">Welcome to Books Reviews</h2>
        <div className="row">
          <div className="col-md">
            <Switch>
              <Route path="/" component={BooksList} exact/>
              <Route path="/books/:id" element={BookDetails} />
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
