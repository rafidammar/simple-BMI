class BMI {
  #height;
  #weight;

  constructor(height, weight) {
    this.height = Number(height) / 100;
    this.weight = Number(weight);
  }
  getBMI() {
    return (this.weight / this.height ** 2).toFixed(1);
  }
  setWeight(weight) {
    this.weight = weight;
  }
  getWeight() {
    return this.weight;
  }
  setHeight(height) {
    this.height = height;
  }
  getHeight() {
    return this.height;
  }
  getStatusBMI() {
    let BMI = this.getBMI();
    if (BMI < 16) return "Severe Thinness";
    if (BMI < 17) return "Moderate Thinness";
    if (BMI < 18.5) return "Mild Thinness";
    if (BMI < 25) return "Normal";
    if (BMI < 30) return "Overweight";
    if (BMI < 35) return "Obese Class I";
    if (BMI < 40) return "Obese Class II";
    if (BMI > 40) return "Obese Class III";
  }
}
