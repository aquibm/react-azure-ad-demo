# react-azure-ad-demo

DEMO: [http://react-ad.aquibm.com/](http://react-ad.aquibm.com/)

How to get started:

1. Copy .env.sample and rename to .env.local
1. Create Azure Active Directory
1. Register a new App under Azure Active Directory
1. Navigate to App and Click on Manifest, set oauth2ImplicitFlow to true, Add your apps reply URL to the list of reply URL's in the manifest.
1. Add user to Azure Active Directory
1. Add the user to the App in Azure Active Directory
1. Navigate to App in Azure Active Directory, select 'Permissions' and click on 'Grant Permissions". (This will grant the selected users permission to the App).
1. Navigate to App in Azure Active Directory and Click on Manifest, Copy the 'IdentifiedUrl', paste it into the REACT_APP_AUTH_TENANT field in the .env.local file of your solution. Remember to remove the "http://" part from the value.
1. Copy the ApplicationId of the App in Azure Active Directory and paste it into the REACT_APP_AUTH_CLIENT_ID value in the .env.local file of your solution.

Your .env.local should look something like this:
![alt text](https://image.ibb.co/e4CVz5/80BD9A62.png)

Done!
