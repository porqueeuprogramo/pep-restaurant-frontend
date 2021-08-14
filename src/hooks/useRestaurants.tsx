import React from "react";
import { createContext, useState, useContext } from "react";
import { toast } from "react-toastify";
import { IRestaurant, IRestaurantsContext, IRestaurantsProvider } from "types";
import { v4 as uuid } from 'uuid';

export const RestaurantsContext = createContext<IRestaurantsContext | {}>({});

export function RestaurantsProvider({ children }: IRestaurantsContext) {
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([{
    id: uuid(),
    name: "Restaurant 1",
    location: "Location 1",
    capacity: 10,
  },
  {
    id: uuid(),
    name: "Restaurant 2",
    location: "Location 2",
    capacity: 20,
  },
  {
    id: uuid(),
    name: "Restaurant 3",
    location: "Location 3",
    capacity: 30,
  },
  ]);


  async function getRestaurant(restaurantId: string) {
    const restaurant = restaurants.find(
      (item) => item.id === restaurantId
    );
    return restaurant;
  }

  async function createRestaurant(data: IRestaurant) {
    try {
      setRestaurants((currentRestaurants) => [...currentRestaurants, data]);
      toast.success("The restaurant was created");
    } catch {
      toast.error("Error creating the restaurant");
    }
  }

  async function updateRestaurant(restaurantId, data: IRestaurant) {
    try {
      const newRestaurantList = [...restaurants];
      const selectedRestaurant = newRestaurantList.findIndex(res => res.id === restaurantId);
      newRestaurantList[selectedRestaurant] = data;
      setRestaurants(newRestaurantList);
      toast.success("The restaurant was updated");
    } catch {
      toast.error("Error updating the restaurant");
    }
  }

  async function deleteRestaurant(restaurantId: string) {
    try {
      setRestaurants((currentRestaurants) => currentRestaurants.filter(res => res.id !== restaurantId));
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

export function useRestaurants() {
  const context = useContext(RestaurantsContext) as IRestaurantsProvider;
  return context;
}
