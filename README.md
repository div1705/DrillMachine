# DrillMachine
 This project involved configuring an Edison board with two sensors, Grove 6 Axis Accelerometer And Compass V2.0 and an LED module. They were to receive data from a 6 axis accelerometer and pushed onto a cloud node red application running on IBM Bluemix. The Cloud Node-Red app was further used to create a dashboard containing a Gauge which showed values to further figure out angles that work perfectly for the Drill Machine. This code was compiled on an integrated development environment, Intel XDK.



# ReadMe
Intel® XDK IoT Blank Node.js\* App 
===================================

See [LICENSE.md](LICENSE.md) for license terms and conditions.

This application is distributed as part of the
[Intel® XDK](http://xdk.intel.com).

For help getting started developing applications with the
Intel XDK, please start with
[the Intel XDK documentation](https://software.intel.com/en-us/xdk/docs).

See also, the
[mraa library documentation](https://iotdk.intel.com/docs/master/mraa/index.html)
for details regarding supported boards and the mraa library API and the
[upm library documentation](https://iotdk.intel.com/docs/master/upm/) for
information regarding the upm sensor and actuator library APIs.

App Overview
------------

This project folder contains files
needed for an Intel XDK Node.js IoT app. The development process assumes that
the target device is running a compatible version of
[Node.js](http://nodejs.org) and is accessible to the Intel XDK via a network
connection.

Important App Files
-------------------

* main.js
* package.json

Important Project Files
-----------------------

* README.md
* LICENSE.md
* \<project-name\>.xdk

Tested IoT Node.js Platforms
----------------------------

* [Intel® Galileo Board for Arduino](http://intel.com/galileo)
* [Intel® Edison Board for Arduino](http://intel.com/edison)
* [Intel® Joule™ 570x Developer Kit](http://intel.com/joule)
* [Intel® NUC DE3815] + [Arduino 101](http://intel.com/arduino)
* [Intel® NUC5i7RYH] + [Arduino 101](http://intel.com/arduino)

[Intel® NUC DE3815]: http://ark.intel.com/products/78577/Intel-NUC-Kit-DE3815TYKHE
[Intel® NUC5i7RYH]: https://ark.intel.com/products/87570/Intel-NUC-Kit-NUC5i7RYH

> See the [Intel® NUC support page](http://www.intel.com/nucsupport)
> and the [Intel Product Specifications](http://ark.intel.com/) search tool
> for detailed hardware specifications and support.

This template can be used with any IoT [Node.js](http://nodejs.org)
development platform that supports Linux and Node.js. The IoT device
includes the appropriate sensor hardware needed by your app. 

[1]: https://software.intel.com/en-us/xdk/docs/target-device-software-prereqs
