#include "dataRecv.h"
#include <assert.h>
#include <string.h>

DataRecv::DataRecv()
{
	
}

DataRecv::~DataRecv()
{
	zmq_msg_close(&m_recv_msg);
  	zmq_close(m_requester);
  	zmq_ctx_destroy(m_context);
}

void DataRecv::init()
{
	m_context = zmq_ctx_new();
	assert( m_context );

	m_requester = zmq_socket(m_context, ZMQ_SUB);
	
	int hwm = 5;
  	zmq_setsockopt(m_requester, ZMQ_RCVHWM, &hwm, sizeof(int));
	
	int rcvbuf = 128;
 	zmq_setsockopt(m_requester, ZMQ_RCVBUF, &rcvbuf, sizeof(int));
	
	zmq_setsockopt(m_requester, ZMQ_SUBSCRIBE, "", 0);	
	
	int rc = zmq_connect(m_requester, m_endpoint); 
   	assert( rc < 0 );
  	
	zmq_msg_init(&m_recv_msg);

	recv_fail_count = 0;

}

void DataRecv::reconnect() 
{

	zmq_msg_close(&m_recv_msg);
  	zmq_close(m_requester);
  	zmq_ctx_destroy(m_context);

  	init();
}

void DataRecv::recvString()
{
	zmq_msg_init( &m_recv_msg );
		
	int size = zmq_msg_recv( &m_recv_msg, m_requester, 0 );
	if( size < 0 ){
		std::cerr<<"Receive Error: "<<size<<std::endl;
		assert( size < 0 );
	}
	
	char *str = new char[ size + 1 ];
	memcpy( str, zmq_msg_data( &m_recv_msg ), size );

	zmq_msg_close( &m_recv_msg );

	str[size] = 0;
	
	delete[] str;

	data = str;
}












