export interface MedicalRecord {
  id?: number;
  code?: string;
  codePatient?: string;
  namePatient?: string;
  startDate?: string;
  endDate?: string;
  reason?: string;
  treatments?: string;
  nameDoctors?: string;
}
