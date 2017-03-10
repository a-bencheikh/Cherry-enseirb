import threading

from cherry import Cherry

robot = Cherry.setup('config.json')

from pypot.server.httpserver import HTTPRobotServer

server = HTTPRobotServer(robot, host='127.0.0.1', port=8080)
# We launch the server inside a thread
threading.Thread(target=lambda: server.run()).start()
#https://github.com/poppy-project/pypot/blob/master/REST-APIs.md