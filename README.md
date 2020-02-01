1) Once download/clone this repo, just give npm install from the client folder.

2) Then you can find node_modules folder within the client folder

3) the thrid step just give ng serve within the client folder

4) once navigate to http://localhost:4200/home, you can find the below screen shot


![homepage](https://user-images.githubusercontent.com/58880555/73591985-3262f100-451b-11ea-8367-ac1454efa4c9.png)

5) If you click profile button under any profile or submit the form on the top of the page, you can navigate to the below screen shot

![user1](https://user-images.githubusercontent.com/58880555/73591986-35f67800-451b-11ea-9d0b-88d8a815a85e.png)


Node JS api

  1) I have done 3rd task that you have mentioned in the task pdf
  
  2) In the github project root folder just run npm install from the command 
  
  3) Then you can find node_modules folder within the client folder
  
  4) just to to insert the below mongodb query
  
    db.categories.insertMany([{name:'category5',is_active:1},{name:'category6',is_active:1}]) - for categpries schema
    
    In the below query replace category schema id from the categories schema
    
    db.products.insertMany([{name:'product1',category_id:ObjectId("category schema id"), is_active:1},{name:'product2',category_id:ObjectId("category schema id"),is_active:1}])
    
    
  5) just run http://localhost:5000/api/category/list where you can find number of products associated to that category as response.
