import PropTypes from 'prop-types'
import  * as React from 'react'
import pic01 from '../content/img/speeches-cover.jpg'
import pic02 from '../content/img/grace-ss.jpg'
// import pic03 from '../content/img/callum-shaw-555357-unsplash.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About Us</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            We are a Primitive Baptist church, and our meetingplace is located in the town of Locust,
            NC. We believe that the Lord Jesus Christ is the Son of the only
            true and living God, and that He is risen and reigning today!
          </p>
          <p>
            We seek to grow in discipleship, and the cultivation of spiritual fruit - learning, loving, and living life
            together. We invite you to come experience our rich heritage, and worship the Lord with us!
          </p>
          
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Events</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            Meadow Creek PBC is excited to host Grace Singing School on 
            July 27-29, 2020
          </p>
          <p>
            Join us as we learn to better use our voices to sing praises 
            to God, and our hands to better serve each other in love and 
            fellowship.
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Blog</h2>
          {/* <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
          Think about this. Finally, my brethren, be strong in the Lord, 
          and in the power of his might. The Apostle Paul wrote to the 
          Ephesians, 6:10, finally - meaning hereafter, for the future, 
          henceforth, from this point onward—finally my brethren be strong. 
          Just as Paul wrote to the Ephesians he writes to us. To be strong. 
          To be strengthened.  Have might. 
          </p>
          <p>The world at this point in time seems to be very weak, don’t you 
          think? It’s because it is weak. We are weak. Not knowing exactly 
          what to do, how to act, how to cure this virus and sickness. 
          Paul didn’t just say be strong he said, wrote, be strong in the 
          Lord. The Lord is not at a loss. The Lord is not like we are - 
          - we’re not knowing, he is all knowing.  We are without wisdom, 
          the Lord is wisdom.  The Lord is just as sovereign right now as He 
          has ever been.  Let us not even for a moment lose sight of where 
          our joy is founded, where our comfort lies, where our true happiness 
          is and will ever be. It’s in the Lord, and he still is the Lord. 
          When we are strong in the Lord, we are strong.
          </p>
          <p>Paul also wrote Philippians 3:1, finally - - from this point onward, 
          finally my brethren rejoice in the Lord. Oh yes, even now we can 
          rejoice if we think about the Lord.  But even better than just thinking 
          about the Lord, Paul writes REJOICE in the Lord.  We should be in a 
          constant state of joy, and when we are, we are strong in the Lord.
          </p>
          <p>Can you believe that there is an eternal reservation with your name 
          on it being kept by the power of God in an eternal heaven? You say, I hope 
          so, well me too... we hope by the power of God. Oh my, one day all the Lord’s 
          people will be together virus free, sin free, all gathered together round 
          the throne.  Finally my brethren rejoice!  
          </p>
          <p>And at Philippians 4:8 Paul writes finally, brethren—- from this point onward, 
            whatsoever things are true, whatsoever things are honest, whatsoever things are 
            pure, whatsoever things are lovely, whatsoever things are of good report; if 
            there be any virtue, and if there be any praise, think on these things.  Whew, 
            that’s a lot of whatsovers!  What is true?  What is honest?  What is pure? What 
            is lovely?  What is of good report?  God’s word is true.  God’s grace is lovely. 
            God is always good to think on because God is always good.  How miserable we 
            would constantly be without knowing the goodness of God.  We are always His and 
            he is always ours. Knowing that His eye is always on the sparrow, and I know he 
            watches me...
            </p>
            <p>I sing because I’m happy, I sing because I’m free, for his eye is on the sparrow, 
              and I know he watches me. Oh my, the Lord is always watching over us, always.  
              Sister Civilla D. Martin knew it, didn’t she, when she wrote these words?
              </p><p>Finally, my brethren... Now that’s a stimulus package!
              </p><p>In hope,
              </p><p>Brother Eddie 
          </p> */}
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            {/* <li>
              <a
                href="https://twitter.com/"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li> */}
            <li>
              <a href="https://facebook.com/meadowcreekpbc" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
