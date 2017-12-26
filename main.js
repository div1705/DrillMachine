
var sensorObj = require('jsupm_lsm303d');
var mraa = require("mraa") ;



console.log(mraa) ;     // prints mraa object to XDK IoT debug output panel
var sensor = new sensorObj.LSM303D();
var ledSensor = require('jsupm_led');
var led = new ledSensor.Led(2);
var MAC = 'DM_IOT_101';
var mqtt    = require('mqtt');

var ORG = 'red49e';
var TYPE = 'Drill_Machine';
var ID = 'DM_IOT_101';
var AUTHTOKEN = 'AbNRQYUI(1cvX2GqF5';

var PROTOCOL = 'mqtt';
var BROKER = ORG + '.messaging.internetofthings.ibmcloud.com';
var PORT = 1883;
var TOPIC = 'iot-2/evt/status/fmt/json';
//Create the url string
var URL = PROTOCOL + '://' + BROKER;
URL += ':' + PORT; 
//URL is e.g. 'mqtt://xrxlila.messaging.internetofthings.ibmcloud.com:1883'

var CLIENTID= 'd:' + ORG;
CLIENTID += ':' + TYPE;
CLIENTID += ':' + ID;

var AUTHMETHOD = 'use-token-auth';

var client  = mqtt.connect(URL, { clientId: CLIENTID, username: AUTHMETHOD, password: AUTHTOKEN });

var battery_voltage = [60,65,70,55,73,63,69,80,47,50];
var drill_current = [5,7,11,8,9,12,13,14,15,17];
var device_id="DM_IOT_101";
 
var drill_angle = [30,35,42,44,49,53,57,59,60,60];
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
var hole_id = 20;
var time_stamp=new Date();
var counter1 =0;

