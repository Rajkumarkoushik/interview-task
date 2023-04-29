import React, {useEffect, useState} from 'react';
import PieChart from 'react-pie-graph-chart';
import LineChart from 'react-linechart';

const fetchURL = "https://fakestoreapi.com/products";

function Charts() {
    const [presentData, setPresentData] = useState([]);

    useEffect(() => {
        dataFetch();
    }, []);

    async function dataFetch(){
        const cardData = await fetch(fetchURL);
        const changeData = await cardData.json();
        setPresentData(changeData);
    };

    const data = [
        {									
            color: "steelblue", 
            points: [{x: 1, y: 2}, {x: 3, y: 5}, {x: 7, y: -3}] 
        }
    ];

  return (
      <>
          <section className="Charts">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-4">
                        {/* Pie chart starts. */}
                          <PieChart
                              data={[
                                {
                                type: "Bus",
                                value: 235,
                                color: "#E97D30"
                                },
                                {
                                type: "Bicycle",
                                value: 165,
                                color: "#62B170"
                                },
                                {
                                type: "Train",
                                value: 90,
                                color: "#F1AF13"
                                },
                                {
                                type: "Car",
                                value: 345,
                                color: "#4BA2DA"
                                }
                              ]}
                          />
                        {/* Pie chart ends */}
                      </div>
                      <div className="col-lg-4">
                        {/* Line graph starts. */}
                            <div className="App">
                                <LineChart width={600}
                                    height={400}
                                    data={data}
                                />
                            </div>	
                        {/* Line graph ends. */}
        
                      </div>
                  </div>
              </div>
          </section>,street
            
          
          {
              presentData.map((list) => {
                  const { title, street, number, zipcode} = list;
                  return (
                      <>
                          {/* <h1>{title}</h1>
                          <h1>{street}</h1>
                          <h1>{number}</h1>
                          <h1>{zipcode}</h1> */}
                      </>
                  )
              })
          }

      </>
  )
}

export default Charts