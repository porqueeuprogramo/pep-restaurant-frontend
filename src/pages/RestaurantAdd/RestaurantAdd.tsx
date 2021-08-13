import { useState } from "react";
import { useHistory } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import useRestaurants from "../../hooks/useRestaurants";
import styles from "./styles.module.scss";

function RestaurantAdd() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [capacity, setCapacity] = useState("");
  const { createRestaurant } = useRestaurants();

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    await createRestaurant({
      name,
      location,
      capacity,
    });

    history.replace("/");
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1>New Restaurant</h1>

        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            required
            autoComplete="off"
            value={name}
            onChange={(event) => setName(event.target.value)}
            autoFocus
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

export default RestaurantAdd;
