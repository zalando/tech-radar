# TODO

Kleine Ideen und Beobachtungen, die gebündelt umgesetzt werden (nicht sofort).

- **Node-Version im Deploy:** .github/workflows/deploy-swa.yml nutzt Node 18 (EOL). Auf aktuelle LTS anheben und mit yarn --frozen-lockfile testen.
- **Pflege der Daten:** Einträge werden manuell in docs/config/quadrant-*.json gepflegt, Datum in docs/config-metadata.json. Idee: Datum automatisch setzen oder per Workflow-Erinnerung (z. B. quartalsweise Issue) auf Aktualisierung hinweisen.
