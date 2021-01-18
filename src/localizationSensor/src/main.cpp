#include <ros/ros.h>
#include <iostream>
#include "dataRecv.h"

#include <localizationSensor/gps.h>
#include <vector>

ros::Publisher pub;

std::vector<std::string> elementVector;

static int hex_table[]={0,0,0,0,0,0,0,0,0,
                        0,0,0,0,0,0,0,0,0,
                        0,0,0,0,0,0,0,0,0,
                        0,0,0,0,0,0,0,0,0,
                        0,0,0,0,0,0,0,0,0,
                        0,0,0,0,1,2,3,4,5,6,
                        7,8,9,0,0,0,0,0,0,
                        0,10,11,12,13,14,15,0,0,
                        0,0,0,0,0,0,0,0,0,
                        0,0,0,0,0,0,0,0,0,
                        0,0,0,0,0,0,10,
                        11,12,13,14,15};

long int hex2decimal( const char* hex_str )
{
        char ch;
        long int iret = 0;
        while(ch = *hex_str++ )
        {
            iret = ( iret << 4 ) | hex_table[ch];
        }

        std::cout<<"iret = "<<iret <<std::endl;
        return iret;
}

typedef struct{
	char serial[10];
	long int timeStampSec;
	long int timeStampUsec;
	long int oritention;
	long int longitude;
	long int latitude;
}LocalizationInfo;

// format example: INS0 5c029d00:00041c52 - 8c9e 0000001c42cfc645 000000073ee58747
// first parameter: the serial of the sensor
// second parameter: time stamp: second 
// third parameter: time stamp: microsecond
// orientation: rad
// longitude: degree
// latitude: degree
LocalizationInfo parseString( std::string str, std::vector<std::string> &elementString )
{
	LocalizationInfo local;
	memset( &local, 0, sizeof( local ) );
	size_t position = 0;
	do{
		std::string tmp_str;
		position = str.find( " " ); // find the blank 
		tmp_str = str.substr( 0, position );
		str.erase( 0, position + 1 );
		elementString.push_back( tmp_str );
	}while( position != -1 );

	int i = 1;
	for( auto it = elementString.begin(); it != elementString.end(); it ++, i ++ ){
		std::cout<<"["<<i<<"]: "<<*it<<std::endl;
	}
	
	//local.serial = elementString[0].data();
	elementString[0].copy( local.serial, elementString[0].length(), 0 );

	size_t pose = elementString[1].find( ":" );
	std::string timeSecStr = elementString[1].substr( 0, pose );
	local.timeStampSec = hex2decimal( timeSecStr.c_str() );
	elementString[1].erase( 0, pose + 1 );
	local.timeStampUsec = hex2decimal( elementString[1].c_str() );

	local.oritention = hex2decimal( elementString[3].c_str() );
	local.longitude = hex2decimal( elementString[4].c_str() );
	local.latitude = hex2decimal( elementString[5].c_str() );

	// for test
	std::cout<<"serial: "<<local.serial<<std::endl;
	std::cout<<"timeStampSec: "<<local.timeStampSec<<std::endl;
	std::cout<<"timeStampUsec: "<<local.timeStampUsec <<std::endl;
	std::cout<<"oritention: "<<local.oritention<<std::endl;
	std::cout<<"longitude: "<<local.longitude<<std::endl;
	std::cout<<"latitude: "<<local.latitude<<std::endl;

	return local;
}

int main( int argc, char **argv )
{
	std::cout<<"Program Begins ..."<<std::endl;
	ros::init( argc, argv, "localizationSensors" );
	ros::NodeHandle n;

	pub = n.advertise<localizationSensor::gps>( "/raw/gps", 1 );

	//------------------ init the receiver ---------------------//
	std::string endpoint = "tcp://192.168.0.21:5556";
	DataRecv receiver;
	receiver.setEndPoint( endpoint );
	receiver.init();

	while( ros::ok() ){
		receiver.recvString();
		
		std::string recvStr = receiver.getData();
		LocalizationInfo localMsg = parseString( recvStr, elementVector );
		localizationSensor::gps gpsMsg;
		gpsMsg.sensorSerial = localMsg.serial;
		gpsMsg.timeSec = localMsg.timeStampSec;
		gpsMsg.timeUsec = localMsg.timeStampUsec;
		gpsMsg.oritention = localMsg.oritention;
		gpsMsg.longitude = localMsg.longitude;
		gpsMsg.latitude = localMsg.latitude;

		pub.publish( gpsMsg );
	}
	
	return 0;
}

