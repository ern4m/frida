import time
import json
from flask import Flask

app = Flask(__name__)

@app.route('/time')
def get_current_time():
    print("get")
    return {"time": time.time()}
