import "./App.css";
import BooksList from "./components/BooksList";
<<<<<<< HEAD
=======

>>>>>>> 71fb07e85f34a54d11789b57dbaebef61095909c
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
<<<<<<< HEAD
              <Route path="/books/:id" component={BookDetails} />
=======
              <Route path="/books/:id" element={BookDetails} />
>>>>>>> 71fb07e85f34a54d11789b57dbaebef61095909c
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
