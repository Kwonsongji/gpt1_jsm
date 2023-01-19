## bcryptjs :
- Hash le mdp dans la db for security 

## .compareSync():
- comprend 2 params : 
  * le mdp entré par le user : req.body.password, 
  * le mdp hashé dans la db : user.password