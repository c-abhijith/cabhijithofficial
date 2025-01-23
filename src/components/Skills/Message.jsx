import React from 'react'

export const Message = () => {
  return (
    <div className="skills__content">
        {/* <h3 className="skills__group" id="skill_group">Backend</h3> */}
        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <img className='icon-skills' alt="gRPC logo" src={`${process.env.PUBLIC_URL}/assets/grpc.png`} />
                    <div>
                        <h3 className="skills__name">gRPC</h3>
                        {/* <span className="skills__level">sdfasdfasdfasd</span> */}
                    </div>
                </div>

                <div className="skills__data">
                    <img className='icon-skills' alt="RabbitMQ logo" src={`${process.env.PUBLIC_URL}/assets/rabbitmq.png`} />
                    <div>
                        <h3 className="skills__name">RabbitMQ</h3>
                        {/* <span className="skills__level">sdfasdfasdfasd</span> */}
                    </div>
                </div>

                <div className="skills__data">
                    <img className='icon-skills' alt="Redis logo" src={`${process.env.PUBLIC_URL}/assets/redis.png`} />
                    <div>
                        <h3 className="skills__name">Redis</h3>
                        {/* <span className="skills__level">sdfasdfasdfasd</span> */}
                    </div>
                </div>
            </div>

            <div className="skills__group">
                <div className="skills__data">
                    <img className='icon-skills' alt="Swagger logo" src={`${process.env.PUBLIC_URL}/assets/swagger.png`} />
                    <div>
                        <h3 className="skills__name">Swagger</h3>
                        {/* <span className="skills__level">sdfasdfasdfasd</span> */}
                    </div>
                </div>

                <div className="skills__data">
                    <img className='icon-skills' alt="Postman logo" src={`${process.env.PUBLIC_URL}/assets/postman.png`} />
                    <div>
                        <h3 className="skills__name">Postman</h3>
                        {/* <span className="skills__level">sdfasdfasdfasd</span> */}
                    </div>
                </div>

                <div className="skills__data">
                    <img className='icon-skills' alt="REST logo" src={`${process.env.PUBLIC_URL}/assets/rest.png`} />
                    <div>
                        <h3 className="skills__name">REST</h3>
                        {/* <span className="skills__level">sdfasdfasdfasd</span> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

