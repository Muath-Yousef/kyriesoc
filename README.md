# SOCRoot Website

This repository contains the public Next.js website for **SOCRoot**, an evolving security engineering initiative focused on practical SOC capabilities for small and medium-sized organizations.

The repository name is retained for continuity, but the public product identity is **SOCRoot**. Project Synapse is the architectural origin of the work.

## Positioning

SOCRoot explores a practical security operations model combining:

- SIEM/XDR monitoring
- controlled SOAR workflows
- incident and case management
- evidence-driven security reporting
- compliance-oriented security guidance
- AI-assisted analysis with strict privacy boundaries

The primary market focus is Jordan, with UAE requirements considered as a secondary track. The project is currently in engineering and pre-production validation; the website must not imply proven production scale, a guaranteed SLA, or fully autonomous remediation.

## Technology

- Next.js
- TypeScript
- React
- Tailwind CSS
- GitHub Pages / custom domain configuration

## Local development

    npm install
    npm run dev

Open http://localhost:3000.

## Quality checks

    npm run lint
    npm run build

## Related repositories

- [Project Synapse — public architecture](https://github.com/Muath-Yousef/project-synapse)
- **SOCRoot control plane** — canonical implementation is private during Git-history security review
- **SOCRoot runtime** — canonical implementation is private during Git-history security review

## Communication rules

Public copy must distinguish between implemented components, partial integrations, and future plans. Security actions remain human-controlled, dry-run is the default, and raw client data must not be sent to external AI providers.
