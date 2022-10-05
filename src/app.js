function main() {
  const inputWeight = document.querySelector("#weight");
  const inputHeight = document.querySelector("#height");
  const btnCalculate = document.querySelector("#btn");
  const result = document.querySelector("#result");
  const category = document.querySelector("#category");

  btnCalculate.addEventListener("click", () => {
    const MyBMI = new BMI(inputHeight.value, inputWeight.value);
    result.innerHTML = MyBMI.getBMI();
    // console.log(MyBMI.getHeight(), MyBMI.getWeight());
    category.innerHTML = MyBMI.getStatusBMI();
  });
}

main();
