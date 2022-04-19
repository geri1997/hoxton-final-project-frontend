import FooterCommon from "../../Components/Common/FooterCommon/FooterCommon";
import HeaderCommon from "../../Components/Common/HeaderCommon/HeaderCommon";
import "./MoviePage.css";

export default function MoviePage({ validateUser }: any) {
  return (
    <>
      <HeaderCommon />

      <section className="movie-item-wrapper">
        <div className="left-section">
          <div className="video-and-servers">
            <div className="servers">
              <ul className="server-list">
                <li>SERVER 1</li>
                <li>SERVER 2</li>
                <li> SERVER 3</li>
                <li> SERVER 4</li>
              </ul>
            </div>
            <div className="video-square">
              <img
                src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="ff"
              />
            </div>

            <div className="movie-details">
              <div className="title-actors">
                <h2>Title</h2>
                <h3>Gender</h3>
                <ul className="actors-cast">
                  <li>Actor 1</li>
                  <li>Actor 2</li>
                  <li> Actor 3</li>
                  <li> Actor 4</li>
                </ul>
              </div>
              <div className="movie-specifications">
                <ul className="trailer">
                  <li>Trailer</li>
                  <li>Zoom</li>
                  <li>night vision</li>
                </ul>
                <ul className="length">
                  <li>Length</li>
                  <li>Year </li>
                  <li>Review</li>
                </ul>
                <span>Share it</span>
              </div>
            </div>
          </div>
          <div className="movie-fabula">
            <p id="fabula">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              fuga ducimus provident odio doloribus voluptatum totam quis! Eos,
              nisi? Enim nesciunt inventore culpa repellat voluptas perferendis
              reprehenderit deserunt quae saepe!
            </p>
          </div>
          <div className="last movies">
            <div className="posted-lastest">
              <h2>FILMA TE POSTUAR SE FUNDMI</h2>
            </div>
            <ul className="last-movies-list">
              <li>
                <img
                  src="https://images.unsplash.com/photo-1485095329183-d0797cdc5676?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt="one"
                />
              </li>
              <li>
                <img
                  src="https://images.unsplash.com/photo-1485095329183-d0797cdc5676?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt="two"
                />
              </li>
              <li>
                <img
                  src="https://images.unsplash.com/photo-1485095329183-d0797cdc5676?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt="three"
                />
              </li>
              <li>
                <img
                  src="https://images.unsplash.com/photo-1485095329183-d0797cdc5676?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt="four"
                />
              </li>
              <li>
                <img
                  src="https://images.unsplash.com/photo-1485095329183-d0797cdc5676?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt="five"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="right-section">
          <ul>
            <li>
              <img src="https://www.filma24.so/kazinodhjetor.gif" alt="ggg" />
            </li>
            <li>
              <img src="https://i.imgur.com/5wdcyDG.gif" alt="ddf" />
            </li>
            <li>
              <img src="https://www.filma24.so/genti300x300.gif" alt="sss" />
            </li>
            <li>
              <img
                src="https://scontent.ftia5-1.fna.fbcdn.net/v/t39.30808-6/271861451_452935162957530_6830637948777189502_n.png?stp=dst-png_p160x160&_nc_cat=104&ccb=1-5&_nc_sid=ac9ee4&_nc_ohc=uVna-6wW6ykAX9GI5L_&_nc_ht=scontent.ftia5-1.fna&oh=00_AT-v7I7qWOGAsuHqVXXhG8EVvv2DroHTT_t-O6nJL7jbPA&oe=625D2416"
                alt="ggg"
              />
            </li>
            <li>
              <img src="https://i.imgur.com/Wl3zKCb.jpg" alt="eee" />
            </li>
          </ul>
        </div>
      </section>

      <FooterCommon />
    </>
  );
}
