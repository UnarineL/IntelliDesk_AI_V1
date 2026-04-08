# SupportOps AI Frontend 

This version merges all major frontend updates discussed today:

- Futuristic SaaS-style UI
- Clarification-first AI intake chat on `/submit`
- Role-based mock access model (`end_user`, `support`, `admin`)
- User portal routes (`/my-tickets`, `/my-tickets/[id]`)
- Support console routes (`/dashboard`, `/tickets`, `/tickets/[id]`)
- Ticket communication thread with public messages, internal notes, and system events
- Mock role switcher for previewing visibility differences before real authentication is added

## Run locally

```bash
npm install
npm run dev
```

## Main routes

- `/` Landing page
- `/login` Role preview / mock access selector
- `/submit` Guided intake with clarification-first AI chat
- `/my-tickets` End-user ticket list
- `/my-tickets/[id]` End-user ticket detail + public thread
- `/dashboard` Support operations dashboard
- `/tickets` Support ticket queue
- `/tickets/[id]` Support ticket detail + AI analysis + internal notes visibility

## Notes

This is still a frontend-first mock system. Authentication, real route protection, persistence, and backend integration.
