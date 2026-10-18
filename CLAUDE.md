# Henry Curto Portfolio — Claude Code Config

## Setup automático

Al iniciar una sesión nueva, instalar Graphify si no está disponible:

```bash
uv tool install graphifyy --quiet 2>/dev/null || true
graphify install --quiet 2>/dev/null || true
```

O en una línea:
```bash
uv tool install graphifyy -q 2>/dev/null; graphify install -q 2>/dev/null; true
```

## Uso

Para mapear el proyecto completo como grafo de conocimiento:
```
/graphify .
```

Genera `graphify-out/graph.html`, `GRAPH_REPORT.md` y `graph.json`.
