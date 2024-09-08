import { useEffect, useState } from 'react';
import './App.css';
import logo from './assets/images/logo.png'
import menu from "./assets/icons/menu (1).svg"
import info from "./assets/icons/information-circle-outline.svg"
import searchMobile from "./assets/icons/search-circle-outline.svg"
import back from "./assets/icons/arrow-back.svg"
import search from "./assets/icons/search.svg"
import fb from "./assets/icons/logo-facebook.svg"
import correo from "./assets/icons/mail.svg"
import location from "./assets/icons/location-sharp.svg"
import kids from "./assets/images/niños.png"
import petFriendly from "./assets/images/pet-friendly.png"
import silla from "./assets/images/silla-de-ruedas.png"
import tercera from "./assets/images/tercera-edad.png"
import cuatecomates from "./assets/images/cuastecomates.jpg"
import delfines from "./assets/images/delfines.jpg"
import langosta from "./assets/images/langosta.jpg"
import tortugas from "./assets/images/tortugas.jpg"
import kinoMagico from "./assets/images/kinoMagico.jpg"
import puntillaCampeche from "./assets/images/puntillaCampeche.jpg"
import santaCruzHuatulco from "./assets/images/santaCruzHuatulco.jpg"
import coromuel from "./assets/images/coromuel.jpg"
import papanoa from "./assets/images/papanoa.jpg"
import quieta from "./assets/images/quieta.jpg"
import progreso from "./assets/images/progreso.jpg"
import notFound from "./assets/images/no-found.avif"

