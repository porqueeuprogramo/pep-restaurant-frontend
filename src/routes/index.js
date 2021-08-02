import { Switch, Route } from "react-router-dom";
import RestaurantEdit from "../pages/RestaurantEdit";
import RestaurantAdd from "../pages/RestaurantAdd";
import RestaurantList from "../pages/RestaurantList";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={RestaurantList} />
      <Route path="/add-restaurant" component={RestaurantAdd} />
      <Route path="/edit-restaurant/:id" component={RestaurantEdit} />
    </Switch>
  );
}

export default Routes;
