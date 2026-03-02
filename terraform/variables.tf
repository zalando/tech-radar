variable "resource_group_name" {
  description = "Name of the Azure resource group"
  type        = string
  default     = "teq-radar-rg"
}

variable "location" {
  description = "Azure region for resources"
  type        = string
  default     = "West Europe"
}

variable "static_site_name" {
  description = "Name of the Static Web App (must be globally unique, lowercase, 2-60 chars)"
  type        = string
  default     = "teq-radar-site"
  validation {
    condition     = can(regex("^[a-z0-9-]{2,60}$", var.static_site_name))
    error_message = "Static site name must be lowercase alphanumeric or hyphens, 2-60 characters."
  }
}

variable "sku_tier" {
  description = "SKU tier for the Static Web App (Free or Standard)"
  type        = string
  default     = "Free"
  validation {
    condition     = contains(["Free", "Standard"], var.sku_tier)
    error_message = "SKU tier must be either Free or Standard."
  }
}

variable "sku_size" {
  description = "SKU size for the Static Web App (e.g. F1 for Free)"
  type        = string
  default     = "F1"
}

variable "app_settings" {
  description = "Map of app settings to apply to the Static Web App"
  type        = map(string)
  default     = {}
}

variable "preview_environments_enabled" {
  description = "Whether preview environments (GitHub PR environments) are enabled"
  type        = bool
  default     = false
}

variable "custom_domain" {
  description = "Custom domain name for the Static Web App (optional)"
  type        = string
  default     = null
}

variable "tags" {
  description = "Common tags for all resources"
  type        = map(string)
  default = {
    Project     = "TEQ Radar"
    Environment = "Production"
    ManagedBy   = "Terraform"
  }
}
