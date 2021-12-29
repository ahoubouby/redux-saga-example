
import { createServer } from "miragejs";


export default function server() {
    createServer({

        routes() {
            this.namespace = "api";
            this.get("/users", (schema, request) => ({
                 users : [
                    {
                        id: 1,
                        name: "John Doe",
                        email: "ahoubouby@gmail.com"
                    },
                    {
                        id: 2,
                        name: 'ahoubouby',
                        email: 'xxxx@gmail.com'
                    }
                ]
            }));
            this.post("users", (schema, request) => {
                const body = JSON.parse(request.requestBody);
                console.log(body);
                return { users: body};
            });
        },
    });
}
