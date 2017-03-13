# Server

## Installation

### Eclipse [Download page](https://www.eclipse.org/downloads/)
- install eclipse neon
- go to help/markeplace & install Buildship Gradle + Spring IDE
- go to Window/Perspective/Open Perspective/Other.../Spring then click OK
- Open the server/ folder into eclipse

### Gradle
- install gradle 3.4.1 : (Not by apt-get)
	1. curl -s "https://get.sdkman.io" | bash
	2. sudo apt install unzip
	3. source "$HOME/.sdkman/bin/sdkman-init.sh"
	4. sdk install gradle 3.4.1
Done !

## Usage 

### Eclipse
- right click on project run as/java application/Cherry.application(NOT tomcat)
- Be careful to stop the server to avoid adress already in
Done !!

### Create a runnable Jar
- cd to server/
- gradle clean
- gradle build
Done 

- Open your favorite web browser ( not Internet Explorer plz... )
- type localhost:8080

### End points

COMMING SOON !!! 