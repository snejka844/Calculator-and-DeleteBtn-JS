function Calculate() {
    const number_1 = document.querySelector('#number_1')
    const number_2 = document.querySelector('#number_2')
    const operation = document.querySelector('#operation');
    const result = document.querySelector('#result')

    if (operation.value == '+') {
        result.value = Number(number_1.value) + Number(number_2.value);
    }
    else if (operation.value == "-") {
        result.value = Number(number_1.value) - Number(number_2.value);
    }
    else if (operation.value == "*") {
        result.value = Number(number_1.value) * Number(number_2.value);
    }
    else {
        if(Number(number_2.value) == 0)
        {
            result.value = "Dividing by zero is invalid!"
        }
        else
        {
            result.value = Number(number_1.value) / Number(number_2.value);
        }
    }

}
