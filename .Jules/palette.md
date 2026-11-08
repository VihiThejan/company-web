## 2023-11-20 - [ARIA Labels for Icon-Only Buttons]
**Learning:** Found multiple instances of `IconButton` missing `aria-label` attributes across different components (`ClientTestimonials`, `TeamList`, `TeamExperts`, `TeamMembers`).
**Action:** Added context-specific `aria-label`s (e.g., using `member.name` for LinkedIn links and explicit labels for slider controls) to improve screen reader accessibility. Ensure all future icon-only buttons include descriptive ARIA labels.
## 2026-11-08 - [Keyboard Accessibility for Interactive Elements]
**Learning:** Interactive non-button elements (like `motion.div`) acting as toggles for collapsible content were missing keyboard navigation support.
**Action:** Added `role="button"`, `tabIndex={0}`, `aria-expanded`, `aria-controls`, and an `onKeyDown` handler for Space/Enter keys to ensure full keyboard accessibility. Removed invalid `sx` prop usage on `motion.div` as it's not a native MUI component.
