# mini-project

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

Mini project - Completed

Created a new express server. The server will give api's that perform the CRUD operation in the underlying 
Postgresql database. Databse has students, marks and subjects tables.
 
Redis server is set up to cache the information of the students details and it will  update the redis datastore whenever a change happened in the students details. 

A cron is set up to update the class, subject and student average for every minute (can be configured to get update every week)

Created a User Interface using vue for performing CRUD operations.


Student Details Page

<img width="1440" alt="Pasted Graphic" src="https://user-images.githubusercontent.com/65884897/160905757-a1dfd52e-6d9e-4d54-a91e-03bd5dbb0454.png">


Add Student Page

<img width="1440" alt="Pasted Graphic 1" src="https://user-images.githubusercontent.com/65884897/160905817-53bb9fbe-336a-4f55-bbf5-86662c648033.png">


Edit Student Page

<img width="1440" alt="Pasted Graphic 2" src="https://user-images.githubusercontent.com/65884897/160905846-cfc348d5-cc0c-4d9c-8270-3f5807becef3.png">


Subject Details Page

<img width="1440" alt="Pasted Graphic 3" src="https://user-images.githubusercontent.com/65884897/160905866-9053d2cc-ed91-4fc4-a462-39c1a134d973.png">



Add Subject Page

<img width="1440" alt="Pasted Graphic 4" src="https://user-images.githubusercontent.com/65884897/160905886-d6f283ea-5d5a-4526-aa40-da6ce9e3565b.png">



Edit Subject Page

<img width="1440" alt="Pasted Graphic 5" src="https://user-images.githubusercontent.com/65884897/160905909-36fe5ad1-ce7b-4949-9127-b5a124e08565.png">



Marks Details Page

<img width="1440" alt="Pasted Graphic 6" src="https://user-images.githubusercontent.com/65884897/160905934-126ddd6d-d50b-48b7-ac46-285f63f0ffcb.png">


Edit Marks Page

<img width="1440" alt="Pasted Graphic 7" src="https://user-images.githubusercontent.com/65884897/160905944-bd53df56-2c3c-4280-9b4f-4fed4ac88fcf.png">


Average Details Page

<img width="1440" alt="Pasted Graphic 8" src="https://user-images.githubusercontent.com/65884897/160905970-c025fb7c-37e9-4cab-9c06-ed4d7778265f.png">

