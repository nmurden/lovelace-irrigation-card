class IrrigationZoneCard extends HTMLElement {

  set hass(hass) {
    if (!this.content) {
      const card = document.createElement('ha-card');
      const link = document.createElement('link');
      link.type = 'text/css';
      link.rel = 'stylesheet';
      link.href = '/local/custom_ui/css/irrigation-zone-card.css';
      card.appendChild(link);
      this.content = document.createElement('div');
      this.content.className = 'card';
      card.appendChild(this.content);
      this.appendChild(card);
    }

    //const entityId = this.config.entity;

    const cardtitle = hass.states[this.config.card_title].state;

    this.content.innerHTML = `
      <!-- Main Container -->
      <div class="container" style="background: none, url(/local/custom_ui/images/seedlings.jpg) no-repeat; background-size: contain;"> 
        <!-- Zone Title Section -->
        <section class="irrigation_title">
          <h2 class="irrigation_header">${cardtitle}</h2>
        </section>
        <!-- Zone Schedule Gallery Section -->
        <div class="schedule">
          <div class="zone_time">
            <h1 class="time_title">Next Watering Time</h1>
            <h4>Wednesday 25th March</h4>
            <h4>8:00pm</h4>
          </div>
          <div class="zone_time" style="margin-right: 0px;">
            <h1 class="time_title">Last Watering Time</h1>
            <h4>Tuesday 24th March</h4>
            <h4>8:00pm</h4>
          </div>
        </div>
        <div class="states">
          <div class="attribute">
            <h1 class="state_title">Status</h1>
            <h4>On</h4>
          </div>
          <div class="attribute">
            <h1 class="state_title">Soil Level</h1>
            <h4>50 %</h4>
          </div>
          <div class="attribute">
            <h1 class="state_title">Temperature</h1>
            <h4>20.0 c</h4>
          </div>
          <div class="attribute">
            <h1 class="state_title">Light Level</h1>
            <h4>30 lux</h4>
          </div>
          <div class="attribute" style="margin-right: 0px;">
            <h1 class="state_title">Settings</h1>
            <h4>COG</h4>
          </div>
        </div>
      </div>`;



//    const getUnit = function(measure) {
//      const lengthUnit = hass.config.core.unit_system.length;
//      switch (measure) {
//        case 'air_pressure':
//          return lengthUnit === 'km' ? 'hPa' : 'mbar';
//        case 'length':
//          return lengthUnit;
//        case 'precipitation':
//          return lengthUnit === 'km' ? 'mm' : 'in';
//        default:
//          return hass.config.core.unit_system[measure] || '';
//      }
//    };

//    let title = "";
//    const config = this._config;
//    title = config.title;
//    const last_run = hass.states[this.config.entity_last_run].state;
//    const current_status = hass.states[this.config.entity_current_status].state;
//    const manual activation = hass.states[this.config.entity_manual_activation].state;
//    const moisture_level = Math.round(hass.states[this.config.entity_moisture_level].state);
//    const light_level = Math.round(hass.states[this.config.entity_light_level].state);
//    const temperature = Math.round(hass.states[this.config.entity_temperature].state);
//    const zonetitle = hass.states[this.config.entity_zonetitle].state;
//    const currentstate = hass.states[this.config.entity_currentstate].state;

  }

  setConfig(config) {
    const cardConfig = Object.assign({}, config);
    //const cardtitle = config.title;
//    const next_schedule = cardConfig.entity_next_schedule;
    
//    if (!config.entity_next_schedule] ||
//      !config.entity_last_run ||
//      !config.entity_current_status ||
//      !config.entity_manual_activation ||
//      !config.entity_moisture_level ||
//      !config.entity_light_level ||
//      !config.entity_temperature ||
//      !config.entity_currentstate ||
//      !config.entity_zonetitle) {
//      throw new Error('Please define entities');
//    }
//    this.config = config;
  }

  // @TODO: This requires more intelligent logic
  getCardSize() {
    return 3;
  }
}

customElements.define('irrigation-zone-card', IrrigationZoneCard);