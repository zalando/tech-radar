# TEQ Radar - Azure Terraform Deployment

This directory contains Terraform configuration to deploy the TEQ Radar static website to Azure using **Azure Static Web Apps**.

## Architecture

```
┌─────────────────────────────────────────┐
│         Azure Static Web App            │
│  (with free global CDN, HTTPS, staging) │
│  ├─ Optional custom domain               │
│  └─ GitHub Actions build pipeline       │
└─────────────────────────────────────────┬┘
                (or manual upload script)

┌─────────────────────────────────────────┐
│           Source code (this repo)       │
│           └── docs/ (static files)      │
└─────────────────────────────────────────┘
```

The Static Web App service hosts the site directly, handles CDN distribution and TLS, and optionally builds from GitHub.

## Prerequisites

1. **Azure CLI** - [Install Azure CLI](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli)
   ```bash
   az login
   ```

2. **Terraform** - [Install Terraform](https://www.terraform.io/downloads.html)
   ```bash
   terraform version
   ```

3. **Azure Subscription** - You need an active Azure subscription with permissions to create resources

## Quick Start

### 1. Initialize Terraform

```bash
cd terraform
terraform init
```

### 2. Review Configuration

Edit `terraform.tfvars` to customize:
- `location` - Azure region (default: West Europe)
- `static_site_name` - Globally unique name (e.g. "myorg-radar-site")
- `sku` - Free or Standard
- `sku_tier` / `sku_size` - select pricing tier/size (Free is default)
- `app_settings` - optional map of application settings
- `custom_domain` - Optional custom domain for your app

### 3. Validate Configuration

```bash
terraform validate
```

### 4. Plan Deployment

```bash
terraform plan
```

Review the plan to see what resources will be created.

### 5. Deploy Infrastructure

```bash
terraform apply -auto-approve
```

This creates:
- Resource Group
- Static Web App resource
- (Optional) GitHub Action for continuous deployment
- (Optional) Custom domain binding with HTTPS

### 6. Upload/Update Your Files

If you configured a GitHub repo, push to the configured branch and GitHub Actions will build and deploy automatically.

To manually upload from local copy:

```bash
chmod +x deploy.sh
./deploy.sh
```

## Accessing Your App

After deployment:

```bash
terraform output deployment_url
```

**Without custom domain:**
```
https://<your-site-name>.azurestaticapps.net
```

**With custom domain:**
```
https://radar.yourdomain.com
```

## Configuring Custom Domain

1. Add your desired domain to `terraform.tfvars`:
   ```hcl
   custom_domain = "radar.yourdomain.com"
   ```

2. Reapply:
   ```bash
   terraform apply -auto-approve
   ```

3. In your DNS provider, create a **CNAME** record:
   ```
   radar.yourdomain.com CNAME <output from: terraform output static_site_default_hostname>
   ```

4. Wait for DNS propagation (5–30 min); Azure will provision TLS automatically.

## Cost Estimation

**Static Web App Free tier** is available and sufficient for small sites (e.g., TEQ Radar). Standard tier adds custom domain staging slots and more build minutes.

## Managing Deployments

**📝 Update website files:**
```bash
./deploy.sh
```

**🔍 View infrastructure:**
```bash
terraform show
```

**🗑️ Destroy resources:**
```bash
terraform destroy
```

## Troubleshooting

**Site name already taken**
- Choose a different value for `static_site_name` (must be globally unique)

**Manual upload fails**
- Ensure Azure CLI logged-in and `SITE_NAME`/`RESOURCE_GROUP` outputs are available

**Custom domain not accessible**
- Verify CNAME is correct; wait for DNS propagation

For more details, see `README.md` in this directory.

