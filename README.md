# EWD.js
 
Node.js-based Application Framework for MongoDB, Cach&#233;, GlobalsDB and GT.M

Rob Tweed <rtweed@mgateway.com>  
9 May 2014, M/Gateway Developments Ltd [http://www.mgateway.com](http://www.mgateway.com)  

Twitter: @rtweed

Google Group for discussions, support, advice etc: [http://groups.google.co.uk/group/enterprise-web-developer-community](http://groups.google.co.uk/group/enterprise-web-developer-community)


## Installing EWD.js

Create a directory for your EWD.js environment, eg *~/ewdjs*

Then, assuming you've already installed Node.js:

       cd ~/ewdjs
       npm install ewdjs

Modify that first *cd* command as appropriate for your system.

In the *node_modules/ewdjs* directory that has now been created, you'll find a file named *install.js*.  It is 
recommended that you run this in order to create the run-time environment and to move the files in
the repository to their correct run-time destinations.  So run the following:

       cd node_modules/ewdjs
       node install


## Running EWD.js
	
After you run the install file, you'll find a number of pre-built example startup files for the various
databases and operating systems on which the databases are supported.  For example, to start up EWD.js 
for use with the GT.M database (which runs on Linux):

      cd ~/ewdjs
      node ewdStart-gtm

Again, modify that first *cd* command as appropriate for your system.

You may need to edit the startup file to specify a different webServer port, external listener port,
child processes pool size, custom directories etc.
   
##Documentation

For full information on EWD.js, how to install, configure and run it, and how to build EWD.js applications,  
see: [http://gradvs1.mgateway.com/download/EWDjs.pdf]
(http://gradvs1.mgateway.com/download/EWDjs.pdf)


## License

 Copyright (c) 2013-14 M/Gateway Developments Ltd,                           
 Reigate, Surrey UK.                                                      
 All rights reserved.                                                     
                                                                           
  http://www.mgateway.com                                                  
  Email: rtweed@mgateway.com                                               
                                                                           
                                                                           
  Licensed under the Apache License, Version 2.0 (the "License");          
  you may not use this file except in compliance with the License.         
  You may obtain a copy of the License at                                  
                                                                           
      http://www.apache.org/licenses/LICENSE-2.0                           
                                                                           
  Unless required by applicable law or agreed to in writing, software      
  distributed under the License is distributed on an "AS IS" BASIS,        
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
  See the License for the specific language governing permissions and      
   limitations under the License.      
