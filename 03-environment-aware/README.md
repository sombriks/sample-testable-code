# 03: Environment aware

- Use distinct contexts for production, development and test environment
- Make use of environment variables
- Test suite now is completely independent of external resources (no previously
  running database)

## Running

```bash
# development mode with hot reload enabled
npm run dev
```

## Testing

```bash
npm run test
```

Make sure the database is available as described in parent [README.md](../README.md)

Make sure the `.env` and `.env.local` environment files has proper values or the
variables `NODE_ENV` and `PG_CONNECTION_URL` has valid values.
