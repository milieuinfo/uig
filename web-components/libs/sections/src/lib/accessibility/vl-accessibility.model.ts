export const COMPLIANCE_STATUS = {
    FULLY_COMPLIANT: 'fully-compliant',
    PARTIALLY_COMPLIANT: 'partially-compliant',
    NOT_COMPLIANT: 'not-compliant',
} as const;

export type COMPLIANCE_STATUS = typeof COMPLIANCE_STATUS[keyof typeof COMPLIANCE_STATUS];

export const EVALUATION_STATUS = {
    EXPERT_EVALUATED: 'expert-evaluated',
    SELF_EVALUATED: 'self-evaluated',
    NOT_EVALUATED: 'not-evaluated',
} as const;

export type EVALUATION_STATUS = typeof EVALUATION_STATUS[keyof typeof EVALUATION_STATUS];

export interface AccessibilityStatus {
    complianceStatus: COMPLIANCE_STATUS;
    evaluationStatus: EVALUATION_STATUS;
}

export interface AccessibilityProperties extends AccessibilityStatus {
    version: string;
    application: string;
    limitations: any;
    date: string;
    dateModified: string;
}
