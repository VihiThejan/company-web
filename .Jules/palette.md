## 2023-11-20 - [ARIA Labels for Icon-Only Buttons]
**Learning:** Found multiple instances of `IconButton` missing `aria-label` attributes across different components (`ClientTestimonials`, `TeamList`, `TeamExperts`, `TeamMembers`).
**Action:** Added context-specific `aria-label`s (e.g., using `member.name` for LinkedIn links and explicit labels for slider controls) to improve screen reader accessibility. Ensure all future icon-only buttons include descriptive ARIA labels.
## 2025-03-02 - [Keyboard Accessible Animations for Framer Motion Cards]
**Learning:** When using Framer Motion to trigger hover animations via `onHoverStart` and `onHoverEnd` on a wrapper element, keyboard users navigating via Tab do not see these visual cues. This occurs because focus events (which keyboard users rely on) are not implicitly tied to hover states.
**Action:** When implementing hover-driven animations (e.g. `setHovered(true)`) on interactive components, ensure parity for keyboard users by explicitly binding `onFocus` and `onBlur` handlers to the focusable element (like `Link` or `button`) to update the exact same animation state.
