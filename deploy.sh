echo "Switching to branch master"
git checkout master

echo "Bilding app..."
npm run build

echo "Deploying files to server..."
scp -R build/* stywork@184.168.30.68:/var/www/184.168.30.68/

echo "Done!"