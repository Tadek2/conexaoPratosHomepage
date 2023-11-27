import React, { useState, useEffect } from "react";
import {
  IonButton,
  IonCard,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonPage,
  IonRow,
  IonText,
  IonToolbar,
} from "@ionic/react";
import logo from "../assets/logo.svg";
import "./Homepage.css";
import carrinhoFooter from "../assets/carrinhoFooter.svg";
import perfilFooter from "../assets/perfilFooter.svg";
import restauranteFooter from "../assets/restauranteFooter.svg";
import homeFooter from "../assets/homeFooter.svg";
import addCarrinho from "../assets/iconCarrinho.svg";
import { Link } from "react-router-dom";

const Homepage: React.FC = () => {
  const [pratos, setPratos] = useState<any[]>([]);

  const buscarPratos = async () => {
    try {
      const response = await fetch(
        "http://localhost/MADS_Web/sourceWeb/sourceMobile/pratos.php"
      );
      const data = await response.json();
      setPratos(data);
    } catch (error) {
      console.error("Erro ao buscar pratos:", error);
    }
  };

  useEffect(() => {
    buscarPratos();
  }, []);

  return (
    <IonPage className="homePage">
      <IonHeader className="header">
        <IonToolbar>
          <div className="imagem ion-text-center">
            <img src={logo} alt="GoEat logo" width={"100px"} />
          </div>
          <IonGrid>
            <IonRow className="scroll">
              <IonCol>
                <IonButton className="carrosel" shape="round">
                  <p>Entradas</p>
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton className="carrosel" shape="round">
                  <div>
                    <p>Sopas</p>
                  </div>
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton className="carrosel" shape="round">
                  <div>
                    <p>Peixe</p>
                  </div>
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton className="carrosel" shape="round">
                  <div>
                    <p>Carne</p>
                  </div>
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton className="carrosel" shape="round">
                  <div>
                    <p>Vegatariano</p>
                  </div>
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton className="carrosel" shape="round">
                  <div>
                    <p>Sobremesas</p>
                  </div>
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton className="carrosel" shape="round">
                  <div>
                    <p>Bebidas</p>
                  </div>
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonHeader>
      <IonContent className="body">
        <IonGrid>
          <IonRow>
            <IonCol></IonCol>
          </IonRow>
        </IonGrid>
        {pratos.length > 0 ? (
          pratos.map((prato) => (
            <IonCard key={prato.id} className="comidas">
              <img
                className="imagemEmenta"
                src={`http://localhost/MADS_Web/sourceWeb/${prato.imagem}`}
                alt=""
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                }}
              />
              <div className="descricao">
                <h2>{prato.nome}</h2>
                <h4>{prato.descricao}</h4>
                <div className="ult-linha">
                  <h4>{`Preço: ${prato.preco}`}</h4>
                  <IonIcon icon={addCarrinho} size="large" />
                </div>
              </div>
            </IonCard>
          ))
        ) : (
          <div>Nenhum prato encontrado.</div>
        )}
      </IonContent>
      <IonFooter className="footer">
        <IonToolbar class="footer-icons ion-text-center">
          <IonGrid>
            <IonRow className="ion-justify-content-center">
              <IonCol>
                <div className="icons">
                  <Link to="/homepage">
                    <IonIcon icon={homeFooter} size="large" />
                  </Link>
                </div>
              </IonCol>
              <IonCol>
                <div className="icons">
                  <Link to="/restaurant">
                    <IonIcon icon={restauranteFooter} size="large" />
                  </Link>
                </div>
              </IonCol>
              <IonCol>
                <div className="icons">
                  <Link to="/carrinho">
                    <IonIcon icon={carrinhoFooter} size="large" />
                  </Link>
                </div>
              </IonCol>
              <IonCol>
                <div className="icons">
                  <Link to="/login">
                    <IonIcon icon={perfilFooter} size="large" />
                  </Link>
                </div>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Homepage;
