import React from 'react'
import Head from 'next/head'
import '../css/styles.css'
import PaymentContainer from '../components/c-payments'

const Home = () => (
  <div>
    <Head>
      <title>Payment Page Project | Ian Duffy</title>
      {/* <link rel="icon" href="/favicon.ico" /> */}
    </Head>

    <div className="container container__row--v-center u-dis-flex u-full-height">
      <PaymentContainer/>
    </div>
  </div>
)

export default Home
