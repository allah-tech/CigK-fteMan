// Selman Kahya Tarafından Yapılmıştır Sadece Butonlar Değiştirilmiştir
import React from "react";
import "./App.css";
import Game from "./game";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.game = new Game();
  }

  componentDidMount() {
    setInterval(() => {
      this.game.update();
      this.setState({});
    }, 100);
  }

  update = () => {
    this.game.update();
  };

  render() {
    return (


      <div className="App">

        <header className="App-header">ÇOCUK ADAM - Çig Köfte Diyarı</header>
        <div style={{ marginBottom: "12px" }}>
          Çig Köfte: {this.game.manufacturedCigKofte} <br />
          <button type="button" class="btn btn-secondary"
            disabled={!this.game.canMakeCigKofte()}
            onClick={() => this.game.makeCigKofte()}
          >
            Ciğ Köfte Yoğur!
          </button>
        </div>
        <div>
          <div>İşletme</div>
          <hr />
          <div>
            <table>
              <tr>
                <td style={{ width: "150px" }}>Kasadaki para:</td>
                <td>{this.game.money}₺</td>
              </tr>
              <tr>
                <td>Dolaptaki adet:</td>
                <td>{this.game.currentCigKofte}</td>
              </tr>
              <tr>
                <td>Fiyat:</td>
                <td>
                  {this.game.price}₺
                  <button type="button" class="btn btn-secondary"
                    disabled={!this.game.canDecreasePrice()}
                    style={{ marginLeft: "20px" }}
                    onClick={this.game.decreasePrice}
                  >
                    -
                  </button>
                  <button type="button" class="btn btn-secondary"
                    style={{ marginLeft: "10px" }}
                    onClick={this.game.increasePrice}
                  >
                    +
                  </button>
                </td>
              </tr>
              <tr>
                <td>Halkın talebi:</td>
                <td>%{this.game.demandRate}</td>
              </tr>
            </table>
          </div>
          <div style={{ marginTop: "16px" }}>
            <div>Üretim</div>
            <hr />
            <table>
              <tr>
                <td style={{ width: "150px" }}>Çiğ köfte / dakika:</td>
                <td>{this.game.lastManufacturedRate}</td>
              </tr>
              <tr>
                <td>Malzeme:</td>
                <td>
                  {this.game.material} gr
                  <button type="button" class="btn btn-secondary"
                    style={{ marginLeft: "10px" }}
                    disabled={!this.game.canBuyMaterial()}
                    onClick={this.game.buyMaterial}
                  >
                    Satin Al! ({this.game.materialCost}₺)
                  </button>
                </td>
              </tr>
              <tr>
                <td>Satınalma müdürü:</td>
                <td>
                  {this.game.hasAutoBuyer ? (
                    <React.Fragment>
                      {this.game.isAutoBuyerActive ? "Aktif" : "Durdu"}
                      <button type="button" class="btn btn-secondary"
                        style={{ marginLeft: "10px" }}
                        onClick={
                          this.game.isAutoBuyerActive
                            ? this.game.stopAutoBuyer
                            : this.game.startAutoBuyer
                        }
                      >
                        {this.game.isAutoBuyerActive ? "Durdur" : "Devam et"}
                      </button>
                    </React.Fragment>
                  ) : (
                      <span>
                        Yok
                      {this.game.didUnlockAutoBuyer() && (
                          <button type="button" class="btn btn-secondary"
                            style={{ marginLeft: "10px" }}
                            disabled={!this.game.canBuyAutoBuyer()}
                            onClick={this.game.buyAutoBuyer}
                          >
                            Satin Al! ({this.game.autoBuyerCost}₺)
                        </button>
                        )}
                      </span>
                    )}
                </td>
              </tr>
            </table>
            <div style={{ marginTop: "16px" }}>
              <div>Çalışan:</div>
              <hr />
              <table>
                <tr>
                  <td>Çırak:</td>
                  <td style={{ width: "50px", textAlign: "center" }}>
                    {this.game.autoGenerators.errandBoy}
                  </td>
                  <td>
                    <button type="button" class="btn btn-secondary"
                      style={{ marginLeft: "10px" }}
                      disabled={!this.game.canBuyAutoGenerator("ERRAND_BOY")}
                      onClick={() => this.game.buyAutoGenerator("ERRAND_BOY")}
                    >
                      Satın Al! ({this.game.autoGenerators.errandBoyCost}₺)
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Kalfa:</td>
                  <td style={{ width: "50px", textAlign: "center" }}>
                    {this.game.autoGenerators.foreman}
                  </td>
                  <td>
                    <button type="button" class="btn btn-secondary"
                      style={{ marginLeft: "10px" }}
                      disabled={!this.game.canBuyAutoGenerator("FOREMAN")}
                      onClick={() => this.game.buyAutoGenerator("FOREMAN")}
                    >
                      Satın Al! ({this.game.autoGenerators.foremanCost}₺)
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Usta:</td>
                  <td style={{ width: "50px", textAlign: "center" }}>
                    {this.game.autoGenerators.master}
                  </td>
                  <td>
                    <button type="button" class="btn btn-secondary"
                      style={{ marginLeft: "10px" }}
                      disabled={!this.game.canBuyAutoGenerator("MASTER")}
                      onClick={() => this.game.buyAutoGenerator("MASTER")}
                    >
                      Satın Al! ({this.game.autoGenerators.masterCost}₺)
                    </button>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>


        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
      </div>
    );
  }
}

export default App;

// 1 cig kofte
// 1 lira = talep tavan = 100%
// 40 lira = talep min = 0%
