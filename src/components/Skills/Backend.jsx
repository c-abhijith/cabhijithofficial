import React from 'react'

export const Backend = () => {
  return (
    <div className="skills__content">
        {/* <h3 className="skills__group" id="skill_group">Backend</h3> */}
        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <img className='icon-skills' alt="MongoDB logo" src={`${process.env.PUBLIC_URL}/assets/mongo.png`} />
                    <div>
                        <h3 className="skills__name">MongoDB</h3>
                        {/* <span className="skills__level">sdfasdfasdfasd</span> */}
                    </div>
                </div>

                <div className="skills__data">
                    <img className='icon-skills' alt="PostgreSQL logo" src={`${process.env.PUBLIC_URL}/assets/pg.png`} />
                    <div>
                        <h3 className="skills__name">PostgreSQL</h3>
                        {/* <span className="skills__level">sdfasdfasdfasd</span> */}
                    </div>
                </div>

                <div className="skills__data">
                    <img className='icon-skills' alt="MySQL logo" src={`${process.env.PUBLIC_URL}/assets/mysql.png`} />
                    <div>
                        <h3 className="skills__name">MySQL</h3>
                        {/* <span className="skills__level">sdfasdfasdfasd</span> */}
                    </div>
                </div>
            </div>

            <div className="skills__group">
                <div className="skills__data">
                    <img className='icon-skills' alt="Git logo" src={`${process.env.PUBLIC_URL}/assets/git.png`} />
                    <div>
                        <h3 className="skills__name">Git</h3>
                        {/* <span className="skills__level">sdfasdfasdfasd</span> */}
                    </div>
                </div>

                <div className="skills__data">
                    <img className='icon-skills' alt="GitHub logo" src={`${process.env.PUBLIC_URL}/assets/github.png`} />
                    <div>
                        <h3 className="skills__name">GitHub</h3>
                        {/* <span className="skills__level">sdfasdfasdfasd</span> */}
                    </div>
                </div>

                <div className="skills__data">
                    <img className='icon-skills' alt="GitLab logo" src={`${process.env.PUBLIC_URL}/assets/gitlab.png`} />
                    <div>
                        <h3 className="skills__name">GitLab</h3>
                        {/* <span className="skills__level">sdfasdfasdfasd</span> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
