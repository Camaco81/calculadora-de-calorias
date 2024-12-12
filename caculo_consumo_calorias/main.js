const app=Vue.createApp({
data(){
	return{
		sexo:"Seleciona tu sexo",
		TMB:0,
		edad:0,
		peso:0,
		altura:0,
		nivelActividad:"Selecione su nivel de actividad",
		objetivo:"Selecione su objetivo",
		result:0
	}
},
 methods: {
    calcularTMB(sexo, peso, altura, edad) {
      // Fórmula de TMB según el sexo
      return sexo === 'hombre'
        ? (10 * peso) + (6.25 * altura) - (5 * edad) + 5
        : (10 * peso) + (6.25 * altura) - (5 * edad) - 161;
    },
    calcularGastoCalorico(tmb, nivelActividad) {
      // Factor de actividad según el nivel
      switch (nivelActividad) {
        case 'moderado':
          return tmb * 1.55;
        case 'AltaIntensidad':
          return tmb * 1.725;
        default:
          return tmb; // Valor por defecto si el nivel no es válido
      }
    },
    comprobarYCalcularConsumo() {
      const tmb = this.calcularTMB(this.sexo, this.peso, this.altura, this.edad);
      const gastoCalorico = this.calcularGastoCalorico(tmb, this.nivelActividad);

      // Ajustar calorías según el objetivo
      this.result =( gastoCalorico + (this.objetivo === 'volumen' ? 500 : -500)).toFixed(2);
    },
  },
}).mount("#app")