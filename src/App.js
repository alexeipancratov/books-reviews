import "./App.css";
import BooksList from "./components/BooksList";
import BookDetails from "./components/BookDetails";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md">
          <Switch>
            <Route path="/" component={BooksList} exact/>
            <Route path="/books/:id" component={BookDetails} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