// Counter to select from array.
//var counter1 = context.get('counter1')||0;
counter1 = counter1+1;
if(counter1 > 9){
  counter1 = 0;  
} 



 
// now output data every 300 milliseconds
client.on('connect', function () {
setInterval(function()
{
    // update our values from the sensor
    sensor.update();
    var data = sensor.getAccelerometer();
    console.log("Accelerometer x: "
                + data.get(0)
                + " y: " + data.get(1)
                + " z: " + data.get(2)
                + " g");

   var data1 = sensor.getMagnetometer();
    console.log("Magnetometer x: "
                + data1.get(0)
                + " y: " + data1.get(1)
                + " z: " + data1.get(2)
                + " uT");

    console.log("Temperature: "
                + sensor.getTemperature());

var data_x_= data.get(0)*100;
var data_y_= data.get(1)*100;   
var data_z_= data.get(2)*100;  
    
    if (data_x_ <= 0 ){
        
        data_x= (data_x_)*(-1); 
        //data_y= (data_y_)*(-1);
        //data_z= (data_z_)*(-1);
        
    }
    else
        {
            data_x=data_x_;
            //data_y=data_y_;
            //data_z=data_z_;
            
        }
    data_x = parseInt(data_x)-8; // removing sensor error
    console.log("angle_x: " + data_x);
    //console.log("angle_y: " + data_y);
    //console.log("angle_z: " + data_z);
    
    // Create MQTT message in JSON

    msg ={
         "device_id":device_id,
         "measurements":[
{  "id_hole":hole_id,"battery_voltage":getRndInteger(40,80), "drill_current":getRndInteger(5,17),"drill_angle":data_x,
                        "time_stamp":time_stamp    },
            {  "id_hole":hole_id,"battery_voltage":getRndInteger(40,80), "drill_current":getRndInteger(5,17),"drill_angle":data_x,
                        "time_stamp":time_stamp    },
             {  "id_hole":hole_id,"battery_voltage":getRndInteger(40,80), "drill_current":getRndInteger(5,17),"drill_angle":data_x,
                        "time_stamp":time_stamp    },
             {  "id_hole":hole_id,"battery_voltage":getRndInteger(40,80), "drill_current":getRndInteger(5,17),"drill_angle":data_x,
                        "time_stamp":time_stamp    },
             {  "id_hole":hole_id,"battery_voltage":getRndInteger(40,80), "drill_current":getRndInteger(5,17),"drill_angle":data_x,
                        "time_stamp":time_stamp    },
             {  "id_hole":hole_id,"battery_voltage":getRndInteger(40,80), "drill_current":getRndInteger(5,17),"drill_angle":data_x,
                        "time_stamp":time_stamp    },
             {  "id_hole":hole_id,"battery_voltage":getRndInteger(40,80), "drill_current":getRndInteger(5,17),"drill_angle":data_x,
                        "time_stamp":time_stamp    },
             {  "id_hole":hole_id,"battery_voltage":getRndInteger(40,80), "drill_current":getRndInteger(5,17),"drill_angle":data_x,
                        "time_stamp":time_stamp    },
             {  "id_hole":hole_id,"battery_voltage":getRndInteger(40,80), "drill_current":getRndInteger(5,17),"drill_angle":data_x,
                        "time_stamp":time_stamp    },
             {  "id_hole":hole_id,"battery_voltage":getRndInteger(40,80), "drill_current":getRndInteger(5,17),"drill_angle":data_x,
                        "time_stamp":time_stamp    },
             {  "id_hole":hole_id,"battery_voltage":getRndInteger(40,80), "drill_current":getRndInteger(5,17),"drill_angle":data_x,
                        "time_stamp":time_stamp    },
             {  "id_hole":hole_id,"battery_voltage":getRndInteger(40,80), "drill_current":getRndInteger(5,17),"drill_angle":data_x,
                        "time_stamp":time_stamp    },
             {  "id_hole":hole_id,"battery_voltage":getRndInteger(40,80), "drill_current":getRndInteger(5,17),"drill_angle":data_x,
                        "time_stamp":time_stamp    },//l
             {  "id_hole":hole_id,"battery_voltage":getRndInteger(40,80), "drill_current":getRndInteger(5,17),"drill_angle":data_x,
                        "time_stamp":time_stamp    },
             {  "id_hole":hole_id,"battery_voltage":getRndInteger(40,80), "drill_current":getRndInteger(5,17),"drill_angle":data_x,
                        "time_stamp":time_stamp    },
             {  "id_hole":hole_id,"battery_voltage":getRndInteger(40,80), "drill_current":getRndInteger(5,17),"drill_angle":data_x,
                        "time_stamp":time_stamp    },
             {  "id_hole":hole_id,"battery_voltage":getRndInteger(40,80), "drill_current":getRndInteger(5,17),"drill_angle":data_x,
                        "time_stamp":time_stamp    },
             {  "id_hole":hole_id,"battery_voltage":getRndInteger(40,80), "drill_current":getRndInteger(5,17),"drill_angle":data_x,
                        "time_stamp":time_stamp    },
             {  "id_hole":hole_id,"battery_voltage":getRndInteger(40,80), "drill_current":getRndInteger(5,17),"drill_angle":data_x,
                        "time_stamp":time_stamp    },
             {  "id_hole":hole_id,"battery_voltage":getRndInteger(40,80), "drill_current":getRndInteger(5,17),"drill_angle":data_x,
                        "time_stamp":time_stamp    },
             {  "id_hole":hole_id,"battery_voltage":getRndInteger(40,80), "drill_current":getRndInteger(5,17),"drill_angle":data_x,
                        "time_stamp":time_stamp    },
             {  "id_hole":hole_id,"battery_voltage":getRndInteger(40,80), "drill_current":getRndInteger(5,17),"drill_angle":data_x,
                        "time_stamp":time_stamp    },
             {  "id_hole":hole_id,"battery_voltage":getRndInteger(40,80), "drill_current":getRndInteger(5,17),"drill_angle":data_x,
                        "time_stamp":time_stamp    },//l
             {  "id_hole":hole_id,"battery_voltage":getRndInteger(40,80), "drill_current":getRndInteger(5,17),"drill_angle":data_x,
                        "time_stamp":time_stamp    },
             {  "id_hole":hole_id,"battery_voltage":getRndInteger(40,80), "drill_current":getRndInteger(5,17),"drill_angle":data_x,
                        "time_stamp":time_stamp    } ,  
             {  "id_hole":hole_id,"battery_voltage":getRndInteger(40,80), "drill_current":getRndInteger(5,17),"drill_angle":data_x,
                        "time_stamp":time_stamp    },
            {  "id_hole":hole_id,"battery_voltage":getRndInteger(40,80), "drill_current":getRndInteger(5,17),"drill_angle":data_x,
                        "time_stamp":time_stamp    },
             {  "id_hole":hole_id,"battery_voltage":getRndInteger(40,80), "drill_current":getRndInteger(5,17),"drill_angle":data_x,
                        "time_stamp":time_stamp    },
             {  "id_hole":hole_id,"battery_voltage":getRndInteger(40,80), "drill_current":getRndInteger(5,17),"drill_angle":data_x,
                        "time_stamp":time_stamp    },
             {  "id_hole":hole_id,"battery_voltage":getRndInteger(40,80), "drill_current":getRndInteger(5,17),"drill_angle":data_x,
                        "time_stamp":time_stamp    },
             {  "id_hole":hole_id,"battery_voltage":getRndInteger(40,80), "drill_current":getRndInteger(5,17),"drill_angle":data_x,
                        "time_stamp":time_stamp    },
             {  "id_hole":hole_id,"battery_voltage":getRndInteger(40,80), "drill_current":getRndInteger(5,17),"drill_angle":data_x,
                        "time_stamp":time_stamp    },
             {  "id_hole":hole_id,"battery_voltage":getRndInteger(40,80), "drill_current":getRndInteger(5,17),"drill_angle":data_x,
                        "time_stamp":time_stamp    },//l
             {  "id_hole":hole_id,"battery_voltage":getRndInteger(40,80), "drill_current":getRndInteger(5,17),"drill_angle":data_x,
                        "time_stamp":time_stamp    },
             {  "id_hole":hole_id,"battery_voltage":getRndInteger(40,80), "drill_current":getRndInteger(5,17),"drill_angle":data_x,
                        "time_stamp":time_stamp    },
             {  "id_hole":hole_id,"battery_voltage":getRndInteger(40,80), "drill_current":getRndInteger(5,17),"drill_angle":data_x,
                        "time_stamp":time_stamp    },
             {  "id_hole":hole_id,"battery_voltage":getRndInteger(40,80), "drill_current":getRndInteger(5,17),"drill_angle":data_x,
                        "time_stamp":time_stamp    },
             {  "id_hole":hole_id,"battery_voltage":getRndInteger(40,80), "drill_current":getRndInteger(5,17),"drill_angle":data_x,
                        "time_stamp":time_stamp    },
             {  "id_hole":hole_id,"battery_voltage":getRndInteger(40,80), "drill_current":getRndInteger(5,17),"drill_angle":data_x,
                        "time_stamp":time_stamp    },
             {  "id_hole":hole_id,"battery_voltage":getRndInteger(40,80), "drill_current":getRndInteger(5,17),"drill_angle":data_x,
                        "time_stamp":time_stamp    },
             {  "id_hole":hole_id,"battery_voltage":getRndInteger(40,80), "drill_current":getRndInteger(5,17),"drill_angle":data_x,
                        "time_stamp":time_stamp    },
             {  "id_hole":hole_id,"battery_voltage":getRndInteger(40,80), "drill_current":getRndInteger(5,17),"drill_angle":data_x,
                        "time_stamp":time_stamp    },
             {  "id_hole":hole_id,"battery_voltage":getRndInteger(40,80), "drill_current":getRndInteger(5,17),"drill_angle":data_x,
                        "time_stamp":time_stamp    },//l
             {  "id_hole":hole_id,"battery_voltage":getRndInteger(40,80), "drill_current":getRndInteger(5,17),"drill_angle":data_x,
                        "time_stamp":time_stamp    },
             {  "id_hole":hole_id,"battery_voltage":getRndInteger(40,80), "drill_current":getRndInteger(5,17),"drill_angle":data_x,
                        "time_stamp":time_stamp    },
             {  "id_hole":hole_id,"battery_voltage":getRndInteger(40,80), "drill_current":getRndInteger(5,17),"drill_angle":data_x,
                        "time_stamp":time_stamp    },
             {  "id_hole":hole_id,"battery_voltage":getRndInteger(40,80), "drill_current":getRndInteger(5,17),"drill_angle":data_x,
                        "time_stamp":time_stamp    },
             {  "id_hole":hole_id,"battery_voltage":getRndInteger(40,80), "drill_current":getRndInteger(5,17),"drill_angle":data_x,
                        "time_stamp":time_stamp    },
             {  "id_hole":hole_id,"battery_voltage":getRndInteger(40,80), "drill_current":getRndInteger(5,17),"drill_angle":data_x,
                        "time_stamp":time_stamp    },
             {  "id_hole":hole_id,"battery_voltage":getRndInteger(40,80), "drill_current":getRndInteger(5,17),"drill_angle":data_x,
                        "time_stamp":time_stamp    }
        ],
        "id_frame":1,
        "sampling_rate":50
 };
   
      
    if ((data_x < 55 && data_x >35) || (data_x > 80 && data_x < 100)) {//KO
        
                    led.off();
    }
    else {
        led.on();
    }
    
 //  client.publish(TOPIC, '{"x":' + data_x + ',"y":'+ data_y + ',"z":'+ data_z +   ' }');
   client.publish(TOPIC, JSON.stringify(msg));
  //  client.publish(TOPIC, '{"d":{"Accelerometer_y":' + data.get(1) + '}}');
//    client.publish(TOPIC, '{"d":{"Accelerometer_z":' + data.get(2) + '}}');
}, 300);
});

// exit on ^C
process.on('SIGINT', function()
{
    sensor = null;
    sensorObj.cleanUp();
    sensorObj = null;
    console.log("Exiting.");
    process.exit(0);
});
