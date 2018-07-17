echo export QUEUE_NAME="YOURVALUE" >> ~/.bashrc
echo export CONNECTION_STRING=\"$(az servicebus namespace authorization-rule keys list --resource-group "YOURVALUE" --namespace-name "YOURVALUE" --name RootManageSharedAccessKey --query primaryConnectionString --output tsv)\" >> ~/.bashrc
echo export ENDPOINT="YOURVALUE" >> ~/.bashrc
echo export SESSIONKEY="YOURVALUE" >> ~/.bashrc
echo export SOURCENAME="YOURVALUE" >> ~/.bashrc
echo export SOURCECATEGORY="'YOURVALUE'" >> ~/.bashrc
