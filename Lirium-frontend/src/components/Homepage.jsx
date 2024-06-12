import React from 'react';
import GetOneBlock from './GetOneBlock';

export const Homepage = () => {
  return (
    <div className='container'>
      <div className='landing-page'>
        <h1>Welcome To Lirium-Protocol</h1>
        <h2>Revolutionizing the Future of Decentralized Finance</h2>
        <div>
          Our Vision At LIRIUM-PROTOCOL, we believe in a decentralized future
          where individuals have complete control over their digital assets and
          financial transactions. Our mission is to create a secure,
          transparent, and efficient blockchain ecosystem that empowers users
          and drives innovation in the digital economy.
        </div>
        <div>
          Get Started with LIRIUM-PROTOCOL Join us on our journey to transform
          the decentralized finance landscape. Explore our comprehensive suite
          of tools and resources designed to help developers, businesses, and
          individuals harness the full potential of blockchain technology.
          <p>
            Welcome to the future of blockchain. Welcome to LIRIUM-PROTOCOL.
          </p>
        </div>
        <ul className='ul-wrapper'>
          <h4>Stay Connected</h4>
          <li>
            <a href='/maintenance'>Whitepaper</a>
          </li>
          <li>
            <a href='/maintenance'>Developer Resources</a>
          </li>
          <li>
            <a href='/maintenance'>Community Forum</a>
          </li>
          <li>
            <a href='/maintenance'>Blog</a>
          </li>
          <li>
            <a href='/maintenance'>Contact Us</a>
          </li>
        </ul>
      </div>
      <div className='h3-wrap'>
        <h3>
          Try to pick out one block from the chain by choosing a block Index
          (number)
          <GetOneBlock />
        </h3>
      </div>
    </div>
  );
};