function App() {

  const beaches = [
    {
      "name": "Playa de Cuastecomates en Jalisco",
      "location": "Jalisco",
      "description": "Cuastecomates ha sido cuidadosamente adaptado para garantizar la accesibilidad, con señalización adecuada, accesos, vialidades y mobiliario urbano. Además, es una playa cardioprotegida y autosustentable, equipada para brindar atención médica y de emergencias de manera eficiente y oportuna.",
      "wheelchair": true,
      "pet": false,
      "old-person": false,
      "kids": false,
      "image": cuatecomates,
    },
    {
      "name": "Playa Delfines",
      "location": "Cancún",
      "description": "Playa Delfines es una de las playas más emblemáticas de Cancún y cuenta con infraestructura adaptada para personas con discapacidad. Tiene rampas de acceso y sillas anfibias disponibles, además de personal capacitado para asistir a los visitantes.",
      "wheelchair": true,
      "pet": false,
      "old-person": false,
      "kids": false,
      "image": delfines
    },
    {
      "name": "Playa Langosta",
      "location": "Cancún",
      "description": "Playa conocida por su ambiente tranquilo y familiar. Playa Langosta ofrece rampas de acceso, baños adaptados y áreas de sombra accesibles, haciendo de ella una excelente opción para quienes buscan una playa inclusiva en Cancún.",
      "wheelchair": true,
      "pet": false,
      "old-person": true,
      "kids": false,
      "image": langosta
    },
    {
      "name": "Playa Tortugas",
      "location": "Cancún",
      "description": "Playa Tortugas es famosa por su ambiente animado y su variedad de actividades. Aquí encontrarás pasarelas y rampas que facilitan el acceso a la playa y al mar, así como sillas anfibias disponibles para el público.",
      "wheelchair": true,
      "pet": false,
      "old-person": false,
      "kids": false,
      "image": tortugas
    },
    {
      "name": "Kino Mágico, en Sonora",
      "location": "Sonora",
      "description": "Este parque cuenta con más de 30 palapas, chapoteaderos, albercas con acceso para personas con alguna discapacidad física, rampas y sillas de ruedas para ingresar al mar, actividades deportivas, tres baños, regaderas para los visitantes, así como un área de enfermería con una ambulancia totalmente equipada para atender cualquier emergencia.",
      "wheelchair": true,
      "pet": false,
      "old-person": false,
      "kids": false,
      "image": kinoMagico
    },
    {
      "name": "Playa Puntilla en Campeche",
      "location": "Campeche",
      "description": "Es una de las dos playas públicas inclusivas en el Estado de Campeche, lo cual significa que cuenta con equipamiento y servicios adaptados para su utilización y acceso por parte de usuarios con capacidades diferentes.",
      "wheelchair": true,
      "pet": false,
      "old-person": false,
      "kids": false,
      "image": puntillaCampeche
    },
    {
      "name": "Santa Cruz Huatulco",
      "location": "Oaxaca",
      "description": "Primera playa incluyente de la entidad, en la agencia de Santa Cruz Huatulco. Ubicada en Bahías de Huatulco, se encuentra acondicionada y equipada para ser un espacio incluyente para las personas con discapacidad, en compañía de sus familias.",
      "wheelchair": true,
      "pet": false,
      "old-person": false,
      "kids": false,
      "image": santaCruzHuatulco
    },
    {
      "name": "El Coromuel en La Paz",
      "location": "Baja California Sur",
      "description": "Las personas con discapacidad que visitan la playa, pueden llegar desde cualquier punto del malecón de La Paz, al parque acuático El Coromuel. Lo que la convierte en una playa accesible son sus accesos, rampas, sillas anfibias para que personas que cuenten con algún tipo de discapacidad motriz puedan disfrutar de lo fabuloso de sus aguas cristalinas.",
      "wheelchair": true,
      "pet": false,
      "old-person": false,
      "kids": false,
      "image": coromuel
    },
    {
      "name": "Bahías de Papanoa",
      "location": "Guerrero",
      "description": "Inauguraron la primera Playa incluyente en Bahías de Papanoa la cual cuenta con equipo especial, personal capacitado y fácil acceso a la playa, para que visitantes extranjeros y locales con alguna discapacidad disfruten del mar.",
      "wheelchair": true,
      "pet": false,
      "old-person": false,
      "kids": false,
      "image": papanoa
    },
    {
      "name": "Playa Quieta",
      "location": "Ixtapa Zihuatanejo",
      "description": "Una playa muy tranquila debido a que se encuentra en frente de La Isla de Ixtapa y no permite el paso de grandes olas, es ideal para nadar, remar en kayak, pasear en velero y pasar un bonito día en familia. Esta es la primera playa incluyente de Ixtapa Zihuatanejo.",
      "wheelchair": true,
      "pet": false,
      "old-person": false,
      "kids": false,
      "image": quieta
    },
    {
      "name": "Progreso",
      "location": "Yucatán",
      "description": "La primera playa incluyente gratuita de Yucatán, ubicada en Progreso, ofrece un espacio recreativo para personas con discapacidad y adultos mayores. Cuenta con sillas anfibias para facilitar el acceso al mar y personal capacitado que brinda apoyo para una experiencia segura y placentera.",
      "wheelchair": true,
      "pet": true,
      "old-person": true,
      "kids": true,
      "image": progreso
    }
  ]

  const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  const [searchLocation, setSearchLocation] = useState("");

  const filteredBeaches = beaches.filter(beach =>
    removeAccents(beach.location.toLowerCase()).includes(removeAccents(searchLocation.toLowerCase()))
  );

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showMenu, setShowMenu] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [showInfo, setShowInfo] = useState(false)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth < 481) {
      setShowMenu(false)
    } else {
      setShowInfo(false)
    }
  }, [windowWidth]);

  const handleMenu = () => {
    if (windowWidth > 481) {
      setShowMenu(!showMenu)
    } setShowSearch(!showSearch)
  }

  const handleInfo = () => {
    setShowInfo(!showInfo)
  }

  const openFacebook = () => {
    window.open('https://www.facebook.com/Ivanovnaviajes?mibextid=ZbWKwL', '_blank');
  };

  const openEmail = () => {
    window.location.href = 'mailto:ivanovna3@hotmail.com?subject=Informacion%20sobre%20playas%20inclusivas';
  };


  return (
    <>
      <header>
        {showMenu ?
          <img src={logo} alt="" onClick={() => { handleMenu() }} />
          : <img src={windowWidth > 481 ? menu : (showSearch ? back : searchMobile)} alt="" onClick={() => { handleMenu() }} style={{ width: "50px" }} />}
        {windowWidth > 481 ?
          (<h1 className="image-text">Playa para todos</h1>) :
          showSearch ? (
            <div className='buscador neon-box'>
              <img src={search} alt="" />
              <input
                type="text"
                placeholder='Ej. Jalisco'
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
              />
            </div>
          ) : (<h1 className="image-text">Playa para todos</h1>)
        }
        {windowWidth > 481 ? (
          <div className='info-header'>
            <label>Información y Reservas</label>
            <span>Tel. 444 813 21 55</span>
            <span>Tel. 444 813 18 94</span>
            <span>Cel. 444 142 34 51</span>
          </div>
        ) : (
          <img src={info} alt="" style={{ width: "50px" }} onClick={() => { handleInfo() }} />
        )}
        {showInfo && (
          <div className='infoMovil'>
            <img src={logo} alt="" />
            <div className='redes'>
              <section onClick={() => { openFacebook() }}>
                <img src={fb} alt="" />
                <span>Ivanovna</span>
              </section>
              <section onClick={() => { openEmail() }}>
                <img src={correo} alt="" />
                <span>ivanovna3@hotmail.com</span>
              </section>
            </div>
            <div className='info-header'>
              <label>Información y Reservas</label>
              <span>Tel. 444 813 21 55</span>
              <span>Tel. 444 813 18 94</span>
              <span>Cel. 444 142 34 51</span>
            </div>
          </div>)}
      </header>
      <main className="background-container">
        <div className="overlay">
          <div className={`sidebar ${showMenu ? 'sidebar-wide' : ''}`} style={{ width: showMenu ? "350px" : "0px" }}>
            <div className="sidebar-content">
              <div className='content-buscador'>
                <label>Encuentra tu destino:</label>
                <div className='buscador neon-box'>
                  <img src={search} alt="" />
                  <input
                    type="text"
                    placeholder='Ej. Jalisco'
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                  />
                </div>
              </div>
              <div className='redes'>
                <section onClick={() => { openFacebook() }}>
                  <img src={fb} alt="" />
                  <span>Ivanovna</span>
                </section>
                <section onClick={() => { openEmail() }}>
                  <img src={correo} alt="" />
                  <span>ivanovna3@hotmail.com</span>
                </section>
              </div>
            </div>
          </div>
          <div className="list-cards">
            {filteredBeaches.length > 0 ? (
              filteredBeaches.map((beach, index) => (
                <div key={index} className='card-playa'>
                  <img src={beach.image} alt="" />
                  <div className="info-card">
                    <div className="cabecera-card">
                      <div className="nameLocation">
                        <h2>{beach.name}</h2>
                        <span>
                          <img src={location} alt="" />
                          {beach.location}
                        </span>
                      </div>
                      <div className="insignias">
                        {beach.kids && <img src={kids} alt="" />}
                        {beach.pet && <img src={petFriendly} alt="" />}
                        {beach['old-person'] && <img src={tercera} alt="" />}
                        {beach.wheelchair && <img src={silla} alt="" />}
                      </div>
                    </div>
                    <p>{beach.description}</p>
                  </div>
                </div>))
            ) : (
              <div className='notFound'>
                <p>Contáctanos y descubre<br />las playas inclusivas en<br />"{searchLocation}".</p>
                <img src={notFound} alt="" />
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
