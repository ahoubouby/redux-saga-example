
import { createServer } from "miragejs";


export default function server() {
    createServer({

        routes() {
            this.namespace = "api";
            this.get("/users", (schema, request) => {
                return [
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
                ];
            });
            this.post("user", (schema, request) => {
                const body = JSON.parse(request.requestBody);
                console.log(body);
                debugger;
            });
        },
    });
}
