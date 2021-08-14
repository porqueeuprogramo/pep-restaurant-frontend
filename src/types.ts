export interface IRestaurantsProvider {
    restaurants: any[],
    getRestaurant: (restaurantId: string) => any,
    createRestaurant: (data: IRestaurant) => any,
    updateRestaurant: (restaurantId: string, data: Omit<IRestaurant, "id">) => any,
    deleteRestaurant: (restaurantId: string) => any,
}

export interface IRestaurantsContext {
    children: React.ReactNode,
}

export interface IRestaurantsAPIData {
    name?: string,
    location?: string,
    capacity?: string,
}

export interface IRestaurant {
    id: string,
    name: string,
    location: string,
    capacity: number,
}