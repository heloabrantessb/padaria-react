export function Contato() {
  return (
    <>
      <div className="contentContact">
        <div id="contato">
          <form action="#">
            <label>Nome:</label>
            <input className="form-control" type="text" name="nome" />
            <label>Telefone:</label>
            <input className="form-control" type="tel" name="telefone" />
            <label>E-mail:</label>
            <input className="form-control" type="email" name="email" />
            <label>Digite sua mensagem:</label>
            <textarea name="mensagem" cols="30" rows="10"></textarea>
            <input className="form-control" type="submit" value="Enviar" />
          </form>
        </div>

        {/* <!-- Mapa ao lado do formulário --> */}
        <div className="map-responsive">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d921807.1410476692!2d-49.57270297847795!3d-25.511410949417517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94db8fdc75a02a3d%3A0x6a631ab7094eeb59!2sIFPR%20-%20Campus%20Paranagu%C3%A1!5e0!3m2!1spt-BR!2sbr!4v1732042253128!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            style={{border:0}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Contato;
