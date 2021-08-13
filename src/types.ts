export interface IRestaurantsProvider {
    restaurants: any[],
    getRestaurant: (restaurantId: string) => any,
    createRestaurant: (data: any) => any,
    updateRestaurant: (restaurantId: string, data: any) => any,
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