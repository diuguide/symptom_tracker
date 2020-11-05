# [Myriad](https://symptomtracker2.herokuapp.com/)

![GitHub top language](https://img.shields.io/github/languages/top/diuguide/symptom_tracker)
[![GitHub license](https://img.shields.io/github/license/diuguide/symptom_tracker)](LICENSE)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)

An [express-sequelize-passport app](https://symptomtracker2.herokuapp.com/) that allows the user to track certain symptoms for trending.

<a href="https://symptomtracker2.herokuapp.com/">
<img src="./public/images/home.png" width="350">
</a>

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [Credits](#credits)
- [License](#license)

## Installation

If you want to set up your own instance of this app, please follow the following steps.

1. clone this repository using either **ssh**...

```terminal
git clone git@github.com:diuguide/symptom_tracker.git
```

...or clone using **https**.

```terminal
git clone https://github.com/diuguide/symptom_tracker.git
```

2. run ```npm i``` in the cloned repository's root directory to install the node module dependencies.

1. In the config.json file, update the "development" password & database name to match your local mysql server information. You may need to create your database if this is the first time setting up a local instance of this app, in which case, make sure the database name you create matches the one you add to the config.json file.

1. Start the server by running ```node server.js``` or ```nodemon server.js```. If everything worked correctly, you should be able to see the landing page when navigating to <localhost:8080>.

[back to Table of Contents](#table-of-contents)

## Usage

To use the app, navigate to <https://symptomtracker2.herokuapp.com/> please follow the following steps.

1. Create an account with your email and a strong password on the signup form. You will be automatically redirected to the user homepage upon account creation.

1. Click the ```Daily Check-In``` link and fill out the form to submit your first day of symptom data. You can update the data entered by simply filling out the form and resubmitting.

1. Click the ```Export Data``` link to download a copy of all your submitted data to a csv file.

1. Any data you have provided over the past 7 days will be displayed to you in a convenient table below the maroon jumbotron. A cyan block indicates you reported having that symptom on that day. Click the ```Note``` button to see that day's note in a modal.

1. Click the ```Logout``` link to logout of the app and be returned to the landing page.

1. To log back in, simply enter the information on the login form you provided during signup to access your account again.

[back to Table of Contents](#table-of-contents)

## Contributing

Your contribution is most welcome! Please refer to the contributing guidelines when making contributions to this project.

Please note that this project is released with a [Contributor Code of Conduct](code_of_conduct.md). By Participating in this project, you agree to abide by its terms.

[back to Table of Contents](#table-of-contents)

## Tests

```npm test``` performs ESlint to ensure our coding best practices are followed.

[back to Table of Contents](#table-of-contents)

## Questions

Please direct any and all questions to any of the contributors of this project.

[back to Table of Contents](#table-of-contents)

## Contributors

- [diuguide](https://github.com/diuguide)
- [thadkingcole](https://github.com/thadkingcole)
- [summerhealey](https://github.com/summerhealey)

[back to Table of Contents](#table-of-contents)

## License

[MIT](LICENSE) copyright (c) 2020 Everett Diuguid, Thaddeus Cole, Summer Healey.

[back to Table of Contents](#table-of-contents)
