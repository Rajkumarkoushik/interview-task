import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Charts from './Charts';
 
function Home() {

    const listItems = [
        {id:1, item: "70+ countries and associated events"},
        {id:2, item: "Access to munition data"},
        {id:3, item: "Dynamic category munition data charts"},
        {id:4, item: "Detailed country page layout (Map layers , Markers , Heatmap , Medical facilities, Infrastructure)"},
        {id:5, item: "Complete munitions information (Pie charts, Line graphs)"},
        {id:6, item: "Informative date range selector"},
        {id:7, item: "Identified munitions"},
        {id:8, item: "Events timeline"},
        {id:9, item: "Upgrade to Teams at any time"},
    ]
    const enterprise = [
        {id:1, item: "All Benefits of Pro Access"},
        {id:2, item: "Team Management"},
        {id:3, item: "Dedicated Account Manager"},
        {id:4, item: "Technical Information Point of Contact"},
        {id:5, item: "Munition Documentation"},
        {id:6, item: "Advanced Munition Data"},
    ]

    const personList = ["1 User", "2 Users", "3 Users", "4 Users", "5 Users", "6 Users", "7 Users", "8 Users", "9 Users", "10 Users", "11 Users","12 Users","13 Users", "14 Users","14 Users","15 Users","16 Users","17 Users","18 Users","19 Users","20 Users","30 Users","40 Users","50 Users","60 Users","70 Users","80 Users","90 Users","100 Users"]
  
  return (
      <>
        <Header />
        {/* Charts section starts. */}
          <Charts/>
      {/* Charts section ends. */}

      {/* Powered by AI section starts. */}
        <section className="powered-ai py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h1 className='text-white'>Powered by <br /> custom A.I.</h1>
              <p className='text-white py-2'>We combine Machine Learning, Natural Language Processing and lightning fast databases for results which are up-to-date and accurate.</p>
            </div>
          </div>
          </div>
        </section>
      {/* Powered by AI section ends. */}
      
        {/* Real time section starts. */}
          <section className="home-realtime py-5">
            <div  className=" container">
              <h1 className='py-3'>Real-time, interactive, global data
              </h1>
              <div className="row g-6">
                <div className="col-lg-4">
                    <div className="real-cards">
                        <p>Local news and social media monitored and mapped 24-7</p>
                        <img className="mt-1" src=".\assets\fenix-insight-online-page-mini-1.png" alt='' />
                    </div>
                </div>
                <div className="col-lg-4">
                          <div className="real-cards">
                          <p>Full detail and source of every conflict event recorded</p>
                  <img className="mt-1" src="./assets/fenix-insight-online-page-mini-2.png" alt=''/>
                    </div>
                </div>
                <div className="col-lg-4">
                          <div className="real-cards">
                          <p>Powerful image search categories images</p>
                  <img className="mt-1" src="./assets/fenix-insight-online-page-mini-3.png" alt=''/>
                  </div>
                </div>
              </div>
            </div>

          </section>
        {/* Real time section ends. */}

        {/* Pro free trail section starts. */}
            <section className="pro-trail py-5">
              <div className="container">
                  <form action="">
                    <select name="" id="" className='pro-select'>
                        <option value="">(£) Pounds</option>
                        <option value="">(€) Euros</option>
                        <option value="">($) US Dollars</option>
                    </select>
                  </form>
                  <div className="row g-5 py-3">
                      <div className="col-lg-4 col-md-6">
                          <div className="pro-trail-cards p-4 ">
                              <div className="text-center">
                              <h5>Pro Free Trial</h5>
                              <h5 className='mb-0'><strike>£ 24.99</strike></h5>
                              <p>/user/month</p>
                              <button className='pro-btn'>Monthly</button>
                              </div>
                              <button className='pro-second-btn'>Start 7Day Free Trail</button>
                              <div>
                                  <ul className='px-0 pro-links'>
                                      {
                                      listItems.map((eachList) => {
                                              return (
                                                <>
                                                  <div className="d-flex align-items-center pro-list-items">
                                                  <i className="fa-sharp fa-solid fa-check"></i>
                                                  <li key={eachList.id}>{eachList.item}</li>
                                                  </div>
                                                     
                                                </>
                                           )
                                       })   
                                      }
                                      </ul>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="pro-trail-cards p-4 pro-second-card">
                          <div className="text-center">
                            <h5>Pro</h5>
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <h5 className='mb-0'>£ 24.99</h5>
                                <p>/user/month</p>
                              </div>
                              <select name="" id="" className='pro-user-select'>
                                {
                                  personList.map((eachUser, id) => {
                                    return (
                                      <>
                                        <option value="" key={id}>{eachUser}</option>
                                      </>
                                      )
                                  })
                                }
                              </select>
                            </div>
                              <button className='pro-btn'>Monthly</button>
                              <button className='pro-btn pro-annual-btn'>annually</button>
                          </div>
                          <button className='pro-second-btn'>Get Started Now</button>
                          <div>
                            <ul className='px-0 pro-links'>
                              <div className="d-flex align-items-center pro-list-items">
                                <i className="fa-sharp fa-solid fa-check"></i>
                                <li>All Benefits of Free Trial Access</li>
                              </div>
                              <div className="d-flex align-items-center pro-list-items">
                                <i className="fa-sharp fa-solid fa-check"></i>
                                <li>Team Management</li>
                              </div>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="pro-trail-cards p-4 pro-free-last">
                          <div className="text-center">
                            <h5>Enterprise</h5>
                          </div>
                          <h4 className='py-3'>For Larger Organisations</h4>
                          <button className='pro-second-btn'>Get In Touch Now</button>
                          <div>
                            <ul className='px-0 pro-links'>
                              {
                               enterprise.map((eachList) => {
                                return (
                                        <>   
                                          <div className="d-flex align-items-center pro-list-items">
                                            <i className="fa-sharp fa-solid fa-check"></i>
                                            <li key={eachList.id}>{eachList.item}</li>
                                          </div>
                                        </>
                                      )
                                        })}
                            </ul>
                          </div>
                        </div>
                      </div> 
                  </div>
              </div>
            </section>
        {/* Pro free trail section ends. */}
      
        {/* Fenix insight section starts. */}
            <section className="home-insights">
              <div className="container insight-content position-absolute">
                <h1 className='text-white py-3'>There's even more to <br /> Fenix Insight...</h1>
                <p className='text-white py-3'>Find out about our Defense Intelligence products.</p>
                <button className='btn'>Learn More</button>
              </div>
            </section>     
        {/* Fenix insight section ends. */}
   
          <Footer />
      </>
  )
}

export default Home