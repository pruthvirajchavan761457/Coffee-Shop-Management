import React from "react";
import Cake from "../img/AboutImage/Cake.jpeg";
import cS from "../img/AboutImage/cS.png";


function Learn() {
  return (
    <div class="container text-center">
      <strong className="text-center text-white fs-4">Durga Cafe</strong>
      <div class="row">
        <div class="col">
          <p className="text-white fs-4">
            "you're opening a new coffee shop or redesigning your existing
            website, it's important to have a design that reflects your brand
            and entices customers."

            "Coffee is always a good idea." 
          </p>
        </div>
        <div class="col">
          <img src={Cake} alt="Cake" />
        </div>

        <div class="container text-center">
          <div class="row">
            <div class="col">
            <span className="text-left text-white">Introduction to:</span>
              <p className="text-white">
                Café Durga is a leading food service retailer in Pune.
                Established 16 years ago as a coffee giant, now we are known for
                our popular fast food menu and coffee combos which is light on
                pockets and heavy on stomachs. As a team we realized the growing
                potential of the ever so famous “cold coffee” and this motivated
                us to fulfill the need to serve our customers, a coffee and
                snacks at the most competitive rate which is really hard to
                believe, considering the inflation and the ever increasing price
                of commodities. We have expanded 75+ branches in 3 states & 10+
                cities over the last 16 yrs. We are looking forward to expand
                profitably, thus serving more customers and expanding our
                family.
              </p>
            </div>
            <div class="col">
              <img src={cS} alt="cS" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Learn;
