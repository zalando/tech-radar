terraform {
  required_version = ">= 1.0"
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 3.0"
    }
  }
}

provider "azurerm" {
  features {}
}

# Resource group for all resources
resource "azurerm_resource_group" "rg" {
  name     = var.resource_group_name
  location = var.location
  tags     = var.tags
}

# Static Web App
resource "azurerm_static_web_app" "sw" {
  name                = var.static_site_name
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name

  # SKU configuration (Free or Standard tier)
  sku_tier = var.sku_tier
  sku_size = var.sku_size

  # optional app settings / configuration
  app_settings = var.app_settings

  # preview environments may be enabled if desired
  preview_environments_enabled = var.preview_environments_enabled
}

# Custom domain binding (optional)
resource "azurerm_static_web_app_custom_domain" "custom" {
  count             = var.custom_domain != null ? 1 : 0
  static_web_app_id = azurerm_static_web_app.sw.id
  domain_name       = var.custom_domain
  validation_type   = "dns-txt-token"
}
