var Generator = require('yeoman-generator');
const chalk = require('chalk'); // for colorful display
const ejs = require('ejs'); // for replacing template

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);

        //argument is optional
        this.argument('appName', {
             type: String,
             required: false
         });

         this.appName = this.options['appName'];
         this.askQuestions = (this.appName == null) ? true : false;
         this.log(this.appName);
         this.log(this.askQuestions);
    }

    initializing() {
        this.log(chalk.white('Welcome to spring-magic generator!!'));
        if (this.askQuestions == false) {
            this.log(chalk.green(`Your ${this.appName} is on the way.....`));
        }
    }

    prompting() {
        if (this.askQuestions == true) {
           const done = this.async();
           const prompts = [
           {
              type: 'input',
              name: 'baseName',
              message: '(1/2) What is the name of your project (or artifact)? ',
              default: 'magic'
            },
            {
              type: 'input',
              name: 'groupId',
              message: '(2/2) What is your group Id for your package?',
              default: 'com.example'
            }
         ];
         this.prompt(prompts).then(props => {
              this.baseName = props.baseName;
              this.groupId = props.groupId;
              done();
         });
       }
    }

    configuring() {
        if (this.askQuestions == false) {
            this.baseName = this.appName;
            this.groupId = 'com.example';
        }
        this.appName = this.baseName;
        this.packageName = `${this.groupId}.${this.baseName}`;
        this.packageNameDirectory = this.packageName.replace(/\./g, '/');
    }

    writing() {
        
        this.fs.copyTpl(
            this.templatePath('pom.xml'),
            this.destinationPath(`${this.appName}/pom.xml`), {
               packageName: this.packageName,
               baseName: this.baseName
            }
        );
        
        this.fs.copyTpl(
            this.templatePath('src/main/resources'),
            this.destinationPath(`${this.appName}/src/main/resources`), {
                packageName: this.packageName,
                baseName: this.baseName
            }
        );
        
        this.fs.copyTpl(
            this.templatePath('src/main/java/package'),
            this.destinationPath(`${this.appName}/src/main/java/${this.packageNameDirectory}`), {
                packageName: this.packageName,
                baseName: this.baseName
            }
        );

        this.fs.copyTpl(
            this.templatePath('src/test/java/package'),
            this.destinationPath(`${this.appName}/src/test/java/${this.packageNameDirectory}`), {
                packageName: this.packageName,
                baseName: this.baseName
            }
        );

        this.succes = true;
    }

    end() {
        if (this.succes == true) {
            this.log(chalk.blue(`Congratulations!! Your spring web project ${this.appName} is now ready to use!!`));
        }
    }
}