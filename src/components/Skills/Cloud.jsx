import React from 'react'

export const Cloud = () => {
  return (
    <div className="skills__content">
        {/* <h3 className="skills__group" id="skill_group">Backend</h3> */}
        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <img className='icon-skills' alt="Numpy logo" src={`${process.env.PUBLIC_URL}/assets/numpy.png`} />
                    <div>
                        <h3 className="skills__name">Numpy</h3>
                        {/* <span className="skills__level">sdfasdfasdfasd</span> */}
                    </div>
                </div>

                <div className="skills__data">
                    <img className='icon-skills' alt="Pandas logo" src={`${process.env.PUBLIC_URL}/assets/pandas.png`} />
                    <div>
                        <h3 className="skills__name">Pandas</h3>
                        {/* <span className="skills__level">sdfasdfasdfasd</span> */}
                    </div>
                </div>

                <div className="skills__data">
                    {/* <img className='icon-skills' alt="MySQL logo" src={`${process.env.PUBLIC_URL}/assets/mysql.png`} /> */}
                    <div>
                        {/* <h3 className="skills__name">MySQL</h3> */}
                        {/* <span className="skills__level">sdfasdfasdfasd</span> */}
                    </div>
                </div>
            </div>

            <div className="skills__group">
                <div className="skills__data">
                    <img className='icon-skills' alt="GitHub Actions logo" src={`${process.env.PUBLIC_URL}/assets/Github_action.png`} />
                    <div>
                        <h3 className="skills__name">GitHub Actions</h3>
                        {/* <span className="skills__level">sdfasdfasdfasd</span> */}
                    </div>
                </div>

                <div className="skills__data">
                    <img className='icon-skills' alt="Docker logo" src={`${process.env.PUBLIC_URL}/assets/docker.png`} />
                    <div>
                        <h3 className="skills__name">Docker</h3>
                        {/* <span className="skills__level">sdfasdfasdfasd</span> */}
                    </div>
                </div>

                <div className="skills__data">
                    {/* <img className='icon-skills' alt="GitLab logo" src={`${process.env.PUBLIC_URL}/assets/gitlab.png`} /> */}
                    <div>
                        {/* <h3 className="skills__name">GitLab</h3> */}
                        {/* <span className="skills__level">sdfasdfasdfasd</span> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
