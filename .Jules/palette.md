## 2023-11-20 - [ARIA Labels for Icon-Only Buttons]
**Learning:** Found multiple instances of `IconButton` missing `aria-label` attributes across different components (`ClientTestimonials`, `TeamList`, `TeamExperts`, `TeamMembers`).
**Action:** Added context-specific `aria-label`s (e.g., using `member.name` for LinkedIn links and explicit labels for slider controls) to improve screen reader accessibility. Ensure all future icon-only buttons include descriptive ARIA labels.
