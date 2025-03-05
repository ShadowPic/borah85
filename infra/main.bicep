targetScope = 'subscription'
@minLength(1)
@maxLength(64)
@description('Name of the the environment which is used to generate a short unique hash used in all resources.')
param environmentName string

@minLength(1)
@description('Primary location for all resources')
// Flex Consumption functions are only supported in these regions.
// Run `az functionapp list-flexconsumption-locations --output table` to get the latest list
@allowed(['northeurope', 'southeastasia', 'eastasia', 'eastus2', 'southcentralus', 'australiaeast', 'eastus', 'northcentralus(stage)', 'westus2', 'uksouth', 'eastus2euap', 'westus3', 'swedencentral'])
@metadata({
  azd: {
    type: 'location'
  }
})
param location string

param resourceGroupName string = ''
param webappName string = 'webapp'


// Tags that should be applied to all resources.
// 
// Note that 'azd-service-name' tags should be applied separately to service host resources.
// Example usage:
//   tags: union(tags, { 'azd-service-name': <service name in azure.yaml> })
var tags = {
  'azd-env-name': environmentName
}
var abbrs = loadJsonContent('abbreviations.json')
var resourceToken = toLower(uniqueString(subscription().id, environmentName, location))


resource rg 'Microsoft.Resources/resourceGroups@2022-09-01' = {
  name: 'rg-${environmentName}'
  location: location
  tags: tags
}

// The application webapp
module webapp './modules/staticwebapp.bicep' = {
  name: 'webapp'
  scope: rg
  params: {
    name: !empty(webappName) ? webappName : '${abbrs.webStaticSites}web-${resourceToken}'
    location: location
    tags: union(tags, { 'azd-service-name': webappName })
    sku: {
      name: 'Standard'
      tier: 'Standard'
    }
  }
}

