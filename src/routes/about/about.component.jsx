import './about.styles.scss';
import teamImg from '../../assets/team-img.jpg';
import logo from '../../assets/logo.png';

const About = () => {
  return (
    <div className="about-container">
      <h1>ABOUT KFC PAAL-TERVANT</h1>
      <img className="team-logo" src={logo} alt="Team Image" />
      <div className="about-text">
        <p>
          KFC Paal-Tervant is the result of a merger between two clubs, KFC Flandria Paal and AC Tervant. Both clubs played a relatively short distance away in the same division (2nd provincial) with a regional youth organization. In the past it had already become clear that the individual clubs' capacity was too small to offer provincial youth football.
        </p>
        <p>
          In addition to sports, the club board also focuses on its social role in the local club life of Beringen. The strong, local roots of the club board encourage the club to make this one of its spearheads. The close contacts with the municipal council (last year an artificial grass field was constructed with the support of the municipality) facilitate the club in this objective. KFC Paal-Tervant profiles itself as a 'family club' where everyone feels at home. Young or old, immigrant or native, rich or poor, more or less football talented, boy or girl, everyone should feel welcome at the club. Girls' football has recently also been promoted at the club. This has resulted in a threefold increase in the number of girls playing football in the club in a very short period of time.
        </p>
        <p>
        The local vision is very clearly reflected in its transfer policy for KFC Paal-Tervant A. This core is made up of 90% players from the region and who have a youth history at the club. Almost all of them have a connection with either Flandria Paal or AC Tervant, which not only strengthens the cohesion in the team, but also facilitates the bond with the other sections of the club.
        </p>
      </div>
      <img className="team-image" src={teamImg} alt="Team Image" />
    </div>
  );
};

export default About;
