import { createServer, Model } from "miragejs";

export default function makeServer() {
  return createServer({
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

      // @ts-ignore
      this.get("/restaurant/:id", (schema, request) => {
        console.log('LOG ~ file: fakeBackend.js ~ line 41 ~ request', request);
        const { id } = request.params;
        return schema.find("restaurant", id);
      });

      this.post("/restaurant", (schema, request) => {
        const data = JSON.parse(request.requestBody);
        return schema.create("restaurant", data);
      });

      // @ts-ignore
      this.put("/restaurant/:id", (schema, request) => {
        console.log('LOG ~ file: fakeBackend.js ~ line 52 ~ request', request);
        const { id } = request.params;
        const data = JSON.parse(request.requestBody);
        return schema.find("restaurant", id)?.update(data);
      });

      // @ts-ignore
      this.delete("/restaurant/:id", (schema, request) => {
        console.log('LOG ~ file: fakeBackend.js ~ line 59 ~ request', request);
        const { id } = request.params;
        return schema.find("restaurant", id)?.destroy();
      });
    },
  });
}