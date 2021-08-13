import React from "react";
import { createContext, useEffect, useState, useContext } from "react";
import { toast } from "react-toastify";
import * as api from "../services/api";
import { IRestaurantsContext, IRestaurantsProvider } from "../types";

export const RestaurantsContext = createContext<IRestaurantsContext | {}>({});

export function RestaurantsProvider({ children }: IRestaurantsContext) {
  const [restaurants, setRestaurants] = useState<any[]>([]);

  useEffect(() => {
    api.getRestaurants().then(setRestaurants);
  }, []);

  async function getRestaurant(restaurantId: string) {
    const restaurant = restaurants.find(
      (item) => item.id === Number(restaurantId)
    );
    return restaurant;
  }

  async function createRestaurant(data: any) {
    try {
      const newRestaurant = await api.createRestaurant(data);

      setRestaurants([...restaurants, newRestaurant]);
      toast.success("The restaurant was created");
    } catch {
      toast.error("Error creating the restaurant");
    }
  }

  async function updateRestaurant(restaurantId, data) {
    try {
      const updatedRestaurant = await api.updateRestaurant(restaurantId, data);

      const updatedRestaurants = restaurants.map((restaurant) => {
        if (restaurant.id === Number(restaurantId)) {
          return updatedRestaurant;
        } else {
          return restaurant;
        }
      });

      setRestaurants(updatedRestaurants);
      toast.success("The restaurant was updated");
    } catch {
      toast.error("Error updating the restaurant");
    }
  }

  async function deleteRestaurant(restaurantId: string) {
    try {
      await api.deleteRestaurant(restaurantId);

      const updatedState = restaurants.filter(
        (restaurant) => restaurant.id !== Number(restaurantId)
      );

      setRestaurants(updatedState);
      toast.success("The restaurant was deleted");
    } catch {
      toast.error("Error deleting restaurant");
    }
  }

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        getRestaurant,
        createRestaurant,
        deleteRestaurant,
        updateRestaurant,
      }}
    >
      <React.Fragment>
        {children}
      </React.Fragment>
    </RestaurantsContext.Provider>
  );
}

export default function useRestaurants() {
  const context = useContext(RestaurantsContext) as IRestaurantsProvider;
  return context;
}
