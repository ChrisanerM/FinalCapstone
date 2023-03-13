<template>
  <div>
    <footer>
      <div class="sticky-bottom">
        <div class="container">
          <div class="footer-day-time">
            <div class="row">
              <div class="col-md-8">
                <ul>
                  <li>Opening Hours: Mon - Friday: 8AM - 5PM</li>
                  <li>Sunday: 8:00 AM - 12:00 PM</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <h4>Information</h4>
              <ul class="address1">
                <li>
                  <i class="fa fa-map-marker"></i>111 Buitekant Street Cape Town
                </li>
                <li>
                  <i class="fa fa-envelope"></i
                  ><a href="mailto:#">apricitycamp.co.za</a>
                </li>
                <h4 class>&copy; 2023 Apricity Camp</h4>
              </ul>
            </div>

            <div class="col-md-4">
              <h4>Follow us</h4>
              <ul class="social-icon">
                <li>
                  <a href="#"
                    ><i class="fa fa-facebook" aria-hidden="true"></i
                  ></a>
                </li>
                <li>
                  <a href="#"
                    ><i class="fa fa-instagram" aria-hidden="true"></i
                  ></a>
                </li>
                <li>
                  <a href="#"
                    ><i class="fa fa-twitter" aria-hidden="true"></i
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  background-color: #403f3f;
  color: white;
  width: 100%;
}

ul {
  padding: 0px;
}
ol,
ul {
  margin-bottom: 0px;
}

.footer-day-time {
  padding-bottom: 30px;
  border-bottom: 2px solid #7a6f6f;
  padding-top: 14px;
  margin-bottom: 55px;

}
.footer-day-time ul li {
  display: inline;
  margin-right: 50px;
}
.footer-day-time ul li:last-child {
  margin-right: 0px;
}
.address1 li {
  list-style: none;
  position: relative;
  padding: 0px 0 14px 34px;
  line-height: 26px;
}
ul.address1 span {
  position: absolute;
  width: 40px;
  max-width: 40px;
  left: 0;
}
.address1 li a {
  color: #fff;
  text-decoration: none;
}
ul.address1 i {
  width: 20px;
  position: absolute;
  left: 0px;
  text-align: center;
  font-size: 28px;
  top: 0;
}

ul.address1 i.fa-envelope {
  font-size: 18px;
  top: 4px;
}
footer ul.social-icon {
  float: center;
}
footer .social-icon li i:hover {
  color: #7a6f6f;
  scale: 1.5;
}

.social-icon a {
  color: black;
  font-size: 20px;
}
</style>
