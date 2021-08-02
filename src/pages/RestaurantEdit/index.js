import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import useRestaurants from "../../hooks/useRestaurants";
import styles from "./styles.module.scss";

function RestaurantEdit() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [capacity, setCapacity] = useState("");

  const { id } = useParams();
  const history = useHistory();
  const { getRestaurant, updateRestaurant } = useRestaurants();

  useEffect(() => {
    getRestaurant(id).then((restaurant) => {
      setName(restaurant.name);
      setLocation(restaurant.location);
      setCapacity(restaurant.capacity);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    await updateRestaurant(id, {
      name,
      location,
      capacity,
    });

    history.replace("/");
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1>Edit Restaurant</h1>

        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            required
            autoComplete="off"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="location">Location</label>
          <input
            id="location"
            type="text"
            required
            autoComplete="off"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="capacity">Capacity</label>
          <input
            id="capacity"
            type="number"
            required
            autoComplete="off"
            value={capacity}
            onChange={(event) => setCapacity(event.target.value)}
          />
        </div>

        <button>
          <FaCheckCircle />
        </button>
      </form>
    </div>
  );
}

export default RestaurantEdit;
