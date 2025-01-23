import React from 'react'

export const Frontend = () => {
  return (
    <div className="skills__content">
        {/* <h3 className="skills__group " id="skill_group">Frond end</h3> */}
        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <img className='icon-skills' alt="Python logo" src={`${process.env.PUBLIC_URL}/assets/python.png`}  />
                    <div>
                        <h3 className="skills__name">Python</h3>
                        {/* <span className="skills__level">sdfasdfasdfasd</span> */}
                    </div>
                </div>
                <div className="skills__data">
                    <img className='icon-skills' alt="JavaScript logo" src={`${process.env.PUBLIC_URL}/assets/js.png`}  />
                    <div>
                        <h3 className="skills__name">JS</h3>
                        {/* <span className="skills__level">sdfasdfasdfasd</span> */}
                    </div>
                </div>

                <div className="skills__data">
                    <img className='icon-skills' alt="React logo" src={`${process.env.PUBLIC_URL}/assets/react.png`}  />
                    <div>
                        <h3 className="skills__name">React</h3>
                        {/* <span className="skills__level">sdfasdfasdfasd</span> */}
                    </div>
                </div>

            </div>

            <div className="skills__group">
                <div className="skills__data">
                    <img className='icon-skills' alt="Django logo" src={`${process.env.PUBLIC_URL}/assets/django.png`}  />
                    <div>
                        <h3 className="skills__name">Django</h3>
                        {/* <span className="skills__level">sdfasdfasdfasd</span> */}
                    </div>
                </div>

                <div className="skills__data">
                    <img className='icon-skills' alt="FastAPI logo" src={`${process.env.PUBLIC_URL}/assets/fastapi.png`}  />
                    <div>
                        <h3 className="skills__name">Fast API</h3>
                        {/* <span className="skills__level">sdfasdfasdfasd</span> */}
                    </div>
                </div>

                <div className="skills__data">
                    <img className='icon-skills' alt="Flask logo" src={`${process.env.PUBLIC_URL}/assets/flask.png`}  />
                    <div>
                        <h3 className="skills__name">Flask</h3>
                        {/* <span className="skills__level">sdfasdfasdfasd</span> */}
                    </div>
                </div>
               
            </div>
            
        </div>
    </div>
  )
}
