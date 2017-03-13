# Server
Cloud controller written in java & spring using Gradle

## Installation

### Eclipse [Download page](https://www.eclipse.org/downloads/)
- install eclipse neon
- go to help/markeplace & install Buildship Gradle then Restart Eclipse
- go to help/markeplace & Spring IDE then Restart Eclipse
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
- right click on project run as/java application/Cherry.application(NOT tomcat !)
- Be careful to stop the server to avoid address already in use
Done !!

### Gradle (Creating a runnable jar then running it)
- cd to server/
- gradle clean
- gradle build
- java -jar build/libs/cherry-rest-service-X.X.X.jar
- Ctrl+C to stop
Done 

- Open your favorite web browser ( not Internet Explorer plz... )
- type localhost:8080

### End points

COMMING SOON !!! 