import numpy
import os
import threading
import time
import requests
import json


from pypot.server.httpserver import HTTPRobotServer

from functools import partial

from poppy.creatures import AbstractPoppyCreature

from attach_primitive import attach_primitives

from pypot.robot import from_json


class Cherry(AbstractPoppyCreature):
    @classmethod
    def setup(cls, config):
        
        print "Robot setup started :"
        try:
            robot = from_json(config)
        except:
            print "Unable to configure the robot"
        else:
            print "Robot configuration successful !"
        print "Starting motors configuration"
            
        for m in robot.motors:
            m.compliant_behavior = 'dummy'
            m.goto_behavior = 'minjerk'
            m.moving_speed = 70
        
        for m in robot.motors:
            m.compliant = False
            m.goal_position = 0
            print m

        for m in robot.head:
            m.compliant = True

        try:
            attach_primitives(robot)
        except:
            print "Primitives not attached "
        else:
            print "Primitives attached successfully"

        try:
            robot.test_gtts.start()
        except:
            print "Something goes wrong with gTTS"
        else:
            print "gTTS OP"
        return robot

        #   try:
        # robot.send_ip.start(name)
        #   except:
        # print "Unable to send ip to the server"

        # robot._primitive_manager._filter = partial(numpy.sum, axis=0)
        #cls._name = "cherry" # Doesn't work, i have to find why
        # name = "cherry"
        # if False:
        #     cls.vrep_hack(robot)
    @classmethod
    def serve(cls,robot,ip):
        try:
            server = HTTPRobotServer(robot, host=ip, port=8000)
        except:
            print "Unable to create server object"
        else:
            print "Server configuration done"
        try:
            threading.Thread(target=lambda: server.run()).start()
        except:
            print "Unable to start server"
        else:
            print "server started successfully"
    @classmethod
    def connect(cls,server_ip):
        name = "kevin"
        print "Starting to ping the server"

        response = os.system("ping -c 1 " + server_ip)
        if response != 0:
            while response != 0:
                response = os.system("ping -c 1 " + server_ip)
                time.sleep(5)

        print "http://"+server_ip+":8080/setup?id="+name
        
        try: 
            requests.get("http://"+ip+":8080/setup?id="+name)
        except:
            print "Request error"


