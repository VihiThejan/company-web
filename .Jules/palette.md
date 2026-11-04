## 2023-11-20 - [ARIA Labels for Icon-Only Buttons]
**Learning:** Found multiple instances of `IconButton` missing `aria-label` attributes across different components (`ClientTestimonials`, `TeamList`, `TeamExperts`, `TeamMembers`).
**Action:** Added context-specific `aria-label`s (e.g., using `member.name` for LinkedIn links and explicit labels for slider controls) to improve screen reader accessibility. Ensure all future icon-only buttons include descriptive ARIA labels.
## 2024-05-19 - Interactive non-button components
**Learning:** Found custom pagination dots constructed using `Box` that visually acted as buttons but lacked semantic role, keyboard focus, and keyboard activation (`onKeyDown`).
**Action:** When implementing clickable items via `Box` or `div` (e.g., in carousels), always attach `role="button"`, `tabIndex={0}`, an `aria-label`, and support `Enter` or `Space` activation via `onKeyDown`.
