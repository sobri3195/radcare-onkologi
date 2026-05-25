# RADCARE NUSANTARA
Prototype frontend-only SvelteKit untuk patient portal radioterapi, monitoring AI simulasi, dashboard dokter/fisikawan/admin.

## Stack
SvelteKit + TypeScript + Tailwind + Svelte stores + dummy data + localStorage.

## Install
```bash
npm install
```
## Run lokal
```bash
npm run dev
```
## Build
```bash
npm run build
```
## Deploy Vercel
1. Push repo ke Git.
2. Import ke Vercel sebagai project SvelteKit.
3. Build command: `npm run build`.

## Role demo
patient, family, doctor, physicist, therapist, nurse, admin, manager.

## Halaman
Public: `/` `/tentang` `/fitur` `/untuk-pasien` `/untuk-dokter` `/untuk-rumah-sakit` `/harga` `/kontak` `/login`.
Patient app: `/app` dst.
Doctor dashboard: `/dashboard` dst.
Physics dashboard: `/physics` dst.
Admin dashboard: `/admin` dst.

## Catatan
Semua data masih dummy dari `src/lib/data/*` dan state simulasi tersimpan di localStorage (`selectedRole`, `symptomReports`, `reviewedAlerts`, `doctorNotes`, `qaChecklistResults`, `reportDrafts`).

## Roadmap backend
Integrasi auth, API EMR/HIS, database klinis, audit trail production, AI inference server.
