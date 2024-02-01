<template>
  <div class="user-details-container">
    <h1 class="text-h1">{{ user.firstName }} {{ user.lastName }}</h1>

    <v-row class="user-details-row">
      <v-col cols="12" md="2" class="user-details-col">
        <v-avatar size="150">
          <v-img :src="user.image" alt="User Image" class="user-image"></v-img>
        </v-avatar>
      </v-col>


      <v-col cols="12" md="6" class="user-details-col">
        <v-col cols="12" md="6">
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-title>
                <template v-slot:default="{ expanded }">
                  <v-row no-gutters align="center">
                    <v-col cols="2">
                      <v-icon :class="{ 'expanded-icon': expanded }">mdi-account-details</v-icon>
                    </v-col>
                    <v-col cols="10" class="d-flex justify-start">
                      <h3 class="panel-title">DATI ANAGRAFICI</h3>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <div class="user-details">
                  <p><strong>USER ID:</strong> {{ user.id }}</p>
                  <p><strong>ETA':</strong> {{ user.age }} anni</p>
                  <p><strong>DATA DI NASCITA:</strong> {{ user.birthDate }}</p>
                  <p><strong>GRUPPO SANGUIGNO:</strong> {{ user.bloodGroup }}</p>
                  <p><strong>ALTEZZA:</strong> {{ user.height }} cm</p>
                  <p><strong>PESO:</strong> {{ user.weight }} kg</p>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>

        <v-col cols="12" md="6">
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-title>
                <template v-slot:default="{ expanded }">
                  <v-row no-gutters align="center">
                    <v-col cols="2">
                      <v-icon :class="{ 'expanded-icon': expanded }">mdi-home</v-icon>
                    </v-col>
                    <v-col cols="10" class="d-flex justify-start">
                      <h3 class="panel-title">DOMICILIO</h3>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <div class="user-details">
                  <p><strong>STATO:</strong> {{ user.address.state }}</p>
                  <p><strong>CITTA':</strong> {{ user.address.city }}</p>
                  <p><strong>INDIRIZZO:</strong> {{ user.address.address }}</p>
                  <p><strong>CODICE POSTALE:</strong> {{ user.address.postalCode }}</p>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>

        <v-col cols="12" md="6">
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-title>
                <template v-slot:default="{ expanded }">
                  <v-row no-gutters align="center">
                    <v-col cols="2">
                      <v-icon :class="{ 'expanded-icon': expanded }">mdi-domain</v-icon>
                    </v-col>
                    <v-col cols="10" class="d-flex justify-start">
                      <h3 class="panel-title">AZIENDA</h3>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <div class="user-details">
                  <p><strong>NOME:</strong> {{ user.company.name }}</p>
                  <p><strong>SLOGAN AZIENDA:</strong> {{ user.company.title }}</p>
                  <p><strong>INDIRIZZO:</strong> {{ user.company.address.address }}, {{ user.company.address.city }}, {{
                    user.company.address.state }} ({{ user.company.address.postalCode }})</p>
                  <p><strong>SETTORE DELL'AZIENDA:</strong> {{ user.company.department }}</p>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>

        <v-col cols="12" md="6">
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-title>
                <template v-slot:default="{ expanded }">
                  <v-row no-gutters align="center">
                    <v-col cols="2">
                      <v-icon :class="{ 'expanded-icon': expanded }">mdi-bank</v-icon>
                    </v-col>
                    <v-col cols="10" class="d-flex justify-start">
                      <h3 class="panel-title">INFORMAZIONI BANCARIE</h3>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <div class="user-details">
                  <p><strong>CIRCUITO BANCARIO:</strong> {{ user.bank.cardType }}</p>
                  <p><strong>NUMERO CARTA:</strong> {{ user.bank.cardNumber }}</p>
                  <p><strong>SCADENZA:</strong> {{ user.bank.cardExpire }}</p>
                  <p><strong>VALUTA:</strong> {{ user.bank.currency }}</p>
                  <p><strong>IBAN:</strong> {{ user.bank.iban }}</p>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>

        <v-col cols="12" md="6">
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-title>
                <template v-slot:default="{ expanded }">
                  <v-row no-gutters align="center">
                    <v-col cols="2">
                      <v-icon :class="{ 'expanded-icon': expanded }">mdi-phone</v-icon>
                    </v-col>
                    <v-col cols="10" class="d-flex justify-start">
                      <h3 class="panel-title">RECAPITI</h3>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <div class="user-details">
                  <p><strong>EMAIL:</strong> {{ user.email }}</p>
                  <p><strong>TELEFONO:</strong> {{ user.phone }}</p>
                  <p><strong>INDIRIZZO IP:</strong> {{ user.ip }}</p>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-col>

      <v-col cols="12" md="4">
        <div id="mapid"></div>
      </v-col>
    </v-row>
    
  </div>
</template>

<script>
import utenti from '../utenti';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

export default {
  data() {
    return {
      user: null,
    };
  },
  created() {
    const userId = this.$route.params.userId;
    this.user = utenti.find(user => user.id === parseInt(userId));
    console.log(this.user);
  },
  mounted() {
    this.$nextTick(() => {
      // Set the icon URLs
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: markerIcon2x,
        iconUrl: markerIcon,
        shadowUrl: markerShadow,
      });

      console.log(this.user.company.address.coordinates.lat)
      console.log(this.user.company.address.coordinates.lng)

      var map = L.map('mapid').setView([this.user.company.address.coordinates.lat, this.user.company.address.coordinates.lng], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
      }).addTo(map);

      var marker = L.marker([this.user.company.address.coordinates.lat, this.user.company.address.coordinates.lng]).addTo(map);

      // Aggiungi la gestione degli errori per il marker
      marker.on('error', function (e) {
        console.error("Errore durante il caricamento del marcatore:", e.error);
      });
    });
  }
};
</script>

<style scoped>
#mapid {
  height: 400px;
  width: 100%; 
}
.user-details-container {
  text-align: center;
  margin: 50px auto;
}

.text-h1 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.panel-title {
  font-size: 18px;
  font-weight: bold;
}

.user-details-row {
  margin-bottom: 20px;
}

.user-details-col {
  margin-bottom: 20px;
}

.user-details {
  font-size: 16px;
}

.user-details p {
  margin: 8px 0;
}

.user-details strong {
  font-weight: bold;
}

.d-flex {
  display: flex;
  align-items: center;
}

.justify-start {
  justify-content: flex-start;
}

.expanded-icon {
  margin-right: 8px;
}

.user-image {
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 16px;
}
</style>
