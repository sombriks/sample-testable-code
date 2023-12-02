# [Is this code really testable?](https://github.com/sombriks/sample-testable-code)

Small snippets of code and tests for this blog post

## Requirements

- node 18+
- docker 20+

## Running

[Each project](01-barely-testable/README.md)
[has](02-some-modularization/README.md)
[its own](03-environment-aware/README.md)
[README.md](04-dependency-injection-points/README.md) and all of them will
expect a PostgreSQL database running.

This project provides a [compose file](00-database/docker-compose.yml) so you
don't need to worry about it.

To run the database:

```bash
docker compose -f 00-database/docker-compose.yml up 
```

## Further information

See blog post.
