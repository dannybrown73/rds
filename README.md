# rds-docs
Let my heart be still a moment and this mystery explore...

## Getting Started

### Clone repo

Clone this repo [ https://github.com/ravendesignsystem/rds.git ] into the directory you need it to be in.

### Install Dependencies

#### Install NPM packages 

From `package.json` run `npm install`.

#### Install Sculpin

Install all packages from `composer.json`.


## Running RDS Locally

- To launch Sculpin, run the `npm run sculpin`.
- In a new terminal, run `npm run watch` to invoke the Laravel Mix watch.

## FIX Post-CSS module  

For some reason the 

Go to /node_modules/css-mqpacker/index.js:139 and remove the `...options` line.

So lines 136-139 should look like this:

```module.exports = postcss.plugin(pkg.name, options => {
     const opts = {
       sort: false
     };
 ```
     
Danny has submitted an issue to the maintainer. Weird. 

TODO - resolve this.

### Break down into end to end tests

TODO

## Deployment

TODO

## RDS Built With

* [SCSS](https://sass-lang.com) - CSS superpower provider used
* [Love](https://i.redd.it/qh713wbo4r8y.jpg) - <3

## Documentation Website Built With

TODO

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* TODO

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* We've stood on the backs of giants for sure.
* Inspiration
* TODO
