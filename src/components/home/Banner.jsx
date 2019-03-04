import React from 'react';
import { Carousel } from 'antd-mobile';


<Carousel
  autoplay={ true }
  infinite
  dots = { true }
  beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
  afterChange={index => console.log('slide to', index)}
>
  {store.getState().homeStore.bannerdata.map((item, index) => (
    <a
      key={index}
      href="http://www.alipay.com"
      style={{ display: 'inline-block', width: '100%', height: '160px' }}
    >
      <img
        src={`https://www.daxunxun.com${item}`}
        alt=""
        style={{ width: '100%', verticalAlign: 'top' }}
        onLoad={() => {
          // fire window resize event to change height
          window.dispatchEvent(new Event('resize'));
        }}
      />
    </a>
  ))}
</Carousel>

export default Banner
