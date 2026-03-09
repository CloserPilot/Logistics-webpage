import styles from './Contact.module.css';

function Contact(){
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactInfo}>
        <h2>Información de Contacto</h2>
        <p><strong>Teléfono:</strong> (271) XXX-XXXX</p>
        <p><strong>Horario:</strong> Lunes a Viernes, 9:00 AM - 6:00 PM</p>
        <p><strong>Correo Electrónico:</strong> contacto@shipnetic.com</p>
      </div>
      <div className={styles.contactForm}>
        <h2>Envíanos un Mensaje</h2>
        <form>
          <div className={styles.formGroup}>
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Mensaje</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;