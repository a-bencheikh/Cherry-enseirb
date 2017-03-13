# Robot Poppy
Robot poppy-torso written in python, offering a rest api & primitives to be used by the controller (cloud server)

## Installation

### Anaconda 2[Download](https://www.continuum.io/downloads)
-Install anaconda for python 2.7 (Poppy python dev version)

### Poppy[Installation doc](https://docs.poppy-project.org/en/installation/install-poppy-softwares.html)
-pip install poppy-torso --user -U


### Python depedencies
-pip install pypot
-pip install pygame
-pip install gtts
-pip install speechrecognition
-pip install boto3

### Any other depedencies (working on a cleaner way)
- cd poppy/
```
$ python
>>> import cherry
```
- Then install needed depedencies for cherry to import

## Usage

1. cd poppy/
```
$ sudo python
>>> import threading
>>> from cherry import Cherry
>>> from pypot.server.httpserver import HTTPRobotServer

>>> robot = Cherry.setup('config.json')

>>> server = HTTPRobotServer(robot, host='127.0.0.1', port=8080)

>>> threading.Thread(target=lambda: server.run()).start()
```

### WORK IN PROGRESS ....

## API [LINK](https://github.com/poppy-project/pypot/blob/master/REST-APIs.md)

### Primitive

|  | HTTP | JSON | Example of answer |
|-----------------------------------|:-------------------------------------------------:|:--------------------------------------------------------------------------------------------------------------------------------------------:|:----------------------------------------------------------------------:|
| Get the primitives list | GET /primitive/list.json | {"robot": {"get_primitives_list": ""}} | {'primitives': ["stand_up", "sit", "head_tracking"]} |
| Get the running primitives list | GET /primitive/running/list.json | {"robot": {"get_running_primitives_list": ""}} | {'primitives': ["head_tracking"]} |
| Start a primitive | GET /primitive/\<prim>/start.json | {"robot": {"start_primitive": {"primitive": "<prim>"}}} | {} |
| Stop a primitive | GET /primitive/\<prim>/stop.json | {"robot": {"stop_primitive": {"primitive": "<prim>"}}} | {} |
| Pause a primitive | GET /primitive/\<prim>/pause.json | {"robot": {"pause_primitive": {"primitive": "<prim>"}}} | {} |
| Resume a primitive | GET /primitive/\<prim>/resume.json | {"robot": {"resume_primitive": {"primitive": "<prim>"}}} | {} |
| Get the primitive properties list | GET /primitive/\<prim>/property/list.json | {"robot": {"get_primitive_properties_list": {"primitive": "<prim>"}}} | {"property": ["filter", "smooth"]} |
| Get a primitive property value | GET /primitive/\<prim>/property/<prop> | {"robot": {"get_primitive_property": {"primitive": "<prim>", "property": "<prop>"}}} | {"sin.amp": 30.0} |
| Set a primitive property value | POST /primitive/\<prim>/property/<prop>/value.json | {"robot": {"set_primitive_property": {"primitive": "<prim>", "property": "<prop>", "args": {"arg1": "val1", "arg2": "val2", "...": "..."}}}} | {} |
| Get the primitive methods list | GET /primitive/\<prim>/method/list.json | {"robot": {"get_primitive_methods_list": {"primitive": "<prim>"}}} | {"methods": ["get_tracked_faces", "start", "stop", "pause", "resume"]} |
| Call a method of a primitive | POST /primitive/\<prim>/method/\<meth>/args.json | {"robot": {"call_primitive_method": {"primitive": "<prim>", "method": "<meth>", "args": {"arg1": "val1", "arg2": "val2", "...": "..."}}}} |  |
