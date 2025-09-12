## App Routing & OTP Flow

### High-level User Journeys

Signup Journey:
1. /signup  -> user submits signup form (demo: no API) -> navigate to /verify-email
2. /verify-email -> user enters 6‑digit OTP (auto submit on completion) -> navigate to /verified-email
3. /verified-email -> success screen -> Continue -> /home

Login Journey:
1. /login -> successful form submit (demo) -> /home

### Route Table
| Path | Component | Purpose |
|------|-----------|---------|
| / | Redirect -> /login | Default landing |
| /login | Login | Existing user auth (demo) |
| /signup | Signup | Create account (demo) |
| /verify-email | VerifyEmail | Collect OTP after signup |
| /verified-email | VerifiedEmail | Confirmation & proceed to home |
| /home | Home | Placeholder post-auth page |

### Navigation Summary
Signup submit -> /verify-email
VerifyEmail (OTP auto-complete) -> /verified-email
VerifiedEmail Continue -> /home
VerifiedEmail Back to Login -> /login
Login submit -> /home
Links between login/signup via buttons in each form.

### OTP Component (`OtpInput`)
Props:
- length?: number (default 6)
- value?: string (controlled mode)
- onChange?: (value: string) => void  (fires on any edit)
- onComplete?: (value: string) => void (fires once all digits filled)
- autoFocus?: boolean (default true)
- disabled?: boolean
- className?: string

Features:
- Dynamic number of boxes (length prop)
- Auto focus first box
- Accepts only digits (filters paste)
- Multi-character paste distributes across boxes
- Arrow key (←/→) navigation
- Intelligent Backspace: clears current or moves left if empty
- Auto advance on entry
- Auto submit trigger via onComplete (used in VerifyEmail)
- Accessible labels per input (aria-label)

### VerifyEmail Screen Behavior
- Renders `OtpInput length={6}`
- Maintains `otp` state and a `submitting` flag
- When OTP complete (6 digits) `onComplete` fires ->: shows loading toast, simulates API delay, success toast, navigates to /verified-email
- Manual button submission allowed but disabled until OTP complete
- Resend button shows a neutral toast (demo placeholder)
- Back button returns user to /signup

### Toast Usage
Library: react-hot-toast
Mounted Toaster in `main.tsx` at top-center.
IDs used for verification flow to avoid stacking multiple toasts (id: 'verify').

### Adding Real API Calls
Replace simulated delay in `VerifyEmail.tsx`:
```ts
await api.verifyEmail({ code: otp })
```
On error: catch, show `toast.error`, setSubmitting(false).

### Extensibility Ideas
- Add rate-limit & resend cooldown (e.g. 30s) with countdown UI.
- Persist partially entered OTP in sessionStorage to survive reloads.
- Add haptic feedback / subtle animation on invalid paste or error.
- Add error state styling (red border) if server rejects code.
- Integrate with form lib (react-hook-form) for validation consistency.
- Provide a `mask` prop to display • instead of digits (for PIN entry use cases).

### Code Locations
- Routing: `src/router.tsx`
- OTP Component: `src/components/OtpInput.tsx`
- Verify: `src/components/VerifyEmail.tsx`
- Verified: `src/components/VerifiedEmail.tsx`
- Auth forms: `src/components/Login.tsx`, `src/components/Signup.tsx`
- Root wrapper (router + toaster): `src/main.tsx`

### Testing Tips
- Paste a full code (e.g. 123456) into any box -> all boxes fill.
- Paste partial code mid sequence (e.g. focus 3rd box and paste 789) -> fills remaining sequentially.
- Backspace on empty box moves focus left.
- Auto submit should navigate away ~0.8s after final digit (demo latency).

### Minimal Example Usage
```tsx
<OtpInput length={6} onChange={setCode} onComplete={(c) => submit(c)} />
```

---
This document covers the current demo implementation state (no real API). Update as authentication logic evolves.