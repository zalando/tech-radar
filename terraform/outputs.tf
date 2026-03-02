output "static_site_id" {
  description = "ID of the Static Web App"
  value       = azurerm_static_web_app.sw.id
}

output "static_site_default_hostname" {
  description = "Default hostname of the Static Web App"
  value       = azurerm_static_web_app.sw.default_host_name
}

output "static_site_name" {
  description = "Name of the Static Web App resource"
  value       = azurerm_static_web_app.sw.name
}

output "resource_group_name" {
  description = "Name of the resource group"
  value       = azurerm_resource_group.rg.name
}

output "resource_group_id" {
  description = "ID of the resource group"
  value       = azurerm_resource_group.rg.id
}

output "custom_domain_configured" {
  description = "Whether custom domain is configured"
  value       = var.custom_domain != null
}

output "deployment_url" {
  description = "URL to access the deployed app"
  value       = var.custom_domain != null ? "https://${var.custom_domain}" : "https://${azurerm_static_web_app.sw.default_host_name}"
}
