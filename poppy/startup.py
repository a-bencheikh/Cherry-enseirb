import threading

from cherry import Cherry
from pypot.server.httpserver import HTTPRobotServer

robot = Cherry.setup('config.json')

server = HTTPRobotServer(robot, host='127.0.0.1', port=8080)
# We launch the server inside a thread
threading.Thread(target=lambda: server.run()).start()

