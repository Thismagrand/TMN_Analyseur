import inspect
from batdetect2 import BatDetect2API

print(inspect.signature(BatDetect2API.process_files))
print(inspect.getsource(BatDetect2API.process_files))