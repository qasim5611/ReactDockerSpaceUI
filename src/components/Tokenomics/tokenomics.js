import React from "react";

export default function tokenomics() {
  return (
    <section className="section token" id="tokenomics">
      <div className="container">
        <div className="row align-items-center">
          <div className="log_wrp-pk">
            <img src="token-img.png" className="token__img" alt="" />

            <div className="circle_logo">
              <img src="logo_wrp.png" className="cirl_1" />
              <img src="circle.png" className="cirl_2" />
            </div>
          </div>
          <div className="col-lg-6 offset-lg-6 token__animated-content">
            <div className="section-header section-header--tire section-header--small-margin">
              <h4>About coin</h4>
              <h2>GOD COIN INCARNATION</h2>
            </div>
            <ul className="token__info-list">
              <li>
                <span>Coin name:</span> Universal God Coin
              </li>
              <li>
                <span>Ticker Symbol:</span> UGC
              </li>
              <li>
                <span>Smart Contract:</span>
                <b> 0x501fB6D8Bbc65FA6a62CE7B46a786E73C4017b17 </b>
              </li>
              <li>
                <span>Platform:</span> BEP20 / BINANCE SMART CHAIN
              </li>
            </ul>

            <div className="token__desc">
              <div className="token__desc-title">General Description</div>
              <div className="token__desc-text">
                <p>
                  Universal God Coin has been verified Smart Contract on BSC
                  Scan and also did Smart Contract Audit.
                </p>
              </div>
            </div>
            <a
              href="#"
              target="_blank"
              className=" btn--small btn--uppercase btn--orange"
              style={{ padding: "13px 21px", borderRadius: "5px" }}
            >
              <span>Buy Coin</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
