# 01: Barely testable

- Code is too coupled
- Not modular
- No environment-aware

## Running

In one terminal, run your project:

```bash
# make sure it's running
node index.mjs 
```

In another one, perform the request`

```bash
# hit it with some predictable requests
curl -i http://localhost:3000/books?author=Neil%20Gaiman
```

Make sure the database is available as described in parent [README.md](../README.md)
