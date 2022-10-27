import "./Home.css";
import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import StarRateIcon from "@mui/icons-material/StarRate";
<script src="https://kit.fontawesome.com/61a40bd954.js" crossorigin="anonymous"></script>


function Home() {
  return (
    <div className="home">
      <div className="textAndPic d-flex   justify-content-between md-col-12 p-1">
        <img
          className="homePic ml-2 "
          src="https://wefix.fra1.digitaloceanspaces.com/general/homepage/img1.jpg"
        />
        <div className="p-4">
          <div className="w-75">
            {" "}
            <h3>All service providers are here for you</h3>
          </div>
          <div>
            {" "}
            <h4 className="textfild col">
              The service providers will stand by and help you with any request:
            </h4>
          </div>
          <div>
            <h5>
              {" "}
              <CheckIcon />
              Compare service provider reviews, ratings, and prices
            </h5>
            <h5>
              {" "}
              <CheckIcon /> Tens of thousands of service providers are in WiFix
            </h5>
            <h5>
              {" "}
              <CheckIcon /> Choose the perfect service provider for you for the
              task
            </h5>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center "><h2>Opinions from people who have used our service </h2></div>
      <div className="OpinionDiv  d-flex flex-wrap  p-4  justify-content-lg-center">
        <div></div>
        <div className="ritingDiv border   m-2  md-col-12 p-4 ">
          <h4>
            Yael
            
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
          </h4>
          <p>
            This is a job that I estimated would take three to four hours by one
            worker, of course, with my help. In practice, a team of 3 workers
            arrived who worked for 4 hours almost without breaks. The employees
            worked in a very professional and thorough manner.{" "}
          </p>
        </div>
        <div className="ritingDiv border   m-2  md-col-12 p-4 ">
          <h4>
            Mor
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
          </h4>
          <p>
          Alexander is simply charming and kind! Came to dismantle and assemble a treadmill, did everything quickly and professionally and was kind and nice, highly recommended!!{" "}
          </p>
        </div>
        <div className="ritingDiv border   m-2  md-col-12 p-4 ">
          <h4>
            Lior
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
          </h4>
          <p>
          Oded painted 10 floors in my building, including the lobby, the stairwells, the apartment lobbies and the garbage room. The work was done professionally, courteously, while maintaining cleanliness and order.{" "}
          </p>
        </div>
        <div className="ritingDiv border   m-2  md-col-12 p-4 ">
          <h4>
            Daniel
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
          </h4>
          <p>
          The man went out of his way to help me fix my computer. He was in constant contact with me and updated me on developments. Reliable, kind and honest!! Did an excellent job arrived on time did an excellent job{" "}
          </p>
        </div>
        <div className="ritingDiv border    m-2  md-col-12 p-4">
          <h4>
            Oren
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
          </h4>
          <p>
            This is a job that I estimated would take three to four hours by one
            worker, of course, with my help. In practice, a team of 3 workers
            arrived who worked for 4 hours almost without breaks. The employees
            worked in a very professional and thorough manner.{" "}
          </p>
        </div>
        <div className="ritingDiv border   m-2  md-col-12 p-4 ">
          <h4>
            Yoni
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
          </h4>
          <p>
            This is a job that I estimated would take three to four hours by one
            worker, of course, with my help. In practice, a team of 3 workers
            arrived who worked for 4 hours almost without breaks. The employees
            worked in a very professional and thorough manner.{" "}
          </p>
        </div>
        <div className="ritingDiv border   m-2  md-col-12 p-4 ">
          <h4>
            Patrik
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
          </h4>
          <p>
          Eran carried out my request efficiently and professionally. Expert in photography and computers. Reliable and can be trusted even in the most complicated tasks. Highly recommend it. Did an excellent job.{" "}
          </p>
        </div>
        <div className="ritingDiv border   m-2  md-col-12 p-4 ">
          <h4>
            Jacov
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
          </h4>
          <p>
            This is a job that I estimated would take three to four hours by one
            worker, of course, with my help. In practice, a team of 3 workers
            arrived who worked for 4 hours almost without breaks. The employees
            worked in a very professional and thorough manner.{" "}
          </p>
        </div>
        <div className="ritingDiv border   m-2  md-col-12 p-4 ">
          <h4>
            Jacov
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
            <i class="fa fa-star-o" aria-hidden="true"></i>
          </h4>
          <p>
            This is a job that I estimated would take three to four hours by one
            worker, of course, with my help. In practice, a team of 3 workers
            arrived who worked for 4 hours almost without breaks. The employees
            worked in a very professional and thorough manner.{" "}
          </p>
        </div>
      </div>
      <div className="Divpic">
        <img className="sponcersPic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSh6OXL2uGmsTL6VpKoA9GqfmL1EUiHQ_QQ&usqp=CAU" alt="" />
        <img className="sponcersPic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkukJfWd0jEZfEZ1Cm_K7bsjEiEl7kmgYZrQ&usqp=CAU" alt="" />
        <img className="sponcersPic"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHmfOfmCPkKDpuDI33GN9-uYNnjR-kUMBcGA&usqp=CAU" alt="" />
        <img className="sponcersPic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCiztD-crGvQXkl7D6dMcQnwh9M7QavpqDbQ&usqp=CAU" alt="" />

      </div>
    </div>
  );
}

export default Home;
