# check-in
A very basic backend for checking in users of a gym or event. Smartwaiver, while a wonderful tool has several issues. The goal of this project is to build an open source simple tool for keeping track of attendence and waiver signing.
## Installation (linux)
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
## Commands
1. `get @ http://localhost:3000/users` get list of users
2. `post @ http://localhost:3000/users` add a user to the list using the body. For example:  
```
{ 
    "Last_name": "Shmoe", 
    "First_name": "Joe" 
}
```
3. `get @ http://localhost:3000/users/:userId` get an individual user
4. `put @ http://localhost:3000/users/:userId` update a user using the body. For example:  
```
{
	"Last_name": "Shmoe",
	"First_name": "Joe",
	"Lead": "Training",
	"Setter": "Certified",
	"Top_Rope": "First Check"
}
```
5. `delete @ http://localhost:3000/users/:userId` delete a user  
## Storage
User information:
* First name
* Last name
* Date created
* Last checkin date
* Top rope: `['Not Certified', 'First Check', 'Second Check', 'Certified']`  
default: `'Not Certified'`
* Setter: `['Not Certified', 'Training', 'Certified']`  
default: `'Not Certified'`
* Lead: `['Not Certified', 'Training', 'Certified']`  
default: `'Not Certified'`