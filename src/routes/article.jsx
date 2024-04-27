import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "src/components/Header";
import Nav from "src/components/Nav";
import PageWrapper from "src/components/PageWrapper";
import Footer from "src/components/Footer";
import SideAds from "src/components/SidePoster";
import ContentTitle from "src/components/ContentTitle";
import BrandsLogos from "src/components/BrandsLogos";
import BackLink from "src/components/BackLink";
import AddFigure from "src/components/AddFigure";
import MoneyForGiftsImage from "src/img/articles/articles/money-for-gifts.jpg";

function Article() {
  return (
    <PageWrapper>
      <Header />
      <Nav />

      <main className="row mx-0 mt-4">
        <section className="col-9 d-flex flex-column align-items-center">
          <h4>2023.09.10 • 4 min. read</h4>
          <h2 className="text-center">
            <b>
              How Much Should You Spend On Christmas And Other Special-Occasion
              Gifts
            </b>
          </h2>
          <br></br>
          <img
            src={MoneyForGiftsImage}
            alt="Money for gifts"
            className="img-fluid"
            style={{ width: "600px", height: "400px" }}
          />
          <br></br>
          <br></br>

          <h4>
            The history of gift giving goes back thousands of years. It was
            practiced by many ancient cultures, including the Romans and the
            Celtics. The Romans swapped gifts with one another during the
            Saturnalia holiday, while Celtic druids would cut mistletoe and
            distribute it to people. Fast forward to modern times and gift
            giving is practiced around the world every day, for a broad range of
            reasons. Christmas, birthdays, weddings, and many other special
            events are all occasions for gift giving. When buying a gift for
            someone, it's important to consider your budget and how much you
            should spend. In this blog post, we will highlight how much to spend
            on Christmas gifts and gifts for many other occasions. Let's get
            started.
          </h4>

          <br></br>
          <h3>Christmas Gifts</h3>
          <br></br>
          <h4>
            Since 1870, Christmas has been a federal holiday in the United
            States. It is a special day where loved ones and friends share
            presents with one another. It can, of course, be an expensive
            holiday, given the need to buy presents for a number of people. It's
            a good idea to contribute to your Christmas savings fund throughout
            the year, rather than waiting until December to budget for the gifts
            you will need to buy. Generally, 1% of your yearly income is an
            acceptable maximum for Christmas gifts. According to Bankrate, for
            your partner, a budget of approximately $100 is acceptable, though
            this will depend on a range of factors such as your age and income.
            For individual family members, a budget of $50 is recommended. In
            cases where families or groups of friends participate in Secret
            Santa, a budget of between $25 and $40 is acceptable. $10 is
            acceptable when buying gifts for extended family members, such as
            cousins. For coworkers, according to TechRepublic, aim to spend
            around $10 to $20, as is for your broader social circle. With most
            people, it's really the thought that counts, rather than the
            monetary value of the gift. Before we move on from Christmas,
            there's one other group that we couldn't leave out: pets! According
            to OneVet, the vast majority of pet owners buy at least 1 gift for
            their pet. Most people spend between $1 and $50 on their fluffy
            friends.
          </h4>
          <br></br>
          <h3>Birthday Days</h3>
          <br></br>
          <h4>
            Whereas Christmas gifts all come at once, birthdays are spread out
            over the course of the year. According to Reviewed, you should
            budget $100 for your own children's birthday gifts. For other
            children, $25 is seen as the right amount, though you can spend up
            to $100 if buying for the child of a relative or close friend. For a
            work colleague, if you are buying them a present, the average spend
            is less than $20, according to a Google Consumer Survey. As we have
            already highlighted, these are average estimates and your own
            personal financial situation may mean you prefer to spend less or
            more (again, it's the thought that counts).
          </h4>
          <br></br>
          <h3>Weddings</h3>
          <br></br>
          <h4>
            Gifts are an important part of attending (or organizing) a wedding.
            Weddings are generally big-budget events, so it's helpful to have an
            idea of how much you should be spending on gifts. If you attend a
            bridal shower, it's good to bring along a present for the
            bride-to-be. Here, a budget of between $50 to $75 is acceptable,
            according to Brides.com. If you are very close to the bride-to-be,
            you may wish to spend a little more (around $100). For the wedding
            gift to the happy couple, according to The Knot, the average guest
            spends around $120. Of course, the closeness of the relationship
            will play a role here. Guests who are closer spend an average of
            $130, the same amount a family member buying a gift typically pays.
            If you are organizing a wedding, it's important to show your
            appreciation for the people who helped you out. Gifts for the Maid
            of Honor and Best Man should be worth around $75 to $100. For the
            other bridesmaids and groomsmen, spending $40 to $75 is acceptable.
            For other people who helped out during the wedding, such as close
            family members, consider a budget of $15 to $30 each to show your
            appreciation. Finally, wedding favor gifts to the attendees should
            be budgeted at around $5 (or less) each. This is simply a nice touch
            to say thanks for coming.
          </h4>
          <br></br>
          <h3>Other Gifts During The Year</h3>
          <br></br>
          <h4>
            Outside of Christmas, birthdays, and weddings, there are a number of
            occasions when it is normal to give a gift. For example, according
            to MoneyTamer, graduation gifts for children from parents should be
            between $100 and $300. For other relatives, aim for between $50 and
            $100. For children of family friends, a budget of $20 and $50 is
            acceptable, while you can spend between $10 and $20 on other
            acquaintances. For Mother's and Father's Day gifts, it will really
            depend on your own age and financial means. According to Good
            Housekeeping, the average consumer spends around $60 on their own
            mother's gift each year, while $65 is spent on wives or partners. A
            retirement gift, depending on how close you are to the retiree,
            should be generally between $50 and $100. When co-workers are
            pulling funds together to purchase a gift, consider giving $10 to
            $20. We've already mentioned bridal showers, but what about baby
            showers? For a close relative, a good budget is $150 and can be
            considerably less depending on how well you know the person. For
            Valentine's Day, the average amount spent in the United States is
            $142, as reported by CNBC. This number is highest among those aged
            between 40 and 55, while men typically far outspend women on this
            day ($249 to $57). For an anniversary gift to your spouse, a budget
            of around $100 is acceptable.
          </h4>

          <br></br>
          <h3>How Much To Spend On Christmas Gifts And Others?</h3>
          <br></br>
          <h4>
            The above information highlights how to budget for gifts throughout
            the year. From holiday gift-giving to birthdays and more, it's
            important to avoid spending either too little or too much. This blog
            post will help you to understand how much to spend on Christmas
            gifts and others during the year. When it comes to gifts, GiftList
            is your premier choice. We allow you to create a gift list, add
            items from any site, and easily share your list with friends and
            family who can then reserve items on your list. We also have a host
            of other great features, such as group gift exchanges, a shop of
            recommended items, free digital e-cards, occasion tracking for
            special moments, and gift management and tracking tool. Click here
            to learn more about how it all works. Happy gift giving!
          </h4>

          <BrandsLogos />
        </section>

        <SideAds />
      </main>

      <Footer />
    </PageWrapper>
  );
}

export default Article;
