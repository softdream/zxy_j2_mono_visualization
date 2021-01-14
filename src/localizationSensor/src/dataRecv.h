#ifndef __DATARECV_H_
#define __DATARECV_H_

#include <zeromq/zmq.h>
#include <string>
#include <iostream>

class DataRecv
{
public:
	DataRecv();
	~DataRecv();

	void init();
	void reconnect();
	
	void recvString();
private:
	void * m_context;   
  	void * m_requester;
	zmq_msg_t m_recv_msg;
 
 	char m_endpoint[100]; 

	long recv_fail_count;

	std::string data;
};

#endif
