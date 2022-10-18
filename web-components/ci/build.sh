#git clone -b feature/UIG-2122-setup https://github.com/milieuinfo/uig.git
#
cd web-components
#
echo "npm install"
npm install
echo "running test - npx nx test"
npx nx test
echo "running build - npx nx build"
npx nx build
echo "running Cypress tests - npm run storybook:ci-test"
npm run storybook:ci-test
