// API client for form submissions

// Use relative URL so it works through Caddy proxy, or use env variable if set
const API_BASE_URL = import.meta.env.VITE_API_URL || '';

export interface DiscoveryFormData {
    name: string;
    email: string;
    company?: string;
    message?: string;
}

export interface SubmissionResponse {
    success: boolean;
    message: string;
    data?: {
        id: number;
        submitted_at: string;
    };
    error?: string;
    details?: unknown[];
}

/**
 * Submit discovery form to backend API
 */
export async function submitDiscoveryForm(formData: DiscoveryFormData): Promise<SubmissionResponse> {
    try {
        const response = await fetch(`${API_BASE_URL}/api/discovery/submit`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Failed to submit form');
        }

        return data;
    } catch (error) {
        console.error('Error submitting form:', error);
        throw error;
    }
}

/**
 * Download all submissions as CSV (admin function)
 */
export async function downloadSubmissionsCSV(): Promise<void> {
    try {
        const response = await fetch(`${API_BASE_URL}/api/discovery/submissions/export`);

        if (!response.ok) {
            throw new Error('Failed to export submissions');
        }

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `discovery_submissions_${new Date().toISOString().split('T')[0]}.csv`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
    } catch (error) {
        console.error('Error downloading CSV:', error);
        throw error;
    }
}

/**
 * Get all submissions (admin function)
 */
export async function getSubmissions(): Promise<unknown[]> {
    try {
        const response = await fetch(`${API_BASE_URL}/api/discovery/submissions`);

        if (!response.ok) {
            throw new Error('Failed to fetch submissions');
        }

        const data = await response.json();
        return data.data || [];
    } catch (error) {
        console.error('Error fetching submissions:', error);
        throw error;
    }
}

/**
 * Check API health
 */
export async function checkAPIHealth(): Promise<boolean> {
    try {
        const response = await fetch(`${API_BASE_URL}/api/discovery/health`);
        const data = await response.json();
        return data.status === 'healthy';
    } catch (error) {
        console.error('API health check failed:', error);
        return false;
    }
}
