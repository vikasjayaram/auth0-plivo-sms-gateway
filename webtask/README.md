# Using Webtask for a custom Passwordless connection in Auth0


### Version
1.0.0


# Initial Setup & Configuration
```bash
# Create a new wt-cli profile
npm install -g wt-cli
wt init

# Or, if you already use wt-cli:
wt profile ls
```


### Setup & Initialization

- Copy the .env-webtask.sample to .env


```sh
$ wt create webtask.js --name {WEBTASK_NAME} --secrets-file .env-webtask --profile {WEBTASK_PROFILE}
```
