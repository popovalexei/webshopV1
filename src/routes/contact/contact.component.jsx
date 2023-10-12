import './contact.styles.scss'

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Below you will find the necessary contact details of the club</h1>
      <div className="contact-list-holder">
        <ul className="contact-list">
          <li className="contact-list-item">
            <p className="contact-name">Board:</p>
            <p className="contact">main board@kfcpaaltervant.be</p>
          </li>
          <li className="contact-list-item">
            <p className="contact-name">Youth Board:</p>
            <p className="contact">youthsection@kfcpaaltervant.be</p>
          </li>
          <li className="contact-list-item">
            <p className="contact-name">Clothing:</p>
            <p className="contact">kledij@kfcpaaltervant </p>
          </li>
          <li className="contact-list-item">
            <p className="contact-name">AUTHORIZED CORROSPONDENT – ACCIDENT REPORT:</p>
            <p className="contact">piet.peeters1@hotmail.com</p>
          </li>
          <li className="contact-list-item">
            <p className="contact-name">TVJO/YOUTH COORDINATOR UPPER SCHOOL:</p>
            <p className="contact">tvjobb@kfcpaaltervant.be</p>
          </li>
          <li className="contact-list-item">
            <p className="contact-name">YOUTH COORDINATOR MIDDLE BUILDING:</p>
            <p className="contact">jcmb@kfcpaaltervant.be</p>
          </li>
          <li className="contact-list-item">
            <p className="contact-name">YOUTH COORDINATOR LOWER SCHOOL:</p>
            <p className="contact">jcob@kfcpaaltervant.be</p>
          </li>
          <li className="contact-list-item">
            <p className="contact-name">YOUTH ADMINISTRATION / PSD:</p>
            <p className="contact"> patrick.renders@kfcpaaltervant.be</p>
          </li>
          <li className="contact-list-item">
            <p className="contact-name">SENIORS:</p>
            <p className="contact">stef.aerts@hotmail.com</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
