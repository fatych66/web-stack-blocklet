import '../css/xenon-core.css';
import '../css/bootstrap.css';
import '../css/nav.css';
import '../css/xenon.css';
import '../css/xenon-components.css';
import '../css/xenon-forms.css';
import '../css/xenon-skins.css';

function LeftMenu() {
  return (
    <body className="page-body">
    <div className="page-container">
      <div className="sidebar-menu toggle-others fixed">
        <div className="sidebar-menu-inner">
          <header className="logo-env">
            <div className="mobile-menu-toggle visible-xs">
              <a href="#" data-toggle="user-info-menu">

              </a>
              <a href="#" data-toggle="mobile-menu">

              </a>
            </div>
          </header>
          <ul id="main-menu" className="main-menu">
            <li>
              <a href="#常用推荐" className="smooth">

                <span className="title">常用推荐</span>
              </a>
            </li>
            <li>
              <a>
                <span className="title">灵感采集</span>
              </a>
              <ul>
                <li>
                  <a href="#发现产品" className="smooth">
                    <span className="title">发现产品</span>
                  </a>
                </li>
                <li>
                  <a href="#界面灵感" className="smooth">
                    <span className="title">界面灵感</span>
                  </a>
                </li>
                <li>
                  <a href="#网页灵感" className="smooth">
                    <span className="title">网页灵感</span>
                    <span className="label label-pink pull-right hidden-collapsed">Hot</span>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="https://github.com/WebStackPage/WebStackPage.github.io">

                <span className="tooltip-blue">关于本站</span>
                <span className="label label-Primary pull-right hidden-collapsed">♥︎</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="main-content">
        <h4 className="text-gray">

          常用推荐
        </h4>
        <div className="row">
          <div className="col-sm-3">
            <div
              className="xe-widget xe-conversations box2 label-info"
              data-toggle="tooltip"
              data-placement="bottom"
              title=""
              data-original-title="https://dribbble.com/">
              <div className="xe-comment-entry">
                <a className="xe-user-img">
                  <img data-src="../assets/images/logos/dribbble.png" className="lozad img-circle" width="40"/>
                </a>
                <div className="xe-comment">
                  <a href="#" className="xe-user-name overflowClip_1">
                    <strong>Dribbble</strong>
                  </a>
                  <p className="overflowClip_2">全球UI设计师作品分享平台。</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div
              className="xe-widget xe-conversations box2 label-info"
              data-toggle="tooltip"
              data-placement="bottom"
              title=""
              data-original-title="https://behance.net/">
              <div className="xe-comment-entry">
                <a className="xe-user-img">
                  <img data-src="../assets/images/logos/behance.png" className="lozad img-circle" width="40"/>
                </a>
                <div className="xe-comment">
                  <a href="#" className="xe-user-name overflowClip_1">
                    <strong>Behance</strong>
                  </a>
                  <p className="overflowClip_2">
                    Adobe旗下的设计师交流平台，来自世界各地的设计师在这里分享自己的作品。
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div
              className="xe-widget xe-conversations box2 label-info"
              data-toggle="tooltip"
              data-placement="bottom"
              title=""
              data-original-title="http://www.ui.cn/">
              <div className="xe-comment-entry">
                <a className="xe-user-img">
                  <img data-src="../assets/images/logos/uicn.png" className="lozad img-circle" width="40"/>
                </a>
                <div className="xe-comment">
                  <a href="#" className="xe-user-name overflowClip_1">
                    <strong>UI中国</strong>
                  </a>
                  <p className="overflowClip_2">图形交互与界面设计交流、作品展示、学习平台。</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div
              className="xe-widget xe-conversations box2 label-info"
              data-toggle="tooltip"
              data-placement="bottom"
              title=""
              data-original-title="http://www.zcool.com.cn/">
              <div className="xe-comment-entry">
                <a className="xe-user-img">
                  <img data-src="../assets/images/logos/zcool.png" className="lozad img-circle" width="40"/>
                </a>
                <div className="xe-comment">
                  <a href="#" className="xe-user-name overflowClip_1">
                    <strong>站酷</strong>
                  </a>
                  <p className="overflowClip_2">中国人气设计师互动平台</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3">
            <div
              className="xe-widget xe-conversations box2 label-info"
              data-toggle="tooltip"
              data-placement="bottom"
              title=""
              data-original-title="https://www.pinterest.com/">
              <div className="xe-comment-entry">
                <a className="xe-user-img">
                  <img data-src="../assets/images/logos/pinterest.png" className="lozad img-circle" width="40"/>
                </a>
                <span
                  className="label label-info"
                  data-toggle="tooltip"
                  data-placement="left"
                  title=""
                  data-original-title="Hello I am a Tooltip"
                />
                <div className="xe-comment">
                  <a href="#" className="xe-user-name overflowClip_1">
                    <strong>Pinterest</strong>
                  </a>
                  <p className="overflowClip_2">全球美图收藏采集站</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div
              className="xe-widget xe-conversations box2 label-info"
              data-toggle="tooltip"
              data-placement="bottom"
              title=""
              data-original-title="http://huaban.com/">
              <div className="xe-comment-entry">
                <a className="xe-user-img">
                  <img data-src="../assets/images/logos/huaban.png" className="lozad img-circle" width="40"/>
                </a>
                <span
                  className="label label-info"
                  data-toggle="tooltip"
                  data-placement="left"
                  title=""
                  data-original-title="Hello I am a Tooltip"
                />
                <div className="xe-comment">
                  <a href="#" className="xe-user-name overflowClip_1">
                    <strong>花瓣</strong>
                  </a>
                  <p className="overflowClip_2">收集灵感,保存有用的素材</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div
              className="xe-widget xe-conversations box2 label-info"
              data-toggle="tooltip"
              data-placement="bottom"
              title=""
              data-original-title="https://medium.com/">
              <div className="xe-comment-entry">
                <a className="xe-user-img">
                  <img data-src="../assets/images/logos/medium.png" className="lozad img-circle" width="40"/>
                </a>
                <span
                  className="label label-info"
                  data-toggle="tooltip"
                  data-placement="left"
                  title=""
                  data-original-title="Hello I am a Tooltip"
                />
                <div className="xe-comment">
                  <a href="#" className="xe-user-name overflowClip_1">
                    <strong>Medium</strong>
                  </a>
                  <p className="overflowClip_2">高质量设计文章</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div
              className="xe-widget xe-conversations box2 label-info"
              data-toggle="tooltip"
              data-placement="bottom"
              title=""
              data-original-title="http://www.uisdc.com/">
              <div className="xe-comment-entry">
                <a className="xe-user-img">
                  <img data-src="../assets/images/logos/uisdc.png" className="lozad img-circle" width="40"/>
                </a>
                <span
                  className="label label-info"
                  data-toggle="tooltip"
                  data-placement="left"
                  title=""
                  data-original-title="Hello I am a Tooltip"
                />
                <div className="xe-comment">
                  <a href="#" className="xe-user-name overflowClip_1">
                    <strong>优设</strong>
                  </a>
                  <p className="overflowClip_2">设计师交流学习平台</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3">
            <div
              className="xe-widget xe-conversations box2 label-info"
              data-toggle="tooltip"
              data-placement="bottom"
              title=""
              data-original-title="https://www.producthunt.com/">
              <div className="xe-comment-entry">
                <a className="xe-user-img">
                  <img data-src="../assets/images/logos/producthunt.png" className="lozad img-circle" width="40"/>
                </a>
                <span
                  className="label label-info"
                  data-toggle="tooltip"
                  data-placement="left"
                  title=""
                  data-original-title="Hello I am a Tooltip"
                />
                <div className="xe-comment">
                  <a href="#" className="xe-user-name overflowClip_1">
                    <strong>Producthunt</strong>
                  </a>
                  <p className="overflowClip_2">发现新鲜有趣的产品</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div
              className="xe-widget xe-conversations box2 label-info"
              data-toggle="tooltip"
              data-placement="bottom"
              title=""
              data-original-title="https://www.youtube.com/">
              <div className="xe-comment-entry">
                <a className="xe-user-img">
                  <img data-src="../assets/images/logos/youtube.png" className="lozad img-circle" width="40"/>
                </a>
                <span
                  className="label label-info"
                  data-toggle="tooltip"
                  data-placement="left"
                  title=""
                  data-original-title="Hello I am a Tooltip"
                />
                <div className="xe-comment">
                  <a href="#" className="xe-user-name overflowClip_1">
                    <strong>Youtube</strong>
                  </a>
                  <p className="overflowClip_2">全球最大的学习分享平台</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div
              className="xe-widget xe-conversations box2 label-info"
              data-toggle="tooltip"
              data-placement="bottom"
              title=""
              data-original-title="https://www.google.com/">
              <div className="xe-comment-entry">
                <a className="xe-user-img">
                  <img data-src="../assets/images/logos/google.png" className="lozad img-circle" width="40"/>
                </a>
                <span
                  className="label label-info"
                  data-toggle="tooltip"
                  data-placement="left"
                  title=""
                  data-original-title="Hello I am a Tooltip"
                />
                <div className="xe-comment">
                  <a href="#" className="xe-user-name overflowClip_1">
                    <strong>Google</strong>
                  </a>
                  <p className="overflowClip_2">全球最大的UI学习分享平台</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br/>

        <h4 className="text-gray">

          界面灵感
        </h4>
        <div className="row">
          <div className="col-sm-3">
            <div
              className="xe-widget xe-conversations box2 label-info"
              data-toggle="tooltip"
              data-placement="bottom"
              title=""
              data-original-title="https://www.pttrns.com/">
              <div className="xe-comment-entry">
                <a className="xe-user-img">
                  <img data-src="../assets/images/logos/Pttrns.png" className="lozad img-circle" width="40"/>
                </a>
                <div className="xe-comment">
                  <a href="#" className="xe-user-name overflowClip_1">
                    <strong>Pttrns</strong>
                  </a>
                  <p className="overflowClip_2">
                    Check out the finest collection of design patterns, resources, mobile apps and inspiration
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div
              className="xe-widget xe-conversations box2 label-info"
              data-toggle="tooltip"
              data-placement="bottom"
              title=""
              data-original-title="http://collectui.com/">
              <div className="xe-comment-entry">
                <a className="xe-user-img">
                  <img data-src="../assets/images/logos/CollectUI.png" className="lozad img-circle" width="40"/>
                </a>
                <div className="xe-comment">
                  <a href="#" className="xe-user-name overflowClip_1">
                    <strong>Collect UI</strong>
                  </a>
                  <p className="overflowClip_2">Daily inspiration collected from daily ui archive and beyond.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div
              className="xe-widget xe-conversations box2 label-info"
              data-toggle="tooltip"
              data-placement="bottom"
              title=""
              data-original-title="http://ui.uigreat.com/">
              <div className="xe-comment-entry">
                <a className="xe-user-img">
                  <img data-src="../assets/images/logos/uiuigreat.png" className="lozad img-circle" width="40"/>
                </a>
                <div className="xe-comment">
                  <a href="#" className="xe-user-name overflowClip_1">
                    <strong>UI uigreat</strong>
                  </a>
                  <p className="overflowClip_2">APP界面截图参考</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div
              className="xe-widget xe-conversations box2 label-info"
              data-toggle="tooltip"
              data-placement="bottom"
              title=""
              data-original-title="http://androidniceties.tumblr.com/">
              <div className="xe-comment-entry">
                <a className="xe-user-img">
                  <img data-src="../assets/images/logos/AndroidNiceties.png" className="lozad img-circle" width="40"/>
                </a>
                <div className="xe-comment">
                  <a href="#" className="xe-user-name overflowClip_1">
                    <strong>Android Niceties</strong>
                  </a>
                  <p className="overflowClip_2">
                    A collection of screenshots encompassing some of the most beautiful looking Android apps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br/>
        <h4 className="text-gray">

          网页灵感
        </h4>
        <div className="row">
          <div className="col-sm-3">
            <div
              className="xe-widget xe-conversations box2 label-info"
              data-toggle="tooltip"
              data-placement="bottom"
              title=""
              data-original-title="https://www.awwwards.com/">
              <div className="xe-comment-entry">
                <a className="xe-user-img">
                  <img data-src="../assets/images/logos/awwwards.png" className="lozad img-circle" width="40"/>
                </a>
                <div className="xe-comment">
                  <a href="#" className="xe-user-name overflowClip_1">
                    <strong>Awwwards</strong>
                  </a>
                  <p className="overflowClip_2">
                    Awwwards are the Website Awards that recognize and promote the talent and effort of the best
                    developers, designers and web agencies in the world.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div
              className="xe-widget xe-conversations box2 label-info"
              data-toggle="tooltip"
              data-placement="bottom"
              title=""
              data-original-title="https://www.cssdesignawards.com/">
              <div className="xe-comment-entry">
                <a className="xe-user-img">
                  <img data-src="../assets/images/logos/CSSDesignAwards.png" className="lozad img-circle" width="40"/>
                </a>
                <div className="xe-comment">
                  <a href="#" className="xe-user-name overflowClip_1">
                    <strong>CSS Design Awards</strong>
                  </a>
                  <p className="overflowClip_2">Website Awards & Inspiration - CSS Gallery</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div
              className="xe-widget xe-conversations box2 label-info"
              data-toggle="tooltip"
              data-placement="bottom"
              title=""
              data-original-title="https://thefwa.com/">
              <div className="xe-comment-entry">
                <a className="xe-user-img">
                  <img data-src="../assets/images/logos/fwa.png" className="lozad img-circle" width="40"/>
                </a>
                <div className="xe-comment">
                  <a href="#" className="xe-user-name overflowClip_1">
                    <strong>The FWA</strong>
                  </a>
                  <p className="overflowClip_2">FWA - showcasing innovation every day since 2000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div
              className="xe-widget xe-conversations box2 label-info"
              data-toggle="tooltip"
              data-placement="bottom"
              title=""
              data-original-title="http://www.ecommercefolio.com/">
              <div className="xe-comment-entry">
                <a className="xe-user-img">
                  <img data-src="../assets/images/logos/Ecommercefolio.png" className="lozad img-circle" width="40"/>
                </a>
                <div className="xe-comment">
                  <a href="#" className="xe-user-name overflowClip_1">
                    <strong>Ecommercefolio</strong>
                  </a>
                  <p className="overflowClip_2">Only the Best Ecommerce Design Inspiration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3">
            <div
              className="xe-widget xe-conversations box2 label-info"
              data-toggle="tooltip"
              data-placement="bottom"
              title=""
              data-original-title="http://www.lapa.ninja/">
              <div className="xe-comment-entry">
                <a className="xe-user-img">
                  <img data-src="../assets/images/logos/Lapa.png" className="lozad img-circle" width="40"/>
                </a>
                <div className="xe-comment">
                  <a href="#" className="xe-user-name overflowClip_1">
                    <strong>Lapa</strong>
                  </a>
                  <p className="overflowClip_2">The best landing page design inspiration from around the web.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div
              className="xe-widget xe-conversations box2 label-info"
              data-toggle="tooltip"
              data-placement="bottom"
              title=""
              data-original-title="http://reeoo.com/">
              <div className="xe-comment-entry">
                <a className="xe-user-img">
                  <img data-src="../assets/images/logos/reeoo.png" className="lozad img-circle" width="40"/>
                </a>
                <div className="xe-comment">
                  <a href="#" className="xe-user-name overflowClip_1">
                    <strong>Reeoo</strong>
                  </a>
                  <p className="overflowClip_2">web design inspiration and website gallery</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div
              className="xe-widget xe-conversations box2 label-info"
              data-toggle="tooltip"
              data-placement="bottom"
              title=""
              data-original-title="https://designmunk.com/">
              <div className="xe-comment-entry">
                <a className="xe-user-img">
                  <img data-src="../assets/images/logos/designmunk.png" className="lozad img-circle" width="40"/>
                </a>
                <div className="xe-comment">
                  <a href="#" className="xe-user-name overflowClip_1">
                    <strong>Designmunk</strong>
                  </a>
                  <p className="overflowClip_2">Best Homepage Design Inspiration</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div
              className="xe-widget xe-conversations box2 label-info"
              data-toggle="tooltip"
              data-placement="bottom"
              title=""
              data-original-title="https://bestwebsite.gallery/">
              <div className="xe-comment-entry">
                <a className="xe-user-img">
                  <img data-src="../assets/images/logos/BWG.png" className="lozad img-circle" width="40"/>
                </a>
                <div className="xe-comment">
                  <a href="#" className="xe-user-name overflowClip_1">
                    <strong>Best Websites Gallery</strong>
                  </a>
                  <p className="overflowClip_2">Website Showcase Inspiration | Best Websites Gallery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3">
            <div
              className="xe-widget xe-conversations box2 label-info"
              data-toggle="tooltip"
              data-placement="bottom"
              title=""
              data-original-title="http://www.pages.xyz/">
              <div className="xe-comment-entry">
                <a className="xe-user-img">
                  <img data-src="../assets/images/logos/pages.png" className="lozad img-circle" width="40"/>
                </a>
                <div className="xe-comment">
                  <a href="#" className="xe-user-name overflowClip_1">
                    <strong>Pages</strong>
                  </a>
                  <p className="overflowClip_2">Curated directory of the best Pages</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div
              className="xe-widget xe-conversations box2 label-info"
              data-toggle="tooltip"
              data-placement="bottom"
              title=""
              data-original-title="https://sitesee.co/">
              <div className="xe-comment-entry">
                <a className="xe-user-img">
                  <img data-src="../assets/images/logos/SiteSee.png" className="lozad img-circle" width="40"/>
                </a>
                <div className="xe-comment">
                  <a href="#" className="xe-user-name overflowClip_1">
                    <strong>SiteSee</strong>
                  </a>
                  <p className="overflowClip_2">
                    SiteSee is a curated gallery of beautiful, modern websites collections.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div
              className="xe-widget xe-conversations box2 label-info"
              data-toggle="tooltip"
              data-placement="bottom"
              title=""
              data-original-title="https://www.siteinspire.com/">
              <div className="xe-comment-entry">
                <a className="xe-user-img">
                  <img data-src="../assets/images/logos/siteInspire.png" className="lozad img-circle" width="40"/>
                </a>
                <div className="xe-comment">
                  <a href="#" className="xe-user-name overflowClip_1">
                    <strong>Site Inspire</strong>
                  </a>
                  <p className="overflowClip_2">A CSS gallery and showcase of the best web design inspiration.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div
              className="xe-widget xe-conversations box2 label-info"
              data-toggle="tooltip"
              data-placement="bottom"
              title=""
              data-original-title="http://web.uedna.com/">
              <div className="xe-comment-entry">
                <a className="xe-user-img">
                  <img data-src="../assets/images/logos/WebInspiration.png" className="lozad img-circle" width="40"/>
                </a>
                <div className="xe-comment">
                  <a href="#" className="xe-user-name overflowClip_1">
                    <strong>WebInspiration</strong>
                  </a>
                  <p className="overflowClip_2">网页设计欣赏,全球顶级网页设计</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3">
            <div
              className="xe-widget xe-conversations box2 label-info"
              data-toggle="tooltip"
              data-placement="bottom"
              title=""
              data-original-title="http://navnav.co/">
              <div className="xe-comment-entry">
                <a className="xe-user-img">
                  <img data-src="../assets/images/logos/navnav.png" className="lozad img-circle" width="40"/>
                </a>
                <div className="xe-comment">
                  <a href="#" className="xe-user-name overflowClip_1">
                    <strong>navnav</strong>
                  </a>
                  <p className="overflowClip_2">
                    A ton of CSS, jQuery, and JavaScript responsive navigation examples, demos, and tutorials from all
                    over the web.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div
              className="xe-widget xe-conversations box2 label-info"
              data-toggle="tooltip"
              data-placement="bottom"
              title=""
              data-original-title="https://www.reallygoodux.io/">
              <div className="xe-comment-entry">
                <a className="xe-user-img">
                  <img data-src="../assets/images/logos/ReallyGoodUX.png" className="lozad img-circle" width="40"/>
                </a>
                <div className="xe-comment">
                  <a href="#" className="xe-user-name overflowClip_1">
                    <strong>Really Good UX</strong>
                  </a>
                  <p className="overflowClip_2">
                    A library of screenshots and examples of really good UX. Brought to you by
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br/>

        <footer className="main-footer sticky footer-type-1">
          <div className="footer-inner">
            <div className="footer-text">
              &copy; 2017-2022
              <a href="../cn/about.html">
                <strong>WebStack</strong>
              </a>{' '}
              design by{' '}
              <a href="https://www.viggoz.com" target="_blank" rel="noreferrer">
                <strong>Viggo</strong>
              </a>
            </div>

            <div className="go-up">
              <a href="#" rel="go-top">

              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
    </body>
  );
}

export default LeftMenu;
