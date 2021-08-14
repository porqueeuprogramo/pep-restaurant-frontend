import { Link, useHistory } from "react-router-dom";
import { FiEdit, FiTrash, FiCopy } from "react-icons/fi";
import { useRestaurants } from "hooks/useRestaurants";
import styles from "./styles.module.scss";
import {v4 as uuid} from 'uuid';

export function RestaurantList() {
  const history = useHistory();
  const { restaurants, deleteRestaurant, duplicateRestaurant } = useRestaurants();

  function handleEditRestaurant(id: string) {
    history.push(`/edit-restaurant/${id}`);
  }

  function handleDeleteRestaurant(id: string) {
    deleteRestaurant(id);
  }

  if (restaurants.length === 0) {
    return (
      <section className={styles.container}>
        <Link to="/add-restaurant" className={styles.addRestaurant}>
          Add Restaurant
        </Link>
        <p>There are no restaurants in the database.</p>
      </section>
    );
  }

  return (
    <section className={styles.container}>
      <Link to="/add-restaurant" className={styles.addRestaurant}>
        Add Restaurant
      </Link>
      <table className={styles.restaurants}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Capacity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {restaurants.map((restaurant) => (
            <tr key={restaurant.id}>
              <td>{restaurant.name}</td>
              <td>{restaurant.location}</td>
              <td>{restaurant.capacity}</td>
              <td>
                <button
                  className={styles.buttonEdit}
                  onClick={() => handleEditRestaurant(restaurant.id)}
                >
                  <FiEdit />
                </button>
                <button
                  className={styles.buttonDelete}
                  onClick={() => handleDeleteRestaurant(restaurant.id)}
                >
                  <FiTrash />
                </button>
                <button
                  className={styles.buttonDuplicate}
                  onClick={() => duplicateRestaurant(restaurant.id, uuid())}
                >
                  <FiCopy />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}