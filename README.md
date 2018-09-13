# node-lab

## Installing node on a debian based system

```bash
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt-get install -y build-essential
```
## Verifying installation along with the node.js version

```bash
node --version
```
## Installing express-generator to create a scaffolding for your express app

```bash
npm install -g express-generator
express --view=ejs newapp
cd newapp/
npm install
DEBUG=newapp:* npm start
# open the following URL in the browser: http://localhost:3000/
```