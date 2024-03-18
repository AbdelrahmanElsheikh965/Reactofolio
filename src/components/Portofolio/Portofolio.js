import React from "react";

function Portfolio() {
    const dark  = {background: 'rgba(0, 0, 0, 0.5)'};
    const light = {background: 'rgba(31,44,108,.5)'};
    
    const falsy = {'border-radius': '100px'};


    const items_1 = [
        {
            id: 1,
            card:   <>
                        <img src="assets/images/portfolio/p5.jpg" alt="portfolio image"/>
                        <div class="isotope-overlay">
                            <a href="#">
                                web development
                            </a>
                        </div>
                    </>
        },
        {
            id: 2,
            card:   <> 
                        <img src="assets/images/portfolio/p2.jpg" alt="portfolio image"/>
                        <div class="isotope-overlay">
                            <a href="#">
                                Servers
                            </a>
                        </div>
                    </>
        }
    ];

    const items_2 = [
        {
            id: 3,
            card:   <>
                        <img src="assets/images/portfolio/p4.jpg" alt="portfolio image"/>
                        <div class="isotope-overlay">
                            <a href="#">
                                Operatingings
                            </a>
                        </div>
                    </>
        },
        {
            id: 4,
            card:   <> 
                        <img src="assets/images/portfolio/p5.jpg" alt="portfolio image"/>
                        <div class="isotope-overlay">
                            <a href="#">
                                Hacking(s)
                            </a>
                        </div>
                    </>
        }
    ];

    const items_3 = [
        {
            id: 5,
            card:   <>
                        <img src="assets/images/portfolio/p2.jpg" alt="portfolio image"/>
                        <div class="isotope-overlay">
                            <a href="#">
                                Designings
                            </a>
                        </div>
                    </>
        },
        {
            id: 6,
            card:   <> 
                        <img src="assets/images/portfolio/p4.jpg" alt="portfolio image"/>
                        <div class="isotope-overlay">
                            <a href="#">
                                Buildings
                            </a>
                        </div>
                    </>
        }
    ];

  return <section id="portfolio" class="portfolio">
            <div class="portfolio-details">
                <div class="section-heading text-center">
                    <h2>portfolio</h2>
                </div>
                <div class="container">
                    <div class="portfolio-content">
                        <div class="isotope">
                            <div class="row">

                            <div class="col-sm-4">
                                {items_1.map((item) => (
                                    <>
                                        {item.id % 2 != 0 ? (
                                            <div class="item">
                                                    {item.card}
                                            </div>
                                            ) : (
                                            <div class="item" style={falsy}>
                                                {item.card}
                                            </div>
                                            )}
                                    </>
                                ))}
                            </div>

                            <div class="col-sm-4">
                                {items_2.map((item) => (
                                   <>
                                   {item.id % 2 == 0 ? (
                                       <div class="item">
                                               {item.card}
                                       </div>
                                       ) : (
                                       <div class="item" style={falsy}>
                                           {item.card}
                                       </div>
                                       )}
                               </>
                                ))}
                            </div>

                            <div class="col-sm-4">
                                {items_3.map((item) => (
                                    <>
                                    {item.id % 2 != 0 ? (
                                        <div class="item">
                                                {item.card}
                                        </div>
                                        ) : (
                                        <div class="item" style={falsy}>
                                            {item.card}
                                        </div>
                                        )}
                                </>
                                ))}
                            </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>;
}

export default Portfolio;