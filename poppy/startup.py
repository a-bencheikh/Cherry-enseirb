from cherry import *
robot=Cherry.setup('config.json')
Cherry.serve(robot,'127.0.0.1')
Cherry.connect('127.0.0.1')

