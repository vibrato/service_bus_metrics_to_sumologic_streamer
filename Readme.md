# What is this repository?

Export Service bus metrics to Sumologic

## Deploy from Local Machine (Linux/mac)

### Requirements

 - Azure cli
 - Azure login (Connection to your Azure subscription)
 - npm

***if the azure connection is working, you should be able to see your account detail by running azure*** `az account show`

```
{
  "environmentName": "AzureCloud",
  "id": "xxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "isDefault": true,
  "name": "Free Trial",
  "state": "Enabled",
  "tenantId": "xxxxxxxxxxxxxxxxxxxxxxxx",
  "user": {
    "name": "your@email.com",
    "type": "user"
  }
}
```

### Steps

 - convert env.tpl to env.sh
 - replace "YOURVALUE" with your appropriate value
 - npm test
