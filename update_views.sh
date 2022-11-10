# to be executed from the root level 
VHCOMMIT=e3a72c3d4b1f675ceeab35c106ffed7a78928e18
# update visualizer and install dependencies
cd html/visualizer  && rm -rf visualizer && rm -rf src
wget https://github.com/NPellet/visualizer/archive/refs/heads/master.zip && unzip master.zip
cd visualizer-master && npm i --force  && cd ..
mv visualizer-master/src . 
rm  src/node_modules && mv visualizer-master/node_modules src/ && rm -rf visualizer-master && rm master.zip
cd .. 
# update helper (https://github.com/cheminfo-js/visualizer-helper)
rm -rf github
wget https://github.com/cheminfo-js/visualizer-helper/archive/${VHCOMMIT}.zip && unzip ${VHCOMMIT}.zip
mv visualizer-helper-${VHCOMMIT} helper && rm ${VHCOMMIT}.zip
mkdir -p github/cheminfo-js/visualizer-helper && mv helper github/cheminfo-js/visualizer-helper/${VHCOMMIT}