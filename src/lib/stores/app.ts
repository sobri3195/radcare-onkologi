import { writable } from 'svelte/store';
export const selectedRole=writable<string>('patient');
export const symptomReports=writable<any[]>([]);
export const reviewedAlerts=writable<string[]>([]);
export const doctorNotes=writable<Record<string,string>>({});
export const qaChecklistResults=writable<Record<string,boolean>>({});
export const reportDrafts=writable<Record<string,string>>({});
