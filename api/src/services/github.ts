import dotenv from 'dotenv'

dotenv.config()

const GITHUB_TOKEN = process.env.GITHUB_TOKEN
const GITHUB_OWNER = process.env.GITHUB_OWNER || 'Bayes-Price'
const GITHUB_REPO = process.env.GITHUB_REPO || 'operations'
const GITHUB_PROJECT_NAME = process.env.GITHUB_PROJECT_NAME || 'Operations Hub'

export interface GitHubIssueData {
  title: string
  body: string
  labels?: string[]
}

export interface GitHubIssueResponse {
  id: number
  number: number
  html_url: string
}

/**
 * Create a GitHub issue in the operations repo
 */
export async function createGitHubIssue(data: GitHubIssueData): Promise<GitHubIssueResponse | null> {
  if (!GITHUB_TOKEN) {
    console.warn('GITHUB_TOKEN not set - skipping GitHub issue creation')
    return null
  }

  const url = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/issues`

  try {
    console.log(`Creating GitHub issue in ${GITHUB_OWNER}/${GITHUB_REPO}...`)

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: data.title,
        body: data.body,
        labels: data.labels || [],
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error(`GitHub API error: ${response.status} - ${errorText}`)
      throw new Error(`GitHub API error: ${response.status}`)
    }

    const issue = await response.json() as GitHubIssueResponse

    console.log(`GitHub issue created: #${issue.number} - ${issue.html_url}`)

    return issue
  } catch (error) {
    console.error('Error creating GitHub issue:', error)
    throw error
  }
}

/**
 * Create an issue for a discovery form submission
 */
export async function createDiscoveryIssue(data: {
  name: string
  email: string
  company: string
  message: string
  submittedAt: string
}): Promise<GitHubIssueResponse | null> {
  const title = `Discovery Request: ${data.name}${data.company ? ` (${data.company})` : ''}`

  const body = `## New Discovery Session Request

### Contact Information
- **Name:** ${data.name}
- **Email:** ${data.email}
- **Company:** ${data.company || 'Not provided'}

### Message
${data.message || '_No message provided_'}

### Metadata
- **Submitted:** ${data.submittedAt}
- **Source:** Website Discovery Form

---
_This issue was automatically created from a website form submission._`

  return createGitHubIssue({
    title,
    body,
    labels: ['discovery', 'lead', 'website'],
  })
}

/**
 * Create an issue for a contact form submission
 */
export async function createContactIssue(data: {
  name: string
  email: string
  service?: string
  message: string
  submittedAt: string
}): Promise<GitHubIssueResponse | null> {
  const title = `Contact Form: ${data.name}`

  const body = `## New Contact Form Submission

### Contact Information
- **Name:** ${data.name}
- **Email:** ${data.email}
- **Service Interest:** ${data.service || 'Not specified'}

### Message
${data.message || '_No message provided_'}

### Metadata
- **Submitted:** ${data.submittedAt}
- **Source:** Website Contact Form

---
_This issue was automatically created from a website form submission._`

  return createGitHubIssue({
    title,
    body,
    labels: ['contact', 'inquiry', 'website'],
  })
}
