# TrueForm PDF

### TODO:

- [x] implement uploading a file in the Hero section.
- [x] drag and drop functionality
- [ ] sending the file to server using tanstack react query
- [x] show to the user if there is an error wrong file format,  that his file is uploaded , processing 
- [ ] show a response when the server respond back with a converted pdf file,
- [ ] Auth clerk
- [ ] Billing clerk


<!-- 3) OCR/AI backend: Expose an endpoint like POST /api/convert with file upload.
   - Returns jobId; then GET /api/convert/:jobId for status + result URL.
    - Display a preview dialog (another Card or Dialog from shadcn/ui) before download.
 4) Credits: Persist in user profile; fetch on mount; decrement per conversion.
 5) Auth: Add Sign in with magic links or OAuth (Clerk/Auth.js/Supabase/etc.).
 6) Accessibility: Ensure keyboard + screen reader support for drag/drop and buttons.
 7) Analytics: Track CTA clicks and conversion funnel.
 8) Error states: Handle upload/processing errors with toasts (shadcn/ui <Toast/>).
 
  -->

## Run frontend 
pnpm run dev 

## Active backend environment 
.\.venv\Scripts\activate
## Run backend 
uv run python -m uvicorn main:app --reload

