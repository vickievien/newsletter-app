import SvgMainMob from "../assets/images/img-mob";

export default function MainPage() {
    return (
      <section>
          <div className="img-wrapper">
            <SvgMainMob />
          </div>
          <section>
            <h1 className="heading">Stay updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
          </section>
      </section>
    )      
}