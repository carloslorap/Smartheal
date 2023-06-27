import React from "react";
import "../style/Servicios.css";

const Servicios = () => {
  return (
    <section className="section_ser">
      <div className="main_services">
        <h2>Nuestros Servicios</h2>
        <div className="content_services">
          <div className="item_services">
            <h4>Acceso de historial médicos</h4>
            <p>
              La página podrá proporcionar información útil a los pacientes que
              necesitan revisar su historial médico o para aquellos que
              necesitan compartir información médica con otros proveedores de
              atención medica.
            </p>
            <i class="ri-health-book-fill"></i>
          </div>
          <div className="item_services">
            <h4>Programación de citas en línea</h4>
            <p>
              Se podrá permitir a los pacientes programar su cita medica en
              línea ya que esto será conveniente para los pacientes que no
              tienen tiempo para llamar o visitar a la clínica persona.
            </p>
            <i class="ri-global-line"></i>
          </div>
          <div className="item_services">
            <h4>Recibir resultados de exámenes clínicos</h4>
            <p>
              Te permite recibir tus exámenes clínicos desde casa de manera
              rápida y segura. Simplifica tu vida y únete a nuestra comunidad
              hoy mismo.
            </p>
            <i class="ri-bar-chart-box-fill"></i>
          </div>
        </div>
      </div>

      <div className="main_desc">
        <div className="content_desc">
          <h2>
            Obtén el mejor cuidado con clínicas <span>SmartHealth 360</span>
          </h2>
        </div>


        <div className="content_desc-2">
            <div className="desc_item">
                <div className="sub_item">
                <i class="ri-map-pin-2-fill"></i>
                <h4 className="title_desc">Red de clínicas a nivel nacional</h4>
                </div>
                <p>Estamos presente en donde nos necesites, contamos con sedes en más de 10 distritos de Lima.</p>
            </div>

            <div className="desc_item">
                <div className="sub_item">
                <i class="ri-nurse-fill"></i>
                <h4 className="title_desc">Los mejores médicos en nuestro staff</h4>
                </div>
                <p>Nuestro personal esta al servicio del publico, por que contamos con el mejor de staff de médicos.</p>
            </div>

            <div className="desc_item">
                <div className="sub_item">
                <i class="ri-user-3-fill"></i>
                <h4 className="title_desc">Atención  online 24/7</h4>
                </div>
                <p>¿No hay tiempo para recorrer resultado de manera presencia? Nuestra plataforma esta a disposición de nuestros pacientes las 24 horas del día.</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
