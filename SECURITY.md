# Security Policy

## Supported status

This repository is under active engineering or documentation development. It must not be treated as proof of production readiness or as authorization to test third-party systems.

## Reporting a vulnerability

Do not publish credentials, client data, exploit details, or sensitive evidence in a public issue.

Use GitHub's private vulnerability reporting / Security Advisory feature when available. If it is unavailable, contact the repository owner through the LinkedIn profile linked from [Mu'ath Yousef](https://github.com/Muath-Yousef) and request a private reporting channel.

Include:

- affected component and commit
- impact and preconditions
- minimal reproduction using synthetic data
- suggested mitigation, if known

## Safety requirements

- SOAR_DRY_RUN=true by default
- human approval for sensitive or destructive actions
- CDN and RFC1918 addresses are never automatically blocked
- DNS-derived events are NOTIFY_ONLY, never BLOCK_IP
- raw client data is never sent to external AI providers
- credentials, tokens, session data, and real client evidence are never committed
- failures must fail closed and preserve an audit trail
- every action requires a rollback path

## Authorized use

Use this work only on systems you own or are explicitly authorized to test. Deliberately vulnerable lab targets must remain isolated.

## No bug bounty promise

This repository does not currently operate a paid bug bounty program. Responsible reports are still appreciated.
