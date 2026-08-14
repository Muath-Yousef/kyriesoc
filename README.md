# SOCRoot Website

This repository contains the public Next.js website for **SOCRoot**, a commercial cybersecurity innovation focused on subscription services that can be automated and deliver clear, measurable customer value.

The repository name is retained for deployment continuity. **SOCRoot is not a commercial name for Project Synapse.**

## Product thesis

A service belongs in SOCRoot only when it:

1. solves a specific security problem for an identifiable customer;
2. delivers an understandable and measurable result;
3. can automate a meaningful share of collection, analysis, reporting, or follow-up;
4. keeps sensitive actions within explicit human-approval and safety boundaries;
5. provides expected customer value that clearly exceeds the subscription price and switching cost;
6. can be delivered repeatedly without rebuilding the service from zero for every customer.

## Intended business model

- recurring subscription for a continuous cybersecurity service;
- one defined service, result, boundary, price, and acceptance criterion at a time;
- automation for repeatable work, not unsupported claims of autonomous remediation;
- evidence-oriented reporting so the customer can see what was delivered;
- measurement of delivery cost, time, quality, retention, and margin.

## Current maturity

**Status: pre-production / commercial validation pending.**

The website and technical assets demonstrate direction and engineering capability. They do not prove product-market fit, production scale, a guaranteed SLA, or recurring subscription revenue. The strongest validation will be a customer who pays for a defined service, receives the agreed result, and renews.

## Relationship with Project Synapse

[Project Synapse](https://github.com/Muath-Yousef/project-synapse) is a separate cybersecurity graduation project built around open-source tools, data analytics, and scalable architecture.

SOCRoot may reuse engineering patterns or components validated by Project Synapse, but availability of a technical component does not justify including it in SOCRoot unless it improves a service a customer is willing to pay for.

## Public communication rules

- distinguish implemented components, partial integrations, experiments, and future plans;
- describe customer value before listing tools;
- make pre-production and validation boundaries visible;
- keep sensitive actions human-controlled and dry-run-first;
- never send raw client data to external AI providers;
- do not claim production, SLA, autonomous remediation, or customer outcomes without evidence.

## Technology

- Next.js
- TypeScript
- React
- Tailwind CSS
- GitHub Pages and custom-domain deployment

## Local development

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Quality checks

```bash
npm run lint
npm run build
```

## Related repositories

- [Project Synapse — separate graduation project](https://github.com/Muath-Yousef/project-synapse)
- **SOCRoot control-plane candidate** — private during Git-history and release-safety review
- [Portfolio](https://github.com/Muath-Yousef/portfolio-site)
- [Authorized assessment evidence](https://github.com/Muath-Yousef/Reports)
