## GitHub Guide

### Steps to setup the Project in your local system
* Fork the repository
* Execute ```git clone https://github.com/<username>/BooxWooxBlogs``` in terminal/cmd : Replace ```<username>``` with your own username
* Open it in your preferred tect editor.


Note: ```dev``` is the default branch. Don't make any changes directly in the dev branch.

### Steps to follow to start work in an Issue
* ```git checkout dev```
* ```git pull upstream dev```
* ```git push origin dev```
* ```git checkout -b <new_branch_name>```
Make your required changes in this new branch.
* ```git add .```
* ```git commit -m "Your commit message goes here"```
* ```git push origin main```


#### SUppose some changes are requested or you want to make some more chnages in the current branch(other than dev)
* ```git checkout <branch_name>```
* ```git pull origin <branch_name>```
*Make the suggested changes
* ```git add .```
* ```git commit -m "Your commit message"```
* ```git push origin main```
