# Quick Start Guide - Deploy TEQ Radar to Azure

This project uses Terraform to create an **Azure Static Web App** hosting the contents of the `docs` folder.

## 1️⃣ Prerequisites

- [Azure CLI](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli) (run `az login`)
- [Terraform](https://www.terraform.io/downloads.html)

## 2️⃣ Configure Deployment

Edit `terraform/terraform.tfvars` and set at least:
```hcl
location            = "West Europe"
static_site_name    = "your-unique-site-name"   # globally unique
sku_tier            = "Free"                     # or "Standard"
sku_size            = "F1"
app_settings        = {}
preview_environments_enabled = false
# custom_domain  = "radar.yourdomain.com"
```

## 3️⃣ Provision Infrastructure

```bash
cd terraform
terraform init
terraform validate
terraform plan
terraform apply -auto-approve
```

This creates a resource group and an Azure Static Web App. If you provided a GitHub repo URL, a GitHub Actions workflow will be added to the repo to build & deploy automatically.

## 4️⃣ Publish the Site

### Automatic (GitHub)
Push changes to the configured branch; GitHub Actions will run and deploy.

### Manual (CLI)
Run the supplied script:
```bash
chmod +x terraform/deploy.sh
terraform -chdir=terraform output deployment_url
./terraform/deploy.sh
```

## 5️⃣ Access the App

```bash
terraform -chdir=terraform output deployment_url
```

Primary hostname ends `.azurestaticapps.net`; custom domain if configured.

## 6️⃣ Custom Domain (optional)
1. Add `custom_domain` to `terraform.tfvars`
2. `terraform apply`
3. Create a CNAME record pointing to the default hostname (output above)
4. Wait (5‑30 min); Azure provisions TLS automatically.

## Managing & Cleaning Up
- **Update files:** re-run `terraform/deploy.sh` or push to GitHub
- **Inspect resources:** `terraform -chdir=terraform show`
- **Remove everything:** `terraform -chdir=terraform destroy` (will delete site)

## Notes
- **Names must be globally unique**: static web app name cannot collide with existing sites.
- **Free tier** is usually sufficient for a simple radar page.

For details see `terraform/README.md`.

