import style from "./work1.module.css";
import logo from "./photos/amazon.png";
import flag from "./photos/flag.png";
import cart from "./photos/cart.png";
import shop from "./photos/shop.jpg";

const Work1 = () => {
  return (
    <div>
      <section id={style.nav}>
        <article className={style.nav1}>
          <div className={style.gap}>
            <div className={style.logo}>
              <a href="">
                <img src={logo} alt="" height={50} width={130} />
              </a>
            </div>
            <div className={style.loc}>
              <a href="">
                <i class="fa-solid fa-location-dot"></i>
                <p>
                  <span className={style.in}>Hello </span>
                  <br />
                  <span className={style.add}>Select your address</span>{" "}
                </p>
              </a>
            </div>
            <div className={style.search}>
              <button>
                <button className={style.all}>
                  All<i class="fa-solid fa-sort-down"></i>
                </button>{" "}
                <input type="text" placeholder="  Search Amazon.in" />
                <button className={style.icon}>
                  <i class="fa-solid fa-magnifying-glass"></i>
                </button>
              </button>
            </div>
            <div className={style.en}><a href="">
              <div>
                <img src={flag} alt="" height={16} width={21} />
                EN<i class="fa-solid fa-sort-down"></i>
              </div></a>
            </div>
            <div className={style.ha}><a href="">
              <div className={style.in}>Hello, sign in</div>
              <div className={style.list}>
                Account & Lists <i class="fa-solid fa-sort-down"></i>
              </div></a>
            </div>
            <div className={style.ro}><a href="">
              <div className={style.return}>Returns</div>
              <div className={style.order}>& Orders</div>
              </a>
            </div>
            <div className={style.cart}><a href="">
              <div className={style.add}>
                <img src={cart} alt="" height={34} width={43} />
                Cart
              </div></a>
            </div>
          </div>
        </article>
        <article className={style.nav2}>
          <div className={style.sub}>
            <div className={style.bar}>
              <div>
                <i class="fa-solid fa-bars"></i> All
              </div>
            </div>
            <div>
              <a href=""><div>Amazon miniTV</div></a>
            </div>
            <div>
              <a href=""><div>Sell</div></a>
            </div>
            <div>
              <a href=""><div>Best Sellers</div></a>
            </div>
            <div>
              <a href=""><div>Mobiles</div></a>
            </div>
            <div>
              <a href=""><div>Today's Deals</div></a>
            </div>
            <div>
              <a href=""><div>Customer service</div></a>
            </div>
            <div>
              <a href=""><div>Electronics</div></a>
            </div>
            <div>
              <a href="">
              <div>
                Prime <i class="fa-solid fa-sort-down"></i>
              </div>
              </a>
            </div>
            <div>
              <a href=""><div>New Releases</div></a>
            </div>
            <div>
              <a href=""><div>Home & Kitchen</div></a>
            </div>
            <div>
              <a href=""><div>Amazon Pay</div></a>
            </div>
            <div>
              <a href=""><div>Fashion</div></a>
            </div>
            <div>
              <a href=""><div>Computers</div></a>
            </div>
            <div>
              <a href=""><div>Beauty & Personal Care</div></a>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div>
              <div><a href="">
                <img src={shop} alt="" width={400} height={39} />
                </a></div>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Work1;
