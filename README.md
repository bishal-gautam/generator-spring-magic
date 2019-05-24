# generator-spring-magic
Yeoman generator for creating very basic web application with Spring MVC and Tomcat.
##### Create a basic spring web application in just 2 seconds !! 



## Prerequisites
   - npm (https://www.npmjs.com/get-npm)
   - yo  (just run: `npm install -g yo`)
   


## Installing spring-magic
`generator-spring magic` can be installed from npm, running following commad (after having all prerequisites in machine):

```
npm install -g generator-spring-magic
```



## Uses
### Quick set-up spring-boot web application ( 2 seconds [magic])
we can trigger generator to generate basic spring-boot web application with following command:

```
yo spring-magic [your-app-name]
```

By doing this, `spring-magic` will generate a spring web project with following properties:
project name: `[your-app-name]`
base name (artifact-id): `[your-app-name]`
goup-id:`com.example.[your-app-name]`


### Set-up spring-boot web application answering 2 questions [magic]
we can generate spring-boot web application with few propeties provided by user with following command:

```
yo spring-magic
```

By doing this, `spring-magic` will ask you following questions:
1. What is the name of your project (or artifact)?
2. What is your group Id for your package?
Based upon our answer, it will generate spring-boot web application with mentioned properties.


After project generation, open it with intelliJ and build and run the project. 
If everything goes well, we will see a running web application at: `http://localhost:8080/`

# Thanks for reading !!
