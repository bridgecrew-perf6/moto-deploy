<template>
  <Navbar></Navbar>
  <Header></Header>
<!-- data-aos="fade-right" data-aos-duration="2000" -->
  <div class="fix container mt-5">
    <div class="row mb-5" data-aos="fade-right" data-aos-duration="2000">
      <div class="col-md-6">
        <img
          src="../assets/Page-AD-01.png"
          alt=""
          class="h-350 w-100 bgCover card-img mb-4 mb-md-0"
        />
      </div>
      <div class="col-md-6 d-flex flex-column justify-content-center">
        <h2 class="text-center text-secondary fw-bold">
          用心照顧每台車
        </h2>
        <p class="ff-r">
          我們對於重機保養絕對不馬虎，機油只使用國際大廠美孚機油與mobil機油，例行性小保養與大保養
          定時施工。消耗品只用原廠部品，絕非大陸次級品，再加上定期打蠟與鍍膜，能讓出租車保有一定行車質感，
          讓您在短期承租期間，享受人車合一的喜悅，騎著騎著嘴角甚至會不自覺上揚呢。
        </p>
      </div>
    </div>
    <div class="row mb-5" data-aos="fade-left" data-aos-duration="2000">
      <div class="col-md-6 d-flex flex-column justify-content-center">
        <h2 class="text-center text-secondary fw-bold">頂級人身部品也租的到</h2>
        <p class="ff-r">
          騎重機想要全身防摔衣帥一波 但又不想花大錢嗎?<br />
          我們提供各大廠的人身部品，凡舉AGV、SHOEL、Arai甚至連DAINESE防摔衣都有。出租完畢一律做紅外線消毒，
          並且我們備有法國進口安全帽蒸氣箱。衛生問題不需擔心，我們替您嚴格把關!
        </p>
      </div>
      <div class="col-md-6">
        <img
          src="../assets/fix4.jpg"
          alt=""
          class="h-350 w-100 bgCoverBottom card-img"
        />
      </div>
    </div>
    <div class="row mb-5" data-aos="fade-right" data-aos-duration="2000">
      <div class="col-md-6">
        <img
          src="../assets/order.jpg"
          alt=""
          class="h-350 w-100 bgCover card-img mb-4 mb-md-0"
        />
      </div>
      <div class="col-md-6 d-flex flex-column justify-content-center">
        <h2 class="text-center text-secondary fw-bold">
          政府定型化契約
        </h2>
        <p class="ff-r">
         定型化契約又稱為附合契約，於中國大陸稱格式合同，
         另有稱附和契約、定式契約、附從契約及標準契約或稱盟約等，
         指由一方當事人預先擬定契約之內容，並以此與不特定相對人訂定契約，
         不特定相對人在訂定契約時無法磋商契約之內容，提供定型化契約的一方處於要約人的地位，
         相對人則由承諾或拒絕要約之意思表示決定是否受契約拘束
        </p>
      </div>
    </div>
  </div>
  <div class="container mt-5 mb-5">
    <h3 class="mb-5 text-center text-secondary fw-bold">今晚.... 我想來點?</h3>
    <div class="row">
      <div class="col-md-4 box position-relative mb-4 mb-md-0">
        <button class="btn btn-outline-light w-100 text-secondary" @click="changesports"
          ><img
            class="cover-fit w-100 bgCover card-img"
            src="../assets/home1.jpg"
            alt=""
          />
          <h4
            class="title text-danger p-5 position-absolute top-50 start-50 translate-middle"
          >
            跑車
          </h4>
        </button>
      </div>
      <div class="col-md-4 box position-relative mb-4 mb-md-0">
        <button class="btn btn-outline-light w-100 text-secondary" @click="changesports"
          ><img
            class="cover-fit w-100 bgCover card-img"
            src="../assets/home2.jpg"
            alt=""
          />
          <h4
            class="title text-danger p-5 position-absolute top-50 start-50 translate-middle"
          >
            街車
          </h4>
        </button>
      </div>
      <div class="col-md-4 box position-relative mb-4 mb-md-0">
       <button class="btn btn-outline-light w-100 text-secondary" @click="changesports"
          ><img
            class="cover-fit w-100 bgCover card-img"
            src="../assets/home3.jpg"
            alt=""
          />
          <h4
            class="title text-danger p-5 position-absolute top-50 start-50 translate-middle"
          >
            跨界，越野
          </h4>
        </button>
      </div>
    </div>
  </div>

  <div class="container mb-5">
    <p
      class="text-center h2 animate__animated animate__pulse animate__repeat-3 ff-r"
    >
      <i class="fas fa-motorcycle fa-1x me-3"></i>歡慶開幕
      結帳輸入hellovue3即可享九折優惠
    </p>
  </div>

  <div class="container-fluid border mb-5 bg-dark">
    <video
      width=""
      height="400"
      autoplay
      muted
      style="object-fit:cover position: absolute;
    width: 100%;"
    >
      <source src="../assets/w800.mp4" type="video/mp4" />
    </video>

  </div>

  <Footer></Footer>
</template>

<style>
.animate__animated.animate__pulse {
  --animate-duration: 4s;
}
.box {
  overflow: hidden;
}
img {
  transition: 0.5s;
}
.box:hover img {
  transform: scale(1.2);
  cursor: pointer;
}
.cover-fit {
  width: 100%;
  height: 250px;
  object-fit: cover;
}
/* //以上圖片縮放 */
.banner {
  height: 500px;
  object-fit: cover;
  object-position: center;
}
.ff-r {
  font-family: 'Roboto', sans-serif;
}
.title {
  z-index: 99;
  font-family: 'Zen Kurenaido', sans-serif;
  font-weight: 800;
  background-color: rgba(196, 206, 214, 0.863);
  opacity: 0.6;
}
.icohover:hover {
  width: 35px;
}
</style>
<script>
import Carousel from 'bootstrap/js/dist/carousel'
import Navbar from '../components/Navbar.vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  data () {
    return {
      carousel: {}
    }
  },
  components: { Navbar, Header, Footer },
  methods: {
    changesports () {
      console.log(this.$router)
      this.$router.push('/user/cart')
    }
  },
  mounted () {
    const myCarousel = this.$refs.carousel
    this.carousel = new Carousel(myCarousel)
  }
}
</script>
