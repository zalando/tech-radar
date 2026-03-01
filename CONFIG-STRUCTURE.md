# Configuration Structure

The TEQ Radar configuration has been reorganized into separate files per quadrant for better maintainability and organization.

## File Structure

```
docs/
├── config-metadata.json                           # Global metadata (date, etc.)
└── config/
    ├── quadrant-0-languages-frameworks.json       # Languages & Frameworks
    ├── quadrant-1-platform-infrastructure.json    # Platform & Infrastructure
    ├── quadrant-2-tools.json                      # Tools
    └── quadrant-3-techniques.json                 # Techniques
```

## Quadrant Mapping

| ID | Name | File |
|----|------|------|
| 0 | Languages & Frameworks | `config/quadrant-0-languages-frameworks.json` |
| 1 | Platform & Infrastructure | `config/quadrant-1-platform-infrastructure.json` |
| 2 | Tools | `config/quadrant-2-tools.json` |
| 3 | Techniques | `config/quadrant-3-techniques.json` |

## Adding a New Entry

Edit the appropriate quadrant file and add an entry to the `entries` array:

```json
{
  "entries": [
    {
      "label": "Your Technology Name",
      "ring": 0,
      "active": true,
      "moved": 0
    }
  ]
}
```

### Entry Properties

- **label** (string): The name of the technology
- **ring** (number): 0-3 representing the ring:
  - `0`: IN USE
  - `1`: TRIAL
  - `2`: ASSESS
  - `3`: PHASE OUT
- **active** (boolean): Whether the entry is active/visible
- **moved** (number): Movement indicator:
  - `0`: No movement
  - `1`: Moved inward (toward center)
  - `-1`: Moved outward (toward edge)

## Global Metadata

Update the date in `config-metadata.json`:

```json
{
  "date": "2026.03"
}
```
