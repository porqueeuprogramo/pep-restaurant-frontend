import { createServer, Model } from "miragejs";

createServer({
  models: {
    restaurant: Model,
  },

  seeds(server) {
    server.db.loadData({
      restaurants: [
        {
          id: 1,
          name: "Restaurant 1",
          location: "Location 1",
          capacity: 10,
        },
        {
          id: 2,
          name: "Restaurant 2",
          location: "Location 2",
          capacity: 20,
        },
        {
          id: 3,
          name: "Restaurant 3",
          location: "Location 3",
          capacity: 30,
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/restaurant", (schema) => {
      return schema.all("restaurant");
    });

    this.get("/restaurant/:id", (schema, request) => {
      const { id } = request.params;
      return schema.find("restaurant", id);
    });

    this.post("/restaurant", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create("restaurant", data);
    });

    this.put("/restaurant/:id", (schema, request) => {
      const { id } = request.params;
      const data = JSON.parse(request.requestBody);
      return schema.find("restaurant", id).update(data);
    });

    this.delete("/restaurant/:id", (schema, request) => {
      const { id } = request.params;
      return schema.find("restaurant", id).destroy();
    });
  },
});
