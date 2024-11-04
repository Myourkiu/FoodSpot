// mirage.ts
import { createServer, Model, Response } from 'miragejs'

export function makeServer({ environment = 'development' } = {}) {
  return createServer({
    environment,
    models: {
      user: Model,
    },

    seeds(server) {
      server.create('user', { id: "1", username: 'admin', password: 'admin123', userType: 'admin' })
      server.create('user', { id: "2",username: 'customer', password: 'customer123', userType: 'customer' })
    },

    routes() {
      this.namespace = 'api'

      this.post('/login', (schema, request) => {
        const { username, password } = JSON.parse(request.requestBody)

        // Acessa todos os usuários e filtra manualmente
        const user = schema.users.findBy({ username, password });

        if (user) {
          // Retorna o tipo de usuário se as credenciais estiverem corretas
          return { isLoggedIn: true, userType: user.userType }
        } else {
          return new Response(401, {}, { error: 'Invalid credentials' })
        }
      })
    },
  })
}
