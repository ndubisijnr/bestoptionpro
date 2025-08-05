<script setup>
import StockWatchlist from '../components/StockWatchlist.vue';
import CryptoWatchlist from '../components/CryptoWatchlist.vue';
import { ref } from 'vue';

const selectPlan = ref('weekly')

</script>
<template>

    <nav class="navbar navbar-bg navbar-expand-md fixed-top wow animate__zoomIn">

        <div class="container-fluid">
            <div class=""><em style="font-size: 1.5rem;font-weight: 800;color: #4caf50;">Etfsmartpro</em></div>

            <!-- <a class="navbar-brand" href="/"> <img src="main/images/caption.png" /> </a> -->
            <img class="navbar-toggler" src="../assets/undraw_asymmetric-parallels.svg" type="button"
                data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse"
                aria-expanded="false" aria-label="Toggle navigation" />

            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav me-auto mb-2 mb-md-0 justify-content-center" style="width: 100%;">
                    <li class="nav-item active-nav">
                        <a class="nav-link text-dark" aria-current="page" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-dark" aria-current="page" href="/option-trading">Options Trading</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-dark" aria-current="page" href="/futures">Futures</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-dark" href="/advance-trading">Advanced trading</a>
                    </li>


                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-dark" href="#" data-bs-toggle="dropdown"
                            aria-expanded="false">Investments</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="/oil-and-gas">Oil and gas</a></li>
                            <li><a class="dropdown-item" href="/real-estate">Real Estate</a></li>
                            <li><a class="dropdown-item" href="/software">Technology</a></li>
                        </ul>
                    </li>
                    <!-- <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"
                    aria-expanded="false">More</a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#howto"> How it works</a></li>
                    <li><a class="dropdown-item" href="#pricing"> Pricing and Plans</a></li>
                    <li><a class="dropdown-item" href="#faq">FAQ</a></li>
                </ul>
            </li> -->
                    <li class="nav-item dropdown">
                    </li>



                </ul>
                <div class="d-lg-flex col-lg-3 justify-content-lg-end">
                    <a href="/register" class="btn-primary"><i class="fa fa-sign-in">&nbsp;</i> Create An Account</a>
                </div>
            </div>
        </div>

    </nav>

    <div class="main-body">

        <div class="topchart">

            <section class="slider_section position-relative">
                <div class="container-fluid">
                    <div class="row">
                        <!-- <div class="col-md-2 offset-md-2">
            <div class="slider_heading">
                <h2>
                    B EST<span>EST</span>
                </h2>
            </div>
        </div> -->
                        <div class="col-md-8 mx-auto">
                            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                                <!-- <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"><i class="fa fa-shekel"></i> </li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"> <i class="fa fa-money"></i> </li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"><i class="fa fa-bookmark"></i> </li>
                </ol> -->
                                <div class="carousel-inner">
                                    <div class="carousel-item active">

                                        <div class="box">
                                            <img src="/src/main/images/job.jpg"
                                                style="width:100%;position:fixed;z-index:-1;top:0;background-size:cover;background-position: center center; left:0;height:100%;" />

                                            <div class="detail-box">
                                                <h1 class="wow animate__bounce animate__delay-3s">
                                                    Maximize Your Earnings:
                                                    <br />
                                                    Expert Tools for Every Trader!
                                                </h1>
                                                <hr />
                                                <h5 class="text-white wow animate__heartBeat">FAST PAYOUTS, PRO -
                                                    TRADING, ZERO RISK</h5>
                                                <div class="btn-box wow animate__jello animate__delay-5s"
                                                    style="justify-content:start">
                                                    <a href="/login" class="btn-1" style="background-color: #4caf50;">
                                                        Login
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </div>

        <!--Follow up note-->
        <div class="topfollow">

            <div class="container position-relative">
                <div class="row">
                    <div class="col-md-8 colx">
                        <div class="descard wow animate__fadeInUp">
                            <div class="content">
                                <h2 class="text-left">
                                    Why trade with Etfsmartpro?
                                </h2>
                                <p>
                                    Trading with <strong>Etfsmartpro </strong> will grant you access to
                                    comprehensive educational skills to enhance your knowledge - Materials of modern
                                    risk management skills to help optimize your trades for maximum profitability while
                                    minimizing potential losses.<br />
                                    Following top traders and replicateing their strategies with our AI-powered mirror
                                    trading services for consistent reliable results,demo accounts, and 24/7 support to
                                    your financial success, we work tirelessly to remain at the forefront in trading
                                    online. Join now! Take full advantage of the opportunity we provide and make your
                                    way into the world of professional trading.
                                </p>
                            </div>
                            <div class="image">
                                <img src="/src/main/images/atradingchartview.jpeg" alt="art banner" />

                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 colx">
                        <div class="desimage wow animate__fadeInUp">
                            <img src="/src/main/images/trader1.jpg" alt="art banner" />
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="topfollow">
            <div class="p-5 position-relative">
                <h1><strong>Investments</strong></h1>
                <div class="row">
                    <div class="col-md-4">
                        <a href="/oil-and-gas">
                            <div class="invbox wow animate__pulse">
                                <div class="content">
                                    <h2>
                                        Oil and Gas
                                    </h2>
                                    <p>
                                        When investing in stocks, this is one of the major industry sectors to focus on
                                        as data from the energy information administration shows that natural gas was
                                        the second most widely used fuel in U.S as at 2021.
                                    </p>
                                </div>
                                <div class="image">
                                    <img src="/src/main/images/oil_and_gas.jpg" alt="art banner" />

                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-4 ">
                        <a href="/real-estate">
                            <div class="invbox wow animate__pulse">
                                <div class="content">
                                    <h2>
                                        Real Estate
                                    </h2>
                                    <p>
                                        Trading on real estate bring in long term gains as real estate ony appreciates
                                        over time and is one of the most stable form of investments when executed
                                        properly.
                                    </p>
                                </div>
                                <div class="image">
                                    <img src="/src/main/images/estate.jpg" alt="art banner" />

                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-4">
                        <a href="/software">
                            <div class="invbox wow animate__pulse">
                                <div class="content">
                                    <h2>
                                        Technology
                                    </h2>
                                    <p>
                                        Software and hardware companies are another sector to watch out for when
                                        investing in the stocks market. We are in the information age and has a lot of
                                        role it plays in our everyday lives.
                                    </p>
                                </div>
                                <div class="image">
                                    <img src="/src/main/images/meet.jpg" alt="art banner" />

                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- How it works -->
        <div id="howto" class="how" style="background-color: #fff">
            <div class="p-5 d-flex justify-content-center align-items-center">

                <div class="row">
                    <!-- <div class="col-md-6  wow animate__flash">
                <img src="/src/main/images/howto.jpg" />
            </div> -->
                    <div class="">
                        <div class="bot">
                            <h1 class="text-center">
                                OUR BUSINESS STRATEGY
                            </h1>
                            <hr />
                            <p class="text-center">
                                We look for business teams that can design a project that will generate long-term
                                financial returns, <br />
                                and this has helped us establish our reputation as a company with dependable
                                investing knowledge and dependable profitability.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Pricing -->


        <div id="getstarted" style="background-color: #fff;" class="p-5">
            <section class="faintflux">

                <div class="page_container">
                    <div class="row">
                        <div class="col-md-6 ">
                            <div class="lightbox  wow animate__fadeInLeft ">
                                <div class="p-home-m-seo-for-everyone__item"
                                    style="margin-right: 10px;margin-bottom:15px;background-image: url('/src/main/assets/social-bg.jpg') !important">
                                    <h3>Clear Investment Processes</h3>
                                    <p class="p-home-m-seo-for-everyone__item-list" style="padding: 0;">
                                        Our transparent investment processes detail how each investment team
                                        identifies and
                                        implements investment opportunities and the risk/return profile to be
                                        expected. We believe
                                        that strict adherence to these guidelines is one of the most effective forms
                                        of risk
                                        management.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 ">
                            <div class="lightbox  wow animate__fadeInLeft">
                                <div
                                    style="margin-left: 10px;margin-bottom:15px;background-image: url('/src/main/assets/chat-bg.jpg') !important">
                                    <h3>
                                        ESG
                                        Integration
                                    </h3>
                                    <p>
                                        As a signatory of the United Nations-supported Principles for Responsible
                                        Investment (UN
                                        PRI) initiative, we're committed to investing responsibly and supported by a
                                        global team of
                                        dedicated ESG specialists whose recommendations help shape the investment
                                        process.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 ">
                            <div class="lightbox  wow animate__fadeInRight">
                                <h3>Robust Oversight</h3>
                                <p>
                                    Portfolio risk management is supplemented by our independent risk and quantitative
                                    analytics team and investment teams to measure behavioral biases and
                                    report to senior investment management that
                                    assesses the risk.
                                </p>
                            </div>
                        </div>
                        <div class="col-md-6 ">
                            <div class="lightbox wow animate__fadeInRight">
                                <h3>
                                    High-Conviction,
                                    Risk-Aware Portfolios
                                </h3>
                                <p>
                                    Our focus on proprietary, security-level research allows us to build
                                    high-conviction,
                                    differentiated portfolios. Our risk management processes provide valuable
                                    insight to help
                                    our teams understand potential outcomes.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>

                    </div>
                </div>
            </section>
        </div>

        <!--Trading view scroller-->
        <div>
            <!-- TradingView Widget BEGIN -->


            <!-- TradingView Widget END -->
        </div>


        <!-- Service briefing -->
        <div class="brief" style="background-color: #ffffff;">
            <canvas id="myCanvas"></canvas>
            <div class=" p-5">
                <h1><strong>Trading</strong></h1>
                <div class="row">

                    <div class="col-md-4">
                        <div class="briefbox  wow animate__fadeInLeft">
                            <img src="/src/main/images/trades.jpg" />
                            <a href="/option-trading" class="position-relative">
                                <div class="caption">
                                    <div class="">

                                        <h4> Options Trading </h4>
                                        <p>
                                            Options trading offers unparalleled flexibility and strategic opportunities
                                            for investors of all levels. With options, you can ize on market movements,
                                            hedge against risk, and generate income with precision.<br /> Whether you're
                                            new to trading or a seasoned investor, our platform provides the tools and
                                            resources you need to navigate the options market with confidence
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="briefbox  wow animate__fadeInUp">
                            <img src="/src/main/images/trades.jpg" />
                            <a href="/advance-trading" class="position-relative">
                                <div class="caption">
                                    <div class="">

                                        <h4> Advance Trading</h4>
                                        <p>
                                            At Advanced Trading, we empower traders with cutting-edge tools and
                                            strategies to navigate the dynamic world of financial markets. Our platform
                                            offers advanced trading features, including algorithmic trading systems,
                                            automated trading, and sophisticated risk management tools, designed to
                                            maximize profits and minimize losses.
                                        </p>

                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="briefbox  wow animate__fadeInRight">
                            <img src="/src/main/images/trades.jpg" />
                            <div class="position-relative">
                                <div class="caption">
                                    <div class="">

                                        <h4> Futures</h4>
                                        <p>
                                            Dive into the world of futures trading and unlock a realm of opportunity.
                                            With futures contracts, investors can leverage small price movements to
                                            potentially amplify profits, all while managing risk
                                        </p>
                                        <p><a href="/futures" class="btn btn primary"> Learn More</a> </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>





        <!-- How it works -->
        <div id="howto" class="how" style="background-color: #fff">
            <div class="p-5">
                <h1><strong>How it works</strong></h1>
                <p>
                    Begin by creating your account, Deposit funds into it. Choose your preferred account plan based on
                    your trading goals, risk tolerance, and investment timeframe.<br />
                    Our AI system will channel your funds into the designated strategy automatically. You have the
                    flexibility to switch between different account plans at any time, depending on your evolving
                    trading objectives and market�conditions
                </p>
                <div class="row">
                    <div class="col-md-6  wow animate__flash">
                        <img src="/src/main/images/howto.jpg" />
                    </div>
                    <div class="col-md-6">
                        <div class="bot">
                            <h4>
                                Powerful Trading Platforms to help you succeed
                            </h4>
                            <hr />
                            <p>
                                Clients in over 200 countries and territories trade stocks, options,
                                futures, currencies,
                                bonds, funds and more on 150 global markets on our single unified platform.
                            </p>
                            <p>
                                Spot opportunities and calibrate complete portfolio performance. Keep your
                                performance track
                                record with PortfolioAnalyst inception reporting and historical aggregation
                                at no cost.
                            </p>
                            <p>
                                Our mission is to bring advanced portfolio analytics to everyone who needs
                                them both
                                professionals and individuals. The best way to do that is to offer them at
                                no cost, with no
                                strings.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="text-center">
                    <p>
                        <a class="btn btn-dark rounded-pill" href="/register">
                            Get
                            Started
                        </a>

                    </p>
                </div>
            </div>


        </div>
        <!-- Pricing -->




        <div class="hero">
            <div class="p-5">
                <div class="row">
                    <div class="col-md-12">
                        <h1>TRADE LIKE YOUR DESIRED EXPERT</h1>
                        <section id="components" style="font-size: 1.1rem;">

                            <p class="text-center">
                                Across all industries, we provide automated Mirror trading services.
                                Find the expert you want, link your account to their services, mirror the trades, and
                                learn from the trades across different markets and sectors, options, derivatives,
                                currency pairs, swing/scalp trading, crypto currencies, forex, and indexes. Featuring
                                stop loss software and indicators that provide over 90% protection for your capital.
                                Client capital security is always our top priority.
                            </p>
                        </section>
                    </div>

                </div>
            </div>
        </div>

        <!-- Payouts -->

        <div class="payouts" style="background-color: #fff;">
            <div class="p-5">
                <div>
                    <fieldset>
                        <h1><strong>Pricing</strong></h1>
                        <div>
                            <label>
                                <input type="radio" name="radio" @click="selectPlan = 'weekly'" checked />
                                <span>BASIC</span>
                            </label>
                            <label>
                                <input type="radio" name="radio" @click="selectPlan = 'monthly'" />
                                <span>PRO</span>
                            </label>
                            <label>
                                <input type="radio" name="radio" @click="selectPlan = 'nfp'" />
                                <span>ULTIMATE</span>
                            </label>
                        </div>
                    </fieldset>

                    <div v-show="selectPlan === 'weekly'">

                        <div class="plans">
                            <!-- <div class="pricing-box-2" v-show="selectPlan === 'nfp'">
                                <h2>CORPORATE PLAN </h2>
                                <span class="price">40% - 45% PIPS</span>

                                <span class="pricing-table-divider"></span>
                                <a class="btn" href="/register"><b>Get Started</b></a>
                                <span class="pricing-table-divider"></span>

                                <p>minimum:$50,000</p>
                                <p>maximum:UNLIMITED</p>
                                <p>10% Trade Commission</p>
                                <p>24/7 active support</p>

                            </div>
                            <div class="pricing-box-2">
                                    <h2>ULTIMATE PLAN </h2>
                                    <span class="price">200% PIPS</span>

                                    <span class="pricing-table-divider"></span>

                                    <a class="btn" href="/register"><b>Get Started</b></a>
                                    <span class="pricing-table-divider"></span>

                                    <p>minimum:$50,000</p>
                                    <p>maximum:$99,999</p>
                                    <p>10% Trade Commission</p>
                                    <p>24/7 active support</p>

                                </div> -->

                                <div class="pricing-box-2">
                                    <h2>STARTER PLAN </h2>
                                    <span class="price">5% Daily Interest</span>

                                    <span class="pricing-table-divider"></span>
                                    <a class="btn" href="/register"><b>Get Started</b></a>
                                    <span class="pricing-table-divider"></span>

                                    <p>minimum:$1,000</p>
                                    <p>maximum:$3,000</p>

                                    <p>24/7 active support</p>

                                </div>
                                <div class="pricing-box-2">
                                    <h2>SLIVER</h2>
                                    <span class="price">5% Daily Interest</span>

                                    <span class="pricing-table-divider"></span>
                                    <a class="btn" href="/register"><b>Get Started</b></a>
                                    <span class="pricing-table-divider"></span>

                                    <p>minimum:$2,000</p>
                                    <p>maximum:$5,000</p>

                                    <p>24/7 active support</p>

                                </div>
                                <div class="pricing-box-2">
                                    <h2>GOLD</h2>
                                    <span class="price">5% Daily Interest</span>

                                    <span class="pricing-table-divider"></span>
                                    <a class="btn" href="/register"><b>Get Started</b></a>
                                    <span class="pricing-table-divider"></span>

                                    <p>minimum:$3,000</p>
                                    <p>maximum:$7,500</p>

                                    <p>24/7 active support</p>

                                </div>


                        </div>
                    </div>

                    <div v-show="selectPlan === 'monthly'" class="">
                        <div class="plans">

                            <div class="pricing-box-2">
                                <h2>GOLD </h2>
                                <span class="price">5% Daily Interest</span>

                                <span class="pricing-table-divider"></span>
                                <a class="btn position-relative" href="/register"><b>Get Started</b></a>
                                <span class="pricing-table-divider"></span>

                                <p>minimum:$3,000</p>
                                <p>maximum:$8,000</p>
                                <p>Risk Managements</p>
                                <p>24/7 active support</p>

                            </div>
                            <div class="pricing-box-2">
                                <h2>PREMIUM PLAN </h2>
                                <span class="price">5% Daily Interest</span>

                                <span class="pricing-table-divider"></span>
                                <a href="/register" class="btn"><b>Get Started</b></a>
                                <span class="pricing-table-divider"></span>
                                <p>minimum:$5,000</p>
                                <p>maximum:$10,000</p>
                                <p>Risk Managements</p>
                                <p>24/7 active support</p>
                            </div>

                        </div>
                    </div>

                    <div v-show="selectPlan === 'nfp'" class="">
                        <div class="plans">
                        <div class="pricing-box-2">
                                <h2>PLATINUM PLAN </h2>
                                <span class="price">5% Daily Interest</span>

                                <span class="pricing-table-divider"></span>
                                <a class="btn" href="/register"><b>Get Started</b></a>
                                <span class="pricing-table-divider"></span>

                                <p>minimum:$10,000</p>
                                <p>maximum:$15,000</p>
                                <p>Risk Managements</p>
                                <p>24/7 active support</p>

                            </div>
                            <div class="pricing-box-2">
                                <h2>MASTER PLAN  </h2>
                                <span class="price">5% Daily Interest</span>

                                <span class="pricing-table-divider"></span>
                                <a class="btn" href="/register"><b>Get Started</b></a>
                                <span class="pricing-table-divider"></span>

                                <p>minimum:$15,000</p>
                                <p>maximum:$20,000</p>
                                <p>Risk Managements</p>
                                <p>24/7 active support</p>

                            </div>
                            <div class="pricing-box-2">
                                <h2>ULTIMATE PLAN </h2>
                                <span class="price">5% Daily Interest</span>

                                <span class="pricing-table-divider"></span>
                                <a class="btn" href="/register"><b>Get Started</b></a>
                                <span class="pricing-table-divider"></span>

                                <p>minimum:$20,000</p>
                                <p>maximum:UNLIMITED</p>
                                <p>Risk Managements</p>
                                <p>24/7 active support</p>

                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </div>

        <!-- FAQ -->
        <div id="faq" class="faq">
            <div class="">
                <div class="p-5">
                    <h1>Trading Pairs.</h1>
                    <!-- <p><small>Find tips to help you get started</small></p> -->
                    <div class="row">

                        <!-- TradingView Widget BEGIN -->

                        <StockWatchlist></StockWatchlist>
                        <!-- TradingView Widget END -->
                    </div>

                    <div class="row" style="height: 100vh;">
                        <!-- TradingView Widget BEGIN -->
                        <CryptoWatchlist></CryptoWatchlist>

                        <!-- TradingView Widget END -->
                    </div>



                </div>
            </div>
        </div>


        <!-- FAQ -->
        <div class="faq">
            <div class="p-5">
                <div class="row">
                    <div class="col-md-12">
                        <h1>Frequently Asked Questions</h1>
                        <section id="components">

                            <article class="my-3" id="accordion">
                                <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
                                    <p>Learn from the most frequent questions</p>
                                </div>

                                <div>
                                    <div class="bd-example-snippet bd-code-snippet">
                                        <div class="bd-example">
                                            <div class="accordion" id="accordionExample">
                                                <div class="accordion-item">
                                                    <h4 class="accordion-header" id="headingOne">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                                            aria-expanded="false" aria-controls="collapseOne">
                                                            What is Etfsmartpro ?
                                                        </button>
                                                    </h4>
                                                    <div id="collapseOne" class="accordion-collapse collapse "
                                                        aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            <strong>Etfsmartpro </strong> is a broker that is
                                                            comprised of a top-tier management team that utilizes your
                                                            to execute trades across various offerings, thereby
                                                            transforming your into a profitable venture.
                                                            <code>Our commitment</code> is to deliver optimal results
                                                            and corresponding returns�to�our�clients.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h4 class="accordion-header" id="headingTwo">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                            aria-expanded="false" aria-controls="collapseTwo">
                                                            Why should I choose Etfsmartpro ?
                                                        </button>
                                                    </h4>
                                                    <div id="collapseTwo" class="accordion-collapse collapse"
                                                        aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            <p> We have some of the most favorable terms on our trading
                                                                challenges, which you can also customize based on your
                                                                preferred strategy. We also provide quick payouts and
                                                                accept payments using crypto currencies.</p>

                                                            <p> Apart from providing virtual , education and community,
                                                                we have many more digital products for traders on our
                                                                roadmap. We keep up with market signals and place the
                                                                best trades when possible thus giving our clients huge
                                                                returns on their investments.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h4 class="accordion-header" id="headingThree">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                            aria-expanded="false" aria-controls="collapseThree">
                                                            What is Options Trading?
                                                        </button>
                                                    </h4>
                                                    <div id="collapseThree" class="accordion-collapse collapse"
                                                        aria-labelledby="headingThree"
                                                        data-bs-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            <strong>It is the buying of stocks with intention to hold
                                                                them for a long time to gain profit.</strong> Buying
                                                            stocks and holding on to them with a view to making long
                                                            term gains is after all one of the more common investment
                                                            strategies. It's also a perfectly sensible way invest, we
                                                            know the right stoks to purchase to help you make the most
                                                            of your .
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h4 class="accordion-header" id="headingFour">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                                            aria-expanded="false" aria-controls="collapseThree">
                                                            How do I get started?
                                                        </button>
                                                    </h4>
                                                    <div id="collapseFour" class="accordion-collapse collapse"
                                                        aria-labelledby="headingThree"
                                                        data-bs-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            <strong>Register with us <a href="/register">Click here</a>
                                                            </strong> After registration, fund your account, select
                                                            required package and based on your subscription we will
                                                            execute trades for you.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h4 class="accordion-header" id="headingFive">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseFive"
                                                            aria-expanded="false" aria-controls="collapseThree">
                                                            How do I receive payouts?
                                                        </button>
                                                    </h4>
                                                    <div id="collapseFive" class="accordion-collapse collapse"
                                                        aria-labelledby="headingThree"
                                                        data-bs-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            Within a <strong>three-hour period</strong>, simply log in
                                                            to your user dashboard and request a payout. Your account
                                                            will then reflect the accumulated interest generated by your
                                                            over time, providing guidance for you to initiate the
                                                            payment�request.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </article>
                        </section>
                    </div>

                </div>
            </div>
        </div>




        <!--Trade on any device-->
        <div class="  bg-black testimonial">
            <div class="p-5">
                <div class="w-100">
                    <div class="float-left text-left">
                    </div>
                    <div class="float-right text-right">
                        <h2 class="float-right text-right">
                            Testimonials
                        </h2>
                        <p class="float-right text-right" style="text-shadow: 1px 1px 2px black;"
                            data-trans="seodevices_desc">
                            We welcome you to join us, see comments from existing users
                        </p>
                    </div>
                </div>
                <div class="container">

                    <div class="horizontal-scroll-wrapper ">
                        <a href="/register">
                            <img src="/src/main/images/p1.jpg" />
                            <p>
                                <small class="text-black">I've been able to work and trade with ease</small>
                                <br /><span><i>- Kate</i></span>
                            </p>
                        </a>
                        <a href="/register">
                            <img src="/src/main/images/p2.jpg" />
                            <p>
                                <small class="text-black">Always wondered how best to invest till I got here</small>
                                <br /><span><i>- Ellen</i></span>
                            </p>
                        </a>
                        <a href="/register">
                            <img src="/src/main/images/p3.jpg" />
                            <p>
                                <small class="text-black">Zero risk and profits only? I'm always in!'</small>
                                <br /><span><i>- Bob</i></span>
                            </p>
                        </a>
                        <a href="/register">
                            <img src="/src/main/images/p4.jpg" />
                            <p>
                                <small class="text-black">The professional support provided is welcoming</small>
                                <br /><span><i>- Tim</i></span>
                            </p>
                        </a>
                        <a href="/register">
                            <img src="/src/main/images/p8.jpg" />
                            <p>
                                <small class="text-black">Now making real profits from investments other than before
                                </small>
                                <br /><span><i>- Alice</i></span>
                            </p>
                        </a>
                        <a href="/register">
                            <img src="/src/main/images/p5.jpg" />
                            <p>
                                <small class="text-black">Let the professionals help me make cool legit profit </small>
                                <br /><span><i>- Jaden</i></span>
                            </p>
                        </a>
                        <a href="/register">
                            <img src="/src/main/images/p7.jpg" />
                            <p>
                                <small class="text-black">When they said zero risk, I doubted, now I'm their biggest
                                    fan'</small>
                                <br /><span><i>- Nora</i></span>
                            </p>
                        </a>
                        <a href="/register">
                            <img src="/src/main/images/p6.jpg" />
                            <p>
                                <small class="text-black">They've really made my synchronize to profits. Best Options
                                    Pro!!</small>
                                <br /><span><i>- Prakash</i></span>
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- <button class="open-button wow animate__shakeY delay-5s animate__delay-5s"  onclick="openForm()"><i class="fa fa-2x fa-comment"></i></button> -->

        <div class="chat-popup" id="myForm">
            <div class="form-container">
                <img src="/src/main/images/logo.png" height="80" />
                <p><small> <i class="fa fa-support">&nbsp;</i> support</small></p>
                <button type="button" class="cancel" onclick="closeForm()"> X </button>

                <div id="opencase" class="text-center nodisplay">

                    <input class="form-control-sm" name="email" id="email" type="email"
                        placeholder="Please insert your email" />
                    <input class="form-control-sm" name="name" id="name" placeholder="Your first name" />
                    <textarea class="form-control-sm" id="subject" name="subject" maxlength="200"
                        placeholder="How may we assist you?"></textarea>
                    <button id="btnSupport" onclick="createSupport();" class="btn-outline text-black"><i
                            class="fa fa-envelope">&nbsp;</i>Send</button>
                </div>

                <div id="handlecase" class="nodisplay">
                    <div class="chatcontainer">
                        <div class="container">
                            <div class="panel panel-inverse">

                                <div id="scroller" class="panel-body">
                                    <span id="subjectv">Hang on, someone will be with you shortly.</span><br />
                                    <hr />

                                    <div id="messages">
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <span text-center>loading....</span>
                                        <br /> <small>You can send additional message</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="chat">

                            <input id="message" required type="text" class="form-control-sm"
                                placeholder="Say something here....." />
                            <button id="btnChat" onclick="sendchat('message');" class="btn-inverse">
                                <i class="fa fa-arrow-circle-right"></i>
                            </button>


                        </div>

                    </div>

                </div>


            </div>
        </div>


    </div>

    <div class="footer">
        <div class="p-5">
            <div class="row">
                <div class="col-md-6">
                    <img src="/src/main/images/atradingchartview.jpeg" />
                </div>
                <div class="col-md-6">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-6">
                                    <h4>Etfsmartpro </h4>
                                    <hr />
                                    <ul>
                                        <li>
                                            <a href="mailto://support@equisync.com">
                                                <i class="fa fa-envelope">&nbsp;</i>Mail Support
                                            </a>
                                        </li>
                                        <li><i class="fa fa-phone-square">&nbsp;</i> +1 (470) 758-2628 </li>
                                        <li><i class="fa fa-phone-square">&nbsp;</i> +1 (989) 318-3365 </li>
                                    </ul>
                                </div>
                                <div class="col-md-6">
                                    <p>
                                        <small>
                                            <i class="fa fa-address-book">&nbsp;</i>
                                            24TH FLOOR, ONE CANADA SQUARE CANARY WHARF E14 5AB, UNITED KINGDOM<br />
                                            <br /> <i class="fa fa-address-book">&nbsp;</i> LIGHTHOUSE TRUST NEVIS LTD,
                                            SUITE 1, A.L. EVELYN LTD BUILDING, MAIN STREET, CHARLESTOWN, NEVIS, UNITED
                                            STATES
                                        </small>

                                    </p>

                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <p><strong>Disclaimer:</strong></p>
                            <p>
                                <small>
                                    The Transactions offered by this Website can be executed only by fully competent
                                    adults. Transactions with financial instruments offered on the Website involve
                                    substantial risk and trading may be very risky. If you make Transactions with the
                                    financial instruments offered on this Website, you might incur substantial losses or
                                    even lose everything in your Account. Before you decide to start Transactions with
                                    the financial instruments offered on the Website, you must review the Service
                                    Agreement and Risk Disclosure Information.
                                </small>
                            </p>
                            <p>&copy; 2024 Etfsmartpro </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.active-nav {
    background-color: #4caf50;
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
    color: #fff;

}

.hero {
    background-color: #000000c3;
    color: #fff;
    /* height: 50vh; */
    margin: auto 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.plans {
    display: flex;
    justify-content: center;
    gap: 40px;
}

.pricing-box-2 {
    padding-top: 15px;
    font-size: 1.2rem;
    text-align: center;
    margin-top: 15px;
}

@media (min-width:999px) {
    .hero {
        height: 50vh;
        padding: 10rem;
    }

}

@media (max-width:999px) {
    .plans {
        flex-direction: column;
    }
}
</style>