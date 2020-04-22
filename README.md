# check-in
A very basic backend for checking in users of a gym or event. Smartwaiver, while a wonderful tool has several issues. The goal of this project is to build an open source simple tool for keeping track of attendence and waiver signing.
## Installation
### Install dependencies (linux)
```bash
sudo apt-get install nodejs
sudo apt-get install npm
sudo apt install mongodb
git clone https://github.com/BenjaminCCross/check-in.git
cd check-in
npm install
```
## Usage
1. To launch the program simply cd into the cloned directory. 
2. Ensure mongoDB is running with `sudo systemctl status mongodb`. The output should say that it is "active". 
3. Then use the `npm run start` command to launch the server. The output should say "check-in RESTful API server started on: 3000". The server is now active. 
4. To stop the server you can kill it with ctrl+c universal stop. 