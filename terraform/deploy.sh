#!/bin/bash
set -e

SITE_NAME=$(terraform -chdir=terraform output -raw static_site_name)
RESOURCE_GROUP=$(terraform -chdir=terraform output -raw resource_group_name)

# Resolve docs directory relative to this script location so the script
# works whether invoked from repo root or from inside the terraform folder.
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DOCS_DIR="$SCRIPT_DIR/../docs"

if [ -z "$SITE_NAME" ] || [ -z "$RESOURCE_GROUP" ]; then
  echo "Error: terraform outputs not found. Did you run 'terraform apply'?"
  exit 1
fi

echo "Deploying TEQ Radar to Static Web App '$SITE_NAME'..."

if ! az extension show --name staticwebapp >/dev/null 2>&1; then
  echo "Installing Azure CLI 'staticwebapp' extension..."
  az extension add --name staticwebapp || true
else
  # Try to update to the latest extension which may provide the 'upload' command
  echo "Updating Azure CLI 'staticwebapp' extension..."
  az extension update --name staticwebapp >/dev/null 2>&1 || true
fi

# Verify whether the 'upload' command is available; if not, provide guidance
if az staticwebapp upload -h >/dev/null 2>&1; then
  az staticwebapp upload \
    --name "$SITE_NAME" \
    --resource-group "$RESOURCE_GROUP" \
    --source "$DOCS_DIR"
else
  echo "'az staticwebapp upload' is not available in your Azure CLI extension."
  echo "Options:"
  echo "  1) Push to GitHub (if you configured repository integration) to trigger CI/CD."
  echo "  2) Update the Azure CLI staticwebapp extension manually:"
  echo "       az extension update --name staticwebapp"
  echo "  3) If you prefer local upload and don't have the 'upload' command, you can build a GitHub Action or use an alternate hosting (Storage+CDN)."
  echo "If you want, I can add a GitHub Actions workflow to this repo to auto-deploy on push."
  exit 2
fi

echo "Deployment complete!"
echo
echo "Access your app at:"
terraform output deployment_url
