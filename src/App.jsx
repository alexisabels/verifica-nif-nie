import { useState } from "react";
import "./App.css";
import { generateDni, generateNie } from "./utils";
import DocBox from "./DocBox";

function App() {
  const [dni, setDni] = useState("");

  return (
    <>
      <h1>Generador de DNI</h1>
      <div className="card">
        <div className="generate-btn-grid">
          <button onClick={() => setDni(generateDni())}>Generar NIF</button>
          <button onClick={() => setDni(generateNie())}>Generar NIE</button>
        </div>
      </div>
      {dni && <DocBox doc={dni} />}
      <div className="info-text">
        <h2>DNI vs NIE vs NIF</h2>
        <p>
          Los términos NIF, NIE y DNI se refieren a los números de
          identificación en España. El NIF es el número de identificación
          tributaria para personas físicas y jurídicas en España. El NIF unifica
          los números de identificación de las personas físicas (DNI y NIE) y
          los de las personas jurídicas, que antiguamente disponían de CIF. El
          NIE es el número de identificación para extranjeros en España, y se
          utiliza como número de identificación fiscal para fines tributarios.
          El NIE es el único número de identificación efectivo para que los
          extranjeros puedan permanecer legalmente en España. El DNI es el
          número de identificación para ciudadanos españoles. El NIF coincide
          con el DNI para los españoles y con el NIE para los extranjeros. El
          NIF es el número de identificación fiscal para personas físicas y
          jurídicas en España. El formato del NIF para personas jurídicas
          contiene una letra, siete números y un dígito de control.
        </p>
        <p>
          En resumen, el NIF es el número de identificación tributaria para
          personas físicas y jurídicas en España, mientras que el NIE es el
          número de identificación para extranjeros en España, que también se
          utiliza como número de identificación fiscal para fines tributarios.
        </p>
        <h3>Formato del NIE y NIF en España</h3>
        <p>
          <strong>NIE (Número de Identidad de Extranjero):</strong>
          <br />
          Consiste en una letra (X, Y o Z) seguida de 7 u 8 dígitos y otra letra
          (ejemplo: X12345678A).
          <br />
          Emitido por el Ministerio del Interior a todos los residentes y no
          residentes extranjeros que vivan o realicen actividades relacionadas
          con impuestos en España.
          <br />
          Utilizado como número de identificación fiscal para fines tributarios.
        </p>
        <p>
          <strong>NIF (Número de Identificación Fiscal):</strong>
          <br />
          Consiste en 9 dígitos con un prefijo opcional de ES cuando se utiliza
          para fines de IVA.
          <br />
          Utilizado como número de identificación fiscal para ciudadanos,
          individuos extranjeros y entidades legales en España.
          <br />
          El primer dígito es una letra que denota el tipo de entidad, y el
          último es un dígito de control que también puede ser una letra.
          <br />
          El formato del NIF para el representante de una empresa es M + 7
          números + letra de control (ejemplo: M1234567Y).
        </p>
        <p>
          Tanto el NIE como el NIF se utilizan para fines tributarios en España,
          siendo el NIE el número de identificación para extranjeros y el NIF el
          número de identificación fiscal para todas las personas y entidades
          legales.
        </p>
      </div>
    </>
  );
}

export default App;
