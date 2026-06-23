# Graceivylyn's Blog, Thought for the Day
### The Importance of Data Centers in Ghana

A static website built and deployed on AWS S3 with a fully automated CI/CD pipeline using GitHub Actions. This project is part of a cloud engineering portfolio demonstrating real-world AWS infrastructure skills.

---

## Project Overview

This project is an awareness and advocacy blog on the importance of data center infrastructure in Ghana. It covers the economic impact, data sovereignty, sectoral benefits, and the future outlook for Ghana's digital economy.

The site is built with plain HTML, CSS, and JavaScript and deployed to an AWS S3 bucket configured for static website hosting. Every push to the main branch triggers an automatic deployment via GitHub Actions.

---

## Live Site

Hosted on AWS S3 static website hosting:

```
http://ivylyn-static-website-2026.s3-website.us-east-2.amazonaws.com
```

---

## Tech Stack

| Technology | Purpose |
|---|---|
| HTML, CSS, JavaScript | Frontend static website |
| AWS S3 | Static website hosting |
| AWS IAM | Secure access management for deployment |
| GitHub Actions | CI/CD pipeline for automated deployment |
| Git | Version control |

---

## Project Structure

```
Ghana-datacenter-site/
├── index.html          # Main HTML file with all page sections
├── style.css           # Stylesheet for layout, typography, and responsive design
├── script.js           # JavaScript for form handling, scroll effects, and animations
├── .github/
│   └── workflows/
│       └── main.yml    # GitHub Actions CI/CD workflow
└── README.md           # Project documentation
```

---

## Website Sections

- **Hero** — Page title, blog tagline, and author meta
- **Overview** — What data centers are and why they matter for Ghana
- **Economic Impact** — Key statistics and sector benefit cards
- **Future Outlook** — A 2026 to 2030 timeline for Ghana's digital infrastructure
- **Contact** — Reader engagement form with success feedback

---

## CI/CD Pipeline

This project uses GitHub Actions to automatically deploy to S3 on every push to the main branch.

### How it works

1. Developer pushes code changes to the main branch
2. GitHub Actions workflow is triggered automatically
3. The runner checks out the latest code
4. AWS credentials are configured securely using GitHub Secrets
5. The AWS CLI syncs all files to the S3 bucket
6. The live site is updated within seconds

### Workflow file (.github/workflows/main.yml)

```yaml
name: Deploy to S3

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v4
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: us-east-2

      - name: Deploy to S3
        run: |
          aws s3 sync . s3://ivylyn-static-website-2026 \
            --exclude ".git/*" \
            --exclude ".github/*" \
            --delete
```

---

## AWS Setup

### S3 Bucket Configuration

- Bucket name: `ivylyn-static-website-2026`
- Region: `us-east-2` (US East, Ohio)
- Static website hosting: enabled
- Index document: `index.html`
- Block public access: disabled to allow public website access

### Bucket Policy

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::ivylyn-static-website-2026/*"
    }
  ]
}
```

### IAM Permissions

A dedicated IAM user was created with the following permissions to allow GitHub Actions to deploy files securely:

- `s3:PutObject`
- `s3:DeleteObject`
- `s3:ListBucket`
- `s3:GetObject`

Access keys were generated for this IAM user and stored as GitHub repository secrets.

---

## GitHub Secrets Required

| Secret Name | Description |
|---|---|
| `AWS_ACCESS_KEY_ID` | IAM user access key ID |
| `AWS_SECRET_ACCESS_KEY` | IAM user secret access key |

---

## How to Deploy Your Own Version

1. Fork or clone this repository
2. Create an S3 bucket with static website hosting enabled
3. Apply the bucket policy above, replacing the bucket name
4. Create an IAM user with S3 permissions and generate access keys
5. Add `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` to your GitHub repository secrets
6. Update the bucket name in `.github/workflows/main.yml`
7. Push to main and watch the pipeline deploy automatically

---

## Skills Demonstrated

- AWS S3 static website hosting and bucket policy configuration
- IAM user creation and least privilege access management
- GitHub Actions CI/CD pipeline setup and troubleshooting
- Version control with Git and GitHub
- Frontend development with HTML, CSS, and JavaScript
- Cloud deployment and automation

---

## Author

**Grace Ivylyn Asante**
Cloud Practitioner |Accra, Ghana

Transitioning into Cloud Support Engineering with hands-on experience in AWS infrastructure, CI/CD automation, and cloud architecture.

Connect on LinkedIn 

---

## License

This project is open source and available for learning and reference purposes.
